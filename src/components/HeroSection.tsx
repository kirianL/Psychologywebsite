import React, { useState } from 'react';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  DatabaseIcon,
  MoodHappyIcon,
  MoodNeutralIcon,
  MoodSadIcon,
} from './Icons';

const WEEKLY_SESSION_DATA = [
  { day: 'DOM', topColor: '#D8B4F8', barHeight: 'h-6', barColor: '#1E6B43' },
  { day: 'LUN', topColor: '#74C69D', barHeight: 'h-4', barColor: '#1E6B43' },
  { day: 'MAR', topColor: '#D8B4F8', barHeight: 'h-5', barColor: '#1E6B43' },
  { day: 'MIÉ', topColor: '#D8B4F8', barHeight: 'h-4', barColor: '#1E6B43' },
  { day: 'JUE', topColor: '#D8B4F8', barHeight: 'h-6', barColor: '#1E6B43' },
  { day: 'VIE', topColor: '#D8B4F8', barHeight: 'h-6', barColor: '#1E6B43' },
  { day: 'SÁB', topColor: '#74C69D', barHeight: 'h-5', barColor: '#1E6B43' },
];

const OUTCOME_PAGES = [
  {
    percent: '78%',
    quote: 'Las sesiones semanales constantes ayudan a ordenar pensamientos antes de llegar al desgaste.',
  },
  {
    percent: '91%',
    quote: 'Nuestros pacientes sienten escucha genuina y respaldo clínico desde la primera sesión.',
  },
  {
    percent: '86%',
    quote: 'El 86% de las personas reporta alivio medible en ansiedad y estado de ánimo en 8 sesiones.',
  },
  {
    percent: '84%',
    quote: 'Psicoterapia basada en evidencia (TCC y EMDR) adaptada a tu ritmo e historia.',
  },
  {
    percent: '89%',
    quote: 'Estabilidad emocional duradera construida con herramientas prácticas y acompañamiento humano.',
  },
];

export const HeroSection: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(2);
  const currentOutcome = OUTCOME_PAGES[pageIndex];

  const handlePrev = () =>
    setPageIndex((prev) => (prev === 0 ? OUTCOME_PAGES.length - 1 : prev - 1));
  const handleNext = () =>
    setPageIndex((prev) => (prev === OUTCOME_PAGES.length - 1 ? 0 : prev + 1));

  const dots = Array.from({ length: 34 }, (_, i) => {
    const angle = (i / 34) * 2 * Math.PI - Math.PI / 2;
    const cx = 100 + 74 * Math.cos(angle);
    const cy = 100 + 74 * Math.sin(angle);
    const isTick = i >= 21 && i <= 25;
    return { cx, cy, angle, isTick };
  });

  return (
    <section id="consultation" className="relative z-10 pt-2 pb-6 px-6">
      <div className="max-w-[1060px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#163F28] border border-white/10 rounded-full pl-1.5 pr-3.5 py-1 mb-3">
            <span className="w-5 h-5 rounded-full bg-[#D8B4F8] text-[#0C2E1B] inline-flex items-center justify-center">
              <MoodHappyIcon className="w-3.5 h-3.5" />
            </span>
            <span className="text-[11px] font-medium text-[#E9F2EC] tracking-wide">
              Psicología clínica
            </span>
          </div>

          <h1 className="font-serif text-[38px] sm:text-[46px] lg:text-[50px] font-normal text-[#E9F2EC] leading-[1.03] tracking-[-0.02em]">
            Comprende tu mente,
            <br />
            sana a tu propio ritmo.
          </h1>

          <p className="mt-2.5 text-[13px] sm:text-[14px] text-[#9AB5A5] font-normal">
            Terapia individual, de pareja y familiar, presencial en San José o en línea.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group pressable inline-flex items-center gap-2 bg-[#D8B4F8] hover:bg-[#cfa3f6] text-[#0C2E1B] text-[13px] font-medium rounded-full px-6 min-h-[42px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Agendar consulta</span>
              <ArrowRightIcon className="w-3.5 h-3.5 btn-arrow" />
            </a>
            <a
              href="#services"
              className="pressable inline-flex items-center gap-2 border border-white/25 hover:border-white/50 hover:bg-white/5 text-[#E9F2EC] text-[13px] font-medium rounded-full px-6 min-h-[42px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B4F8]"
            >
              <span>Explorar terapias</span>
            </a>
          </div>
        </div>

        {/* 3-Column Bento Clinical Overview */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          <div className="rounded-2xl overflow-hidden bg-[#F7F6EE] flex flex-col justify-between shadow-lg">
            <div className="relative h-[155px] sm:h-[165px] overflow-hidden bg-[#E5E5E0]">
              <img
                src="/images/hero-woman.jpg"
                alt="Dra. Ena Rivaldo, psicóloga clínica principal"
                width={360}
                height={165}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-[50%_35%] grayscale contrast-110"
              />
            </div>

            <div className="bg-[#F7F6EE] rounded-t-2xl -mt-4 relative z-10 p-4 text-[#112218]">
              <p className="text-[10px] text-[#6B7280]">Psicóloga clínica principal</p>
              <p className="text-[14px] font-medium text-[#112218] mt-0.5">Dra. Ena Rivaldo</p>

              <div className="flex items-center justify-between mt-2 mb-2.5">
                <span className="text-[12px] font-medium text-[#112218]">Seguimiento emocional</span>
                <span className="text-[11px] text-[#6B7280]">Semanal</span>
              </div>

              <div className="grid grid-cols-7 gap-2 items-end text-center">
                {WEEKLY_SESSION_DATA.map((item) => (
                  <div key={item.day} className="flex flex-col items-center gap-1.5">
                    <span
                      className="w-3.5 h-3 rounded-full"
                      style={{ backgroundColor: item.topColor }}
                    />
                    <span
                      className={`w-3.5 ${item.barHeight} rounded-full`}
                      style={{ backgroundColor: item.barColor }}
                    />
                    <span className="text-[8px] font-semibold tracking-wider text-[#374151] mt-1">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#103822] border border-white/10 p-4 flex flex-col justify-between text-[#E9F2EC] shadow-lg min-h-[310px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#C8DDD0]">
                <DatabaseIcon className="w-4 h-4 text-[#C8DDD0]" />
                <span className="text-[12px] font-medium">Resultados clínicos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] px-3 py-0.5 rounded-full border border-white/25 text-[#E9F2EC]">
                  PHQ-9
                </span>
                <span
                  aria-hidden="true"
                  className="w-6 h-6 rounded-full border border-white/25 inline-flex items-center justify-center text-[11px] text-[#E9F2EC]"
                >
                  ···
                </span>
              </div>
            </div>

            <div className="my-1.5 flex items-center justify-center">
              <div className="relative w-[144px] h-[144px] flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
                  {dots.map((d, idx) =>
                    d.isTick ? (
                      <line
                        key={idx}
                        x1={100 + 58 * Math.cos(d.angle)}
                        y1={100 + 58 * Math.sin(d.angle)}
                        x2={100 + 78 * Math.cos(d.angle)}
                        y2={100 + 78 * Math.sin(d.angle)}
                        stroke="#D8B4F8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    ) : (
                      <circle key={idx} cx={d.cx} cy={d.cy} r="2.2" fill="#D8B4F8" fillOpacity="0.85" />
                    )
                  )}
                </svg>
                <span className="absolute text-[34px] font-normal text-[#D8B4F8] tabular-nums tracking-tight">
                  {currentOutcome.percent}
                </span>
              </div>
            </div>

            <div>
              <p className="text-[12px] text-center text-[#C8DDD0] leading-relaxed px-2 min-h-[38px]">
                {currentOutcome.quote}
              </p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Resultado clínico anterior"
                  className="pressable text-[#C8DDD0] hover:text-white p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B4F8]"
                >
                  <ArrowLeftIcon className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-0.5 flex-1 justify-center">
                  {OUTCOME_PAGES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setPageIndex(idx)}
                      aria-label={`Resultado ${idx + 1}`}
                      aria-current={idx === pageIndex ? 'true' : undefined}
                      className="min-h-6 min-w-6 px-0.5 inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B4F8] rounded"
                    >
                      <span
                        className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                          idx === pageIndex ? 'w-7 bg-[#74C69D]' : 'w-5 bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Siguiente resultado clínico"
                  className="pressable text-[#C8DDD0] hover:text-white p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B4F8]"
                >
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#103822] border border-white/10 p-4 flex flex-col justify-between text-[#E9F2EC] shadow-lg">
            <div>
              <p className="text-[13px] font-medium text-[#E9F2EC] mb-2.5">Bienestar emocional</p>

              <div className="grid grid-cols-12 gap-1.5 mb-3.5">
                <div className="col-span-4 h-2 rounded-full bg-[#74C69D]" />
                <div className="col-span-3 h-2 rounded-full bg-[#D8B4F8]" />
                <div className="col-span-3 h-2 rounded-full bg-[#FB923C]" />
                <div className="col-span-2 h-2 rounded-full bg-[#F87171]" />
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[12px]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[#C8DDD0]">
                    <span className="w-4 h-4 rounded-full bg-[#74C69D]/20 text-[#74C69D] inline-flex items-center justify-center">
                      <MoodHappyIcon className="w-3 h-3" />
                    </span>
                    Calma
                  </span>
                  <span className="font-medium tabular-nums">80%</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[#C8DDD0]">
                    <span className="w-4 h-4 rounded-full bg-[#D8B4F8]/20 text-[#D8B4F8] inline-flex items-center justify-center">
                      <MoodNeutralIcon className="w-3 h-3" />
                    </span>
                    Ánimo bajo
                  </span>
                  <span className="font-medium tabular-nums">46%</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[#C8DDD0]">
                    <span className="w-4 h-4 rounded-full bg-[#FB923C]/20 text-[#FB923C] inline-flex items-center justify-center">
                      <MoodSadIcon className="w-3 h-3" />
                    </span>
                    Ansiedad
                  </span>
                  <span className="font-medium tabular-nums">57%</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[#C8DDD0]">
                    <span className="w-4 h-4 rounded-full bg-[#F87171]/20 text-[#F87171] inline-flex items-center justify-center">
                      <MoodSadIcon className="w-3 h-3" />
                    </span>
                    Agotamiento
                  </span>
                  <span className="font-medium tabular-nums">16%</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[13px] font-medium text-[#E9F2EC] mb-2">Etapas de atención</p>

              <div className="space-y-2">
                <div className="bg-[#16442A] rounded-xl px-3 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-[#74C69D]/20 text-[#74C69D] inline-flex items-center justify-center">
                      <MoodHappyIcon className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-[12px] font-medium leading-tight">Evaluación inicial</p>
                      <p className="text-[10px] text-[#9AB5A5]">Entrevista clínica de 50 min</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-[#74C69D]">Completado</span>
                </div>

                <div className="bg-[#16442A] rounded-xl px-3 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-[#74C69D]/20 text-[#74C69D] inline-flex items-center justify-center">
                      <MoodHappyIcon className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-[12px] font-medium leading-tight">Plan terapéutico</p>
                      <p className="text-[10px] text-[#9AB5A5]">Objetivos personalizados</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-[#74C69D]">Activo</span>
                </div>

                <div className="bg-[#16442A] rounded-xl px-3 py-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/avatar-albert.jpg"
                      alt="Dr. Albert Rivaldo, supervisor clínico"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[9px] text-[#9AB5A5]">Supervisor clínico</p>
                      <p className="text-[12px] font-medium text-[#E9F2EC]">Dr. Albert Rivaldo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
