import React from 'react';

const ACCREDITATIONS = [
  { code: 'CPPCR', label: 'Colegio de Psicólogos de Costa Rica', faded: true },
  { code: 'APA', label: 'American Psychological Association', faded: false },
  { code: 'EMDR CR', label: 'Asociación EMDR Costa Rica', faded: false },
  { code: 'ACT', label: 'Contextual Behavioral Science', faded: false },
  { code: 'TCC', label: 'Terapia cognitivo-conductual', faded: false },
  { code: 'UCR', label: 'Formación clínica acreditada', faded: true },
];

export const ClientLogos: React.FC = () => {
  return (
    <section className="bg-canvas py-12 px-6 border-b border-[#0C2E1B]/5">
      <div className="max-w-[1140px] mx-auto text-center">
        <p className="text-[13px] font-medium text-[#112218] tracking-tight mb-8">
          Profesionales debidamente incorporados en Costa Rica
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {ACCREDITATIONS.map((item) => (
            <div
              key={item.code}
              className={`flex flex-col items-center select-none transition-opacity ${
                item.faded ? 'opacity-40 hover:opacity-85' : 'opacity-85 hover:opacity-100'
              }`}
            >
              <span className="font-serif text-[22px] text-[#0C2E1B] tracking-tight leading-none">
                {item.code}
              </span>
              <span className="text-[10px] text-[#5B6B62] mt-1 tracking-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
