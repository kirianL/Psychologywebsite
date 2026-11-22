import React, { useState } from 'react';
import { ArrowRightIcon } from './Icons';

const STEPS = [
  {
    step: '01',
    title: 'Llamada breve de orientación',
    duration: '15 minutos',
    body: 'Una conversación telefónica sin costo para escuchar qué estás buscando y asignarte al psicólogo indicado.',
  },
  {
    step: '02',
    title: 'Evaluación inicial',
    duration: '50 minutos',
    body: 'Una primera consulta para conocer tu historia, tus preocupaciones actuales y definir objetivos claros.',
  },
  {
    step: '03',
    title: 'Sesiones semanales',
    duration: 'Continuo',
    body: 'Citas confidenciales en San José o en línea, combinando escucha clínica con herramientas prácticas.',
  },
  {
    step: '04',
    title: 'Revisión y seguimiento',
    duration: 'Cada 6 sesiones',
    body: 'Revisamos juntos tu avance y escalas de bienestar para que el proceso responda a lo que necesitás.',
  },
];

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-canvas py-16 md:py-24 px-6">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-16">
          <h2 className="font-serif text-[36px] sm:text-[46px] leading-[1.06] tracking-[-0.02em] text-[#0C2E1B]">
            Empezar terapia sin incertidumbre
          </h2>
          <p className="text-[14px] leading-relaxed text-[#4B5563] mt-4 max-w-[380px]">
            Mantenemos el proceso claro y tranquilo desde el primer contacto, para que siempre
            sepás qué sigue antes de iniciar.
          </p>

          <a
            href="#contact"
            className="group pressable mt-7 inline-flex items-center gap-2 bg-[#0C2E1B] hover:bg-[#123c24] text-[#E9F2EC] text-[13px] font-medium rounded-full px-6 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B]"
          >
            <span>Solicitar llamada inicial</span>
            <ArrowRightIcon className="w-3.5 h-3.5 btn-arrow" />
          </a>
        </div>

        <ol className="lg:col-span-7 divide-y divide-[#0C2E1B]/12 border-y border-[#0C2E1B]/12">
          {STEPS.map((item, idx) => {
            const isActive = idx === activeStep;
            return (
              <li key={item.step}>
                <button
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  aria-current={isActive ? 'step' : undefined}
                  className="pressable w-full py-6 sm:py-7 px-2 flex items-start gap-6 sm:gap-8 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B] rounded-lg"
                >
                  <span
                    className={`font-serif text-[32px] sm:text-[38px] leading-none tabular-nums transition-colors duration-200 shrink-0 w-10 ${
                      isActive ? 'text-[#0C2E1B]' : 'text-[#0C2E1B]/25 group-hover:text-[#0C2E1B]/60'
                    }`}
                  >
                    {item.step}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-[25px] sm:text-[28px] text-[#0C2E1B] leading-tight">
                        {item.title}
                      </h3>
                      <span
                        className={`text-[11px] font-medium shrink-0 transition-colors duration-200 ${
                          isActive ? 'text-[#2D6344]' : 'text-[#5B6B62]'
                        }`}
                      >
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#374151] mt-2">
                      {item.body}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
