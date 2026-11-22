import React, { useState } from 'react';
import { MoodHappyIcon, MoodNeutralIcon, MoodSadIcon } from './Icons';

type MoodKey = 'calm' | 'low' | 'anxious';

const MOOD_PRESETS: Record<
  MoodKey,
  {
    label: string;
    percent: string;
    calm: string;
    low: string;
    anxious: string;
    burnout: string;
  }
> = {
  calm: {
    label: 'En calma',
    percent: '87%',
    calm: '87%',
    low: '24%',
    anxious: '19%',
    burnout: '12%',
  },
  low: {
    label: 'Sobrecargado',
    percent: '42%',
    calm: '42%',
    low: '61%',
    anxious: '68%',
    burnout: '54%',
  },
  anxious: {
    label: 'Inquieto',
    percent: '64%',
    calm: '64%',
    low: '48%',
    anxious: '58%',
    burnout: '28%',
  },
};

export const DailyMoodMeterSection: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodKey>('calm');
  const active = MOOD_PRESETS[selectedMood];

  return (
    <section id="mood-meter" className="bg-canvas pt-10 pb-0 px-6 overflow-hidden">
      <div className="max-w-[960px] mx-auto text-center">
        <h2 className="font-serif text-[34px] sm:text-[42px] leading-[1.12] tracking-[-0.02em] text-[#0C2E1B] max-w-[460px] mx-auto">
          Un proceso adaptado a cómo te sentís hoy
        </h2>

        <div className="relative mt-12 sm:mt-14 mx-auto max-w-[740px] pt-10 px-2 sm:px-0">
          <div className="relative mx-auto w-full max-w-[700px] border-t border-l border-r border-[#0C2E1B]/35 rounded-t-[180px] sm:rounded-t-full pt-10 sm:pt-12 px-6 sm:px-14">
            <button
              type="button"
              onClick={() => setSelectedMood('calm')}
              aria-label="Seleccionar estado En calma"
              aria-pressed={selectedMood === 'calm'}
              className={`pressable hover-scale-subtle z-20 absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border border-[#0C2E1B]/15 shadow-sm inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B] ${
                selectedMood === 'calm' ? 'ring-2 ring-[#74C69D]' : ''
              }`}
            >
              <span className="w-10 h-10 rounded-full bg-[#74C69D] text-white inline-flex items-center justify-center">
                <MoodHappyIcon className="w-6 h-6" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMood('low')}
              aria-label="Seleccionar estado Sobrecargado"
              aria-pressed={selectedMood === 'low'}
              className={`pressable hover-scale-subtle z-20 inline-flex absolute bottom-5 -left-4 sm:bottom-6 sm:-left-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#0C2E1B]/15 shadow-sm items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B] ${
                selectedMood === 'low' ? 'ring-2 ring-[#D8B4F8]' : ''
              }`}
            >
              <span className="w-8 h-8 rounded-full bg-[#D8B4F8] text-[#0C2E1B] inline-flex items-center justify-center">
                <MoodSadIcon className="w-5 h-5" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMood('anxious')}
              aria-label="Seleccionar estado Inquieto"
              aria-pressed={selectedMood === 'anxious'}
              className={`pressable hover-scale-subtle z-20 inline-flex absolute bottom-5 -right-4 sm:bottom-6 sm:-right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#0C2E1B]/15 shadow-sm items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B] ${
                selectedMood === 'anxious' ? 'ring-2 ring-[#9AD7B2]' : ''
              }`}
            >
              <span className="w-8 h-8 rounded-full bg-[#9AD7B2] text-[#0C2E1B] inline-flex items-center justify-center">
                <MoodNeutralIcon className="w-5 h-5" />
              </span>
            </button>

            <div className="bg-[#D8B4F8] rounded-t-[155px] sm:rounded-t-full pt-12 sm:pt-14 pb-9 sm:pb-10 px-5 sm:px-12 relative">
              <div
                aria-hidden="true"
                className="w-px h-10 bg-[#0C2E1B]/35 mx-auto -mt-14 mb-4"
              />

              <h3 className="font-serif text-[22px] sm:text-[26px] text-[#0C2E1B]">
                Registro de sesión
              </h3>
              <p className="text-[11px] text-[#0C2E1B]/75 mt-0.5">
                ¿Cómo se ha sentido esta semana?
              </p>

              <p className="text-[12px] font-medium text-[#0C2E1B] mt-5">{active.label}</p>
              <p className="text-[38px] sm:text-[44px] font-normal text-[#0C2E1B] leading-tight tabular-nums">
                {active.percent}
              </p>

              <div className="mt-5 max-w-[320px] mx-auto grid grid-cols-2 gap-x-6 gap-y-2.5 text-[11px] text-[#0C2E1B]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#74C69D] text-white inline-flex items-center justify-center">
                      <MoodHappyIcon className="w-2.5 h-2.5" />
                    </span>
                    En calma
                  </span>
                  <span className="font-medium tabular-nums">{active.calm}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FBE094] text-[#0C2E1B] inline-flex items-center justify-center">
                      <MoodNeutralIcon className="w-2.5 h-2.5" />
                    </span>
                    Inquieto
                  </span>
                  <span className="font-medium tabular-nums">{active.anxious}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FB923C] text-white inline-flex items-center justify-center">
                      <MoodSadIcon className="w-2.5 h-2.5" />
                    </span>
                    Ánimo bajo
                  </span>
                  <span className="font-medium tabular-nums">{active.low}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#F87171] text-white inline-flex items-center justify-center">
                      <MoodSadIcon className="w-2.5 h-2.5" />
                    </span>
                    Agotado
                  </span>
                  <span className="font-medium tabular-nums">{active.burnout}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
