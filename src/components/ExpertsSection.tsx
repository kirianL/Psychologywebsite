import React from 'react';

interface Psychologist {
  name: string;
  role: string;
  description: string;
  image: string;
  alt: string;
}

const PSYCHOLOGISTS: Psychologist[] = [
  {
    name: 'Dra. Clara Linwood',
    role: 'Psicóloga clínica, TCC y desgaste laboral',
    description:
      'Acompaña a personas adultas con ansiedad, autoexigencia y agotamiento en el trabajo.',
    image: '/images/expert-01.jpg',
    alt: 'Dra. Clara Linwood, psicóloga clínica',
  },
  {
    name: 'Dra. Oliver Hayes',
    role: 'Psicóloga de pareja y familia',
    description:
      'Ayuda a parejas y familias a recuperar el diálogo, la confianza y los acuerdos sanos.',
    image: '/images/expert-oliver-hayes.jpg',
    alt: 'Dra. Oliver Hayes, psicóloga de pareja y familia',
  },
  {
    name: 'Dr. Marcus Bennett',
    role: 'Especialista en trauma, EMDR y ACT',
    description:
      'Trabaja procesos de duelo, experiencias difíciles y ataques de pánico con cuidado clínico.',
    image: '/images/expert-marcus-bennett.jpg',
    alt: 'Dr. Marcus Bennett, especialista en trauma',
  },
  {
    name: 'Dra. Daniel Carter',
    role: 'Clínica en sueño y estado de ánimo',
    description:
      'Se enfoca en insomnio crónico, depresión y rutinas sostenibles de recuperación.',
    image: '/images/expert-daniel-carter.jpg',
    alt: 'Dra. Daniel Carter, especialista en sueño y estado de ánimo',
  },
];

export const ExpertsSection: React.FC = () => {
  return (
    <section id="experts" className="bg-[#0C2E1B] py-20 px-6 text-[#E9F2EC]">
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center max-w-[580px] mx-auto">
          <h2 className="font-serif text-[36px] sm:text-[44px] leading-[1.08] tracking-[-0.02em] text-[#E9F2EC]">
            Conocé al equipo detrás de tu proceso
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-[#9AB5A5]">
            Psicólogos incorporados que trabajan de forma coordinada en atención individual, de
            pareja y manejo del trauma.
          </p>
        </div>

        <div className="mt-12 flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar pb-2 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0">
          {PSYCHOLOGISTS.map((expert) => (
            <article
              key={expert.name}
              className="snap-start shrink-0 w-[78vw] sm:w-auto border-2 border-[#D8B4F8] bg-[#D8B4F8] rounded-sm overflow-hidden flex flex-col group"
            >
              <div className="aspect-[4/4.2] w-full overflow-hidden bg-[#E5E5E0]">
                <img
                  src={expert.image}
                  alt={expert.alt}
                  width={320}
                  height={336}
                  loading="eager"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="bg-[#D8B4F8] p-4 text-[#0C2E1B] flex-1">
                <h3 className="font-sans text-[15px] font-medium text-[#0C2E1B]">{expert.name}</h3>
                <p className="text-[11px] font-medium text-[#0C2E1B]/85 mt-0.5">{expert.role}</p>
                <p className="mt-2 text-[11px] leading-relaxed text-[#0C2E1B]/85">
                  {expert.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
