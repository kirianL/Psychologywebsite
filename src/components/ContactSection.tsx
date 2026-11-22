import React, { useState } from 'react';
import { ArrowRightIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [modality, setModality] = useState<'in-person' | 'online'>('in-person');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.includes('@') || !email.includes('.')) {
      setError('Por favor ingresá tu nombre y un correo electrónico válido.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-canvas py-16 px-6 border-t border-[#0C2E1B]/5">
      <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-[34px] sm:text-[42px] leading-[1.1] tracking-[-0.02em] text-[#0C2E1B]">
            Solicitá tu primera consulta
          </h2>
          <p className="text-[13px] leading-relaxed text-[#374151] mt-3">
            Dejanos tus datos y la modalidad que preferís. Nuestra coordinación te responde en menos
            de un día hábil con los horarios disponibles.
          </p>

          <div className="mt-6 space-y-2 text-[13px] text-[#0C2E1B]">
            <p>
              <span className="text-[#5B6B62]">Consultorio:</span> Los Yoses, San José, Costa Rica
            </p>
            <p>
              <span className="text-[#5B6B62]">Horario:</span> Lunes a sábado, 8:00 a. m. a 7:00
              p. m.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#F7F6EE] rounded-2xl border border-[#0C2E1B]/10 p-6 sm:p-8 min-h-[340px] flex flex-col justify-center">
          {submitted ? (
            <div role="status" aria-live="polite" className="success-enter py-4 text-center max-w-[420px] mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#0C2E1B] text-[#9AD7B2] mx-auto mb-5 inline-flex items-center justify-center shadow-xs">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M5 12.5 9.5 17 19 7.5" pathLength="1" className="check-draw" />
                </svg>
              </div>
              <p className="font-serif text-[30px] text-[#0C2E1B] leading-tight">
                Solicitud recibida
              </p>
              <p className="text-[13px] leading-relaxed text-[#374151] mt-2.5">
                Muchas gracias, {name}. Te escribiremos a {email} en un día hábil para coordinar tu
                consulta {modality === 'in-person' ? 'presencial en San José' : 'en línea por video'}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setNote('');
                }}
                className="pressable mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-[#0C2E1B] underline underline-offset-4 hover:text-[#2D6344] min-h-[44px] px-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B]"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-pressed={modality === 'in-person'}
                  onClick={() => setModality('in-person')}
                  className={`pressable flex-1 min-h-[44px] rounded-full text-[13px] font-medium border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B] ${
                    modality === 'in-person'
                      ? 'bg-[#0C2E1B] text-[#E9F2EC] border-[#0C2E1B]'
                      : 'bg-white text-[#0C2E1B] border-[#0C2E1B]/15'
                  }`}
                >
                  Presencial (San José)
                </button>
                <button
                  type="button"
                  aria-pressed={modality === 'online'}
                  onClick={() => setModality('online')}
                  className={`pressable flex-1 min-h-[44px] rounded-full text-[13px] font-medium border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B] ${
                    modality === 'online'
                      ? 'bg-[#0C2E1B] text-[#E9F2EC] border-[#0C2E1B]'
                      : 'bg-white text-[#0C2E1B] border-[#0C2E1B]/15'
                  }`}
                >
                  En línea (video)
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-[12px] font-medium text-[#0C2E1B] mb-1">
                    Nombre completo
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    aria-invalid={Boolean(error && !name.trim())}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full min-h-[44px] rounded-xl bg-white border border-[#0C2E1B]/15 px-3.5 text-[14px] text-[#0C2E1B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[12px] font-medium text-[#0C2E1B] mb-1">
                    Correo electrónico
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    aria-invalid={Boolean(error && (!email.includes('@') || !email.includes('.')))}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nombre@correo.com"
                    className="w-full min-h-[44px] rounded-xl bg-white border border-[#0C2E1B]/15 px-3.5 text-[14px] text-[#0C2E1B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-note" className="block text-[12px] font-medium text-[#0C2E1B] mb-1">
                  Comentario breve (opcional)
                </label>
                <textarea
                  id="contact-note"
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Días preferidos o motivo general de consulta"
                  className="w-full rounded-xl bg-white border border-[#0C2E1B]/15 p-3.5 text-[14px] text-[#0C2E1B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B]"
                />
              </div>

              {error && (
                <p role="alert" className="text-[12px] text-[#B91C1C]">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="group pressable w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D8B4F8] hover:bg-[#cfa3f6] text-[#0C2E1B] text-[13px] font-medium rounded-full px-7 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1B]"
              >
                <span>Solicitar consulta</span>
                <ArrowRightIcon className="w-3.5 h-3.5 btn-arrow" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
