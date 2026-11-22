import React from 'react';
import { ArrowRightIcon } from './Icons';

const SERVICES = [
  {
    title: 'Terapia individual',
    duration: '50 min',
    description:
      'Sesiones uno a uno para trabajar ansiedad, estado de ánimo bajo, desgaste laboral, duelos y cambios de vida, con base en TCC y psicoterapia clínica.',
    image: '/images/illustrations/therapy-individual.png',
    alt: 'Ilustración de psicóloga y paciente en una sesión individual',
    bg: '#F7F6EE',
    shape: 'rings' as const,
  },
  {
    title: 'Terapia de pareja y relaciones',
    duration: '60 min',
    description:
      'Un espacio neutral para reconstruir la confianza, salir de discusiones repetitivas y fortalecer la comunicación emocional.',
    image: '/images/illustrations/therapy-couple.png',
    alt: 'Ilustración de dos personas conversando en terapia de pareja',
    bg: '#F3EAFC',
    shape: 'arch' as const,
  },
  {
    title: 'Consultas virtuales por video',
    duration: '50 min',
    description:
      'Sesiones flexibles desde tu casa u oficina en cualquier parte de Costa Rica, con la misma calidez y confidencialidad que en consultorio.',
    image: '/images/illustrations/therapy-online.png',
    alt: 'Ilustración de una persona en consulta psicológica por video',
    bg: '#E8F5EE',
    shape: 'waves' as const,
  },
];

const CardBackdropShape: React.FC<{ shape: 'rings' | 'arch' | 'waves' }> = ({ shape }) => {
  if (shape === 'rings') {
    return (
      <svg
        viewBox="0 0 240 200"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <circle cx="120" cy="105" r="76" fill="#E8E4D4" fillOpacity="0.55" />
        <circle cx="120" cy="105" r="94" fill="none" stroke="#0C2E1B" strokeOpacity="0.08" strokeWidth="1" />
      </svg>
    );
  }
  if (shape === 'arch') {
    return (
      <svg
        viewBox="0 0 240 200"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <path d="M52 190V98a68 68 0 0 1 136 0v92H52Z" fill="#E3CEFA" fillOpacity="0.65" />
        <circle cx="176" cy="54" r="18" fill="#9AD7B2" fillOpacity="0.45" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 240 200"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <circle cx="122" cy="104" r="72" fill="#CBEBD8" fillOpacity="0.7" />
      <path
        d="M24 156c42-22 84-22 126 0s84 22 126 0"
        fill="none"
        stroke="#0C2E1B"
        strokeOpacity="0.09"
        strokeWidth="1.2"
      />
    </svg>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-canvas py-16 md:py-20 px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-[540px]">
            <h2 className="font-serif text-[34px] sm:text-[42px] leading-[1.1] tracking-[-0.02em] text-[#0C2E1B]">
              Acompañamiento adaptado a lo que estás viviendo hoy
            </h2>
          </div>
          <a
            href="#contact"
            className="group pressable inline-flex items-center gap-2 text-[13px] font-medium text-[#0C2E1B] border border-[#0C2E1B]/25 hover:border-[#0C2E1B] hover:bg-[#0C2E1B]/5 rounded-full px-5 min-h-[42px] self-start md:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B]"
          >
            <span>Solicitar primera cita</span>
            <ArrowRightIcon className="w-3.5 h-3.5 btn-arrow" />
          </a>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group snap-start shrink-0 w-[82vw] sm:w-[62vw] md:w-auto rounded-3xl border border-[#0C2E1B]/8 overflow-hidden flex flex-col justify-between bg-white"
            >
              <div
                className="relative h-[230px] flex items-center justify-center p-6 overflow-hidden"
                style={{ backgroundColor: service.bg }}
              >
                <CardBackdropShape shape={service.shape} />
                <img
                  src={service.image}
                  alt={service.alt}
                  width={260}
                  height={260}
                  loading="eager"
                  className="relative z-10 max-h-[188px] w-auto object-contain"
                />
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-[26px] text-[#0C2E1B] leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-[#4B5563] leading-relaxed mt-2.5">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0C2E1B]/8 flex items-center justify-between">
                  <span className="text-[12px] font-medium text-[#5B6B62] tabular-nums">
                    {service.duration}
                  </span>
                  <a
                    href="#contact"
                    className="pressable inline-flex items-center gap-2 text-[13px] font-medium text-[#0C2E1B] hover:text-[#1E6B43]"
                  >
                    <span>Consultar disponibilidad</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 btn-arrow" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
