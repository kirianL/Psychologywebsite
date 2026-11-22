import React, { useState } from 'react';

const MODALITIES = [
  {
    code: 'TCC',
    title: 'Terapia cognitivo-conductual',
    detail:
      'Estrategias prácticas para identificar pensamientos que desgastan y aliviar la ansiedad persistente o el ánimo bajo.',
    focus: 'Reestructuración de pensamientos y hábitos diarios',
    cadence: 'Usualmente entre 8 y 16 sesiones estructuradas',
    image: '/images/illustrations/approach-cbt.png',
    alt: 'Ilustración editorial sobre desenredar pensamientos en TCC',
  },
  {
    code: 'ACT',
    title: 'Aceptación y compromiso',
    detail:
      'Desarrolla flexibilidad psicológica para que las emociones difíciles no decidan por vos en tu vida cotidiana.',
    focus: 'Acción guiada por valores y apertura emocional',
    cadence: 'Ritmo adaptable para transiciones de vida',
    image: '/images/illustrations/approach-act.png',
    alt: 'Ilustración editorial sobre avanzar paso a paso en terapia ACT',
  },
  {
    code: 'EMDR',
    title: 'EMDR focalizado en trauma',
    detail:
      'Reprocesamiento estructurado de recuerdos para sanar eventos difíciles y aliviar la sobrecarga del sistema nervioso.',
    focus: 'Procesamiento bilateral y resolución de trauma',
    cadence: 'Ritmo cuidadoso con estabilización previa',
    image: '/images/illustrations/approach-emdr.png',
    alt: 'Ilustración editorial sobre equilibrio bilateral en terapia EMDR',
  },
  {
    code: 'MBCT',
    title: 'Atención plena clínica',
    detail:
      'Conciencia corporal y prevención de recaídas para estrés sostenido, problemas de sueño y agotamiento laboral.',
    focus: 'Regulación del sistema nervioso y descanso',
    cadence: 'Práctica semanal guiada y seguimiento',
    image: '/images/illustrations/approach-mbct.png',
    alt: 'Ilustración editorial sobre calma y práctica de atención plena',
  },
];

export const ApproachSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="approach" className="bg-canvas py-12 md:py-16 px-6">
      <div className="max-w-[1140px] mx-auto bg-[#F0E3FC] rounded-3xl p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-serif text-[32px] sm:text-[42px] leading-[1.08] tracking-[-0.02em] text-[#0C2E1B]">
              Métodos basados en evidencia, adaptados a cada persona
            </h2>
            <p className="text-[13px] leading-relaxed text-[#112218]/80 mt-3 max-w-[400px]">
              Ninguna persona vive la misma historia. Tu psicólogo integra enfoques clínicos
              respaldados en lugar de aplicar recetas rígidas.
            </p>

            <div className="mt-8 w-full max-w-[270px] flex justify-center lg:justify-start">
              <img
                src="/images/illustrations/approach-mind.png"
                alt="Ilustración sobre claridad mental y equilibrio emocional"
                width={270}
                height={270}
                loading="lazy"
                className="w-[220px] sm:w-[260px] h-auto object-contain"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#0C2E1B]/12 pt-8 lg:pt-0 lg:pl-10">
            <div className="pb-4 border-b border-[#0C2E1B]/12">
              <div role="tablist" aria-label="Enfoques terapéuticos" className="flex items-center justify-between sm:justify-start sm:gap-9">
                {MODALITIES.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.code}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveIndex(idx)}
                      className={`pressable relative min-h-[44px] text-[12px] sm:text-[13px] font-semibold tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B] rounded px-1 ${
                        isActive ? 'text-[#0C2E1B]' : 'text-[#0C2E1B]/45 hover:text-[#0C2E1B]/80'
                      }`}
                    >
                      {item.code}
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 right-0 bottom-1.5 h-[2px] bg-[#0C2E1B] transition-opacity duration-200 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 items-start pt-6">
              {MODALITIES.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={item.code}
                    role="tabpanel"
                    aria-hidden={!isActive}
                    className={`col-start-1 row-start-1 w-full grid grid-cols-1 sm:grid-cols-12 gap-6 items-start transition-[opacity,transform,filter] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      isActive
                        ? 'opacity-100 translate-y-0 blur-0 pointer-events-auto'
                        : 'opacity-0 translate-y-1 blur-[1.5px] pointer-events-none select-none'
                    }`}
                  >
                    <div className="sm:col-span-6 flex items-center justify-center pt-2">
                      <img
                        src={item.image}
                        alt={item.alt}
                        width={250}
                        height={250}
                        className="w-[210px] sm:w-[240px] h-[210px] sm:h-[240px] object-contain"
                      />
                    </div>

                    <div className="sm:col-span-6 text-center sm:text-left">
                      <span className="text-[11px] font-semibold tracking-wider text-[#2D6344]">
                        {item.code}
                      </span>
                      <h3 className="font-serif text-[28px] sm:text-[32px] text-[#0C2E1B] mt-1 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-[#112218]/80 mt-2.5">
                        {item.detail}
                      </p>

                      <div className="mt-5 pt-4 border-t border-[#0C2E1B]/12 space-y-2 text-[12px]">
                        <div>
                          <span className="text-[#4B5D53] block">Enfoque principal</span>
                          <span className="font-medium text-[#0C2E1B]">{item.focus}</span>
                        </div>
                        <div>
                          <span className="text-[#4B5D53] block">Ritmo de sesiones</span>
                          <span className="font-medium text-[#0C2E1B]">{item.cadence}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
