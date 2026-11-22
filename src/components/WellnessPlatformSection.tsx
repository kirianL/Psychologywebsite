import React, { useState } from 'react';
import { ExclamationCircleIcon } from './Icons';

const CLINICAL_SCORES = [
  { label: 'Estabilidad emocional', percent: 90, color: '#0C2E1B' },
  { label: 'Calidad del descanso', percent: 72, color: '#D8B4F8' },
  { label: 'Funcionalidad diaria', percent: 85, color: '#FFFFFF' },
  { label: 'Manejo del estrés', percent: 78, color: '#468C64' },
];

const TEAM_AVATARS = [
  { src: '/images/expert-01.jpg', alt: 'Dra. Clara Linwood' },
  { src: '/images/expert-oliver-hayes.jpg', alt: 'Dra. Oliver Hayes' },
  { src: '/images/expert-marcus-bennett.jpg', alt: 'Dr. Marcus Bennett' },
  { src: '/images/expert-daniel-carter.jpg', alt: 'Dra. Daniel Carter' },
];

export const WellnessPlatformSection: React.FC = () => {
  const [sessionPreference, setSessionPreference] = useState<'in-person' | 'online'>('in-person');

  return (
    <section id="platform" className="bg-canvas py-10 md:py-14 px-6">
      <div className="max-w-[1060px] mx-auto bg-[#D8B4F8] rounded-2xl p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-3 flex flex-col justify-between">
            <p className="text-[48px] sm:text-[56px] font-normal text-[#0C2E1B] leading-none tabular-nums tracking-tight">
              92%
            </p>

            <div className="mt-8 lg:mt-0">
              <div className="flex items-center -space-x-2.5 mb-2.5">
                {TEAM_AVATARS.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar.src}
                    alt={avatar.alt}
                    width={32}
                    height={32}
                    loading="lazy"
                    className="w-8 h-8 rounded-full object-cover border-2 border-[#D8B4F8]"
                  />
                ))}
              </div>
              <p className="text-[11px] leading-snug text-[#112218]/85 max-w-[210px]">
                de nuestros pacientes reportan sentirse escuchados y acompañados desde las primeras
                sesiones.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#9AD7B2] rounded-xl p-5 sm:p-6 text-[#0C2E1B] flex flex-col justify-between">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="font-sans text-[16px] font-medium text-[#0C2E1B]">
                  Índice de progreso clínico
                </h3>
                <p className="text-[11px] text-[#0C2E1B]/75 mt-0.5">
                  Seguimiento cuidadoso entre sesiones
                </p>
              </div>
              <ExclamationCircleIcon className="w-5 h-5 text-[#0C2E1B]/80 shrink-0" />
            </div>

            <div className="space-y-3.5">
              {CLINICAL_SCORES.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-[12px] font-medium mb-1.5">
                    <span>{item.label}</span>
                    <span className="tabular-nums">{item.percent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#0C2E1B]/12 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-[width] duration-250 ease-[cubic-bezier(0.23,1,0.32,1)]"
                      style={{
                        width: `${item.percent}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-[28px] sm:text-[32px] leading-[1.12] tracking-[-0.01em] text-[#0C2E1B]">
                Atención psicológica seria, sin listas de espera
              </h2>
              <p className="text-[12px] leading-relaxed text-[#112218]/80 mt-3 max-w-[300px]">
                Conversá con un profesional incorporado al CPPCR en nuestros consultorios en San
                José o por videollamada privada desde todo el país.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSessionPreference('in-person')}
                aria-label="Preferir sesiones presenciales"
                aria-pressed={sessionPreference === 'in-person'}
                className={`pressable px-4 min-h-[40px] rounded-full text-[12px] font-medium ${
                  sessionPreference === 'in-person'
                    ? 'bg-[#0C2E1B] text-[#E9F2EC]'
                    : 'bg-white/75 text-[#0C2E1B]'
                }`}
              >
                Presencial
              </button>
              <button
                type="button"
                onClick={() => setSessionPreference('online')}
                aria-label="Preferir sesiones en línea"
                aria-pressed={sessionPreference === 'online'}
                className={`pressable px-4 min-h-[40px] rounded-full text-[12px] font-medium ${
                  sessionPreference === 'online'
                    ? 'bg-[#0C2E1B] text-[#E9F2EC]'
                    : 'bg-white/75 text-[#0C2E1B]'
                }`}
              >
                En línea
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
