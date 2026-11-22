import React, { useState } from 'react';

const FAQS = [
  {
    q: '¿Cuánto dura cada sesión de terapia?',
    a: 'Las sesiones individuales y virtuales duran 50 minutos. Las consultas de pareja y familia tienen una duración de 60 minutos para que todos tengan espacio para hablar.',
  },
  {
    q: '¿Necesito referencia médica o diagnóstico previo para agendar?',
    a: 'No. Podés solicitar una consulta inicial directamente. Si utilizás seguro médico privado, te indicamos si tu póliza solicita referencia previa.',
  },
  {
    q: '¿Es estrictamente confidencial todo lo que converso?',
    a: 'Sí. Todo el equipo cumple con el código ético del CPPCR. Los expedientes clínicos se resguardan de forma confidencial y nunca se comparten sin tu consentimiento expreso.',
  },
  {
    q: '¿Cuántas sesiones voy a necesitar?',
    a: 'Los procesos breves de TCC suelen tomar entre 8 y 16 sesiones, mientras que el trabajo de trauma o pareja puede extenderse más. Revisamos tu avance juntos cada 6 sesiones.',
  },
  {
    q: '¿Puedo alternar entre sesiones presenciales en San José y virtuales?',
    a: 'Sí. Muchos pacientes asisten presencialmente la mayoría de las semanas y cambian a videollamada cuando tienen mucho trabajo o están fuera de la ciudad.',
  },
  {
    q: '¿Cuál es la política de reprogramación o cancelación?',
    a: 'Podés reprogramar o cancelar tu cita sin costo avisando con al menos 24 horas de anticipación.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-canvas py-16 md:py-20 px-6">
      <div className="max-w-[820px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-[34px] sm:text-[42px] leading-[1.1] tracking-[-0.02em] text-[#0C2E1B]">
            Antes de tu primera cita
          </h2>
        </div>

        <div className="divide-y divide-[#0C2E1B]/12 border-y border-[#0C2E1B]/12">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;
            return (
              <div key={item.q} className="py-1">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="pressable w-full min-h-[54px] py-3.5 flex items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B] rounded-lg px-2"
                >
                  <span className="text-[15px] sm:text-[16px] font-medium text-[#0C2E1B]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`w-7 h-7 rounded-full border border-[#0C2E1B]/20 inline-flex items-center justify-center shrink-0 text-[#0C2E1B] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      isOpen ? 'rotate-45 bg-[#D8B4F8] border-transparent' : ''
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current" fill="none" strokeWidth="1.8">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  data-open={isOpen}
                  className="faq-panel"
                >
                  <div className="faq-panel-inner">
                    <p className="px-2 pb-4 text-[13px] sm:text-[14px] leading-relaxed text-[#374151]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
