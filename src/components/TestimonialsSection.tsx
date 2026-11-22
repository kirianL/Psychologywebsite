import React from 'react';

const TESTIMONIALS = [
  {
    initials: 'M.H.',
    context: 'Terapia individual TCC, 12 sesiones',
    bg: '#F7F6EE',
    offset: 'md:-translate-y-3',
    quote:
      'Por primera vez sentí que la terapia tenía estructura sin dejar de ser cálida. Cada semana salía con algo concreto para aplicar en mi día a día.',
  },
  {
    initials: 'S.K.',
    context: 'Terapia de pareja en San José',
    bg: '#D8B4F8',
    offset: 'md:translate-y-4',
    quote:
      'Tener un espacio tranquilo y neutral nos ayudó a frenar discusiones que repetíamos desde hace años y empezar a escucharnos de verdad.',
  },
  {
    initials: 'R.T.',
    context: 'EMDR en línea y recuperación del desgaste',
    bg: '#9AD7B2',
    offset: 'md:-translate-y-1',
    quote:
      'Las sesiones virtuales me permitieron mantener constancia a pesar de mis horarios de trabajo, y la tranquilidad que logré se ha mantenido.',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#0C2E1B] py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto mb-14 md:mb-16">
          <h2 className="font-serif text-[34px] sm:text-[44px] leading-[1.08] tracking-[-0.02em] text-[#E9F2EC]">
            Compartido con permiso, anónimo por privacidad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch md:pb-6">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.initials}
              className={`rounded-3xl p-7 sm:p-8 text-[#0C2E1B] flex flex-col justify-between ${item.offset}`}
              style={{ backgroundColor: item.bg }}
            >
              <div>
                <span
                  aria-hidden="true"
                  className="font-serif text-[54px] leading-none text-[#0C2E1B]/25 block -mb-3 select-none"
                >
                  “
                </span>
                <p className="font-serif text-[22px] sm:text-[24px] leading-[1.28] tracking-[-0.01em] text-[#0C2E1B]">
                  {item.quote}
                </p>
              </div>

              <footer className="mt-8 flex items-center justify-between gap-4">
                <span className="text-[13px] font-semibold text-[#0C2E1B]">{item.initials}</span>
                <span className="text-[11px] text-[#0C2E1B]/75 text-right">{item.context}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
