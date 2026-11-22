import React, { useState } from 'react';
import { BrandLogo, ArrowRightIcon, ArrowUpRightIcon } from './Icons';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@') || !trimmed.includes('.')) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <footer id="footer" className="bg-[#0C2E1B] text-[#E9F2EC] pt-16 pb-8 px-6">
      <div className="max-w-[1060px] mx-auto">
        <div className="text-center max-w-[540px] mx-auto">
          <div className="inline-flex items-center justify-center text-[#E9F2EC] mb-4">
            <BrandLogo className="w-9 h-9" />
          </div>
          <h2 className="font-serif text-[30px] sm:text-[36px] leading-[1.15] tracking-[-0.01em] text-[#E9F2EC]">
            Un lugar sereno para comenzar cuando estés listo para conversar
          </h2>
        </div>

        <div className="mt-14 pb-10 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4">
            <p className="text-[11px] text-[#9AB5A5] mb-1">Ubicación</p>
            <p className="text-[13px] text-[#E9F2EC]">Los Yoses, San José, Costa Rica</p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] text-[#9AB5A5] mb-1">Teléfono</p>
            <a
              href="tel:+50622894120"
              className="text-[13px] text-[#E9F2EC] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B4F8] rounded"
            >
              +506 2289-4120
            </a>
          </div>

          <div className="md:col-span-4">
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="footer-email" className="sr-only">
                Recibir notas de la clínica
              </label>
              <div className="flex items-center justify-between border border-white/25 rounded-full pl-5 pr-1.5 py-1.5 focus-within:border-[#9AD7B2]">
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  placeholder="Tu correo para novedades"
                  className="bg-transparent text-[13px] text-[#E9F2EC] placeholder:text-[#C8DDD0] focus:outline-none w-full pr-2"
                />
                <button
                  type="submit"
                  aria-label="Suscribirse por correo"
                  className="pressable w-9 h-9 rounded-full bg-[#9AD7B2] hover:bg-[#74C69D] text-[#0C2E1B] inline-flex items-center justify-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ArrowUpRightIcon className="w-4 h-4" />
                </button>
              </div>
              {status === 'error' && (
                <p role="alert" className="text-[11px] text-[#F87171] mt-1.5 pl-4">
                  Por favor ingresá un correo electrónico válido.
                </p>
              )}
              {status === 'success' && (
                <p role="status" aria-live="polite" className="text-[11px] text-[#74C69D] mt-1.5 pl-4">
                  Gracias, registramos tu correo.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-[12px]">
          <div>
            <p className="font-medium text-[#E9F2EC] mb-3">Alder Psicología</p>
            <p className="text-[#9AB5A5] leading-relaxed">
              Clínica privada de psicología clínica y psicoterapia en San José, Costa Rica, y en
              línea para todo el país.
            </p>
          </div>

          <div>
            <p className="font-medium text-[#E9F2EC] mb-3">01 - Clínica</p>
            <ul className="space-y-2.5 text-[#9AB5A5]">
              {[
                { label: 'Servicios', href: '#services' },
                { label: 'Enfoque', href: '#approach' },
                { label: 'Equipo', href: '#experts' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between hover:text-white transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-[#E9F2EC] mb-3">02 - Atención</p>
            <ul className="space-y-2.5 text-[#9AB5A5]">
              {[
                { label: 'Terapia individual', href: '#services' },
                { label: 'Terapia de pareja', href: '#services' },
                { label: 'Consultas virtuales', href: '#services' },
                { label: 'Preguntas frecuentes', href: '#faq' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between hover:text-white transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-[#E9F2EC] mb-3">03 - Respaldo</p>
            <ul className="space-y-2.5 text-[#9AB5A5]">
              {['Confidencialidad', 'Aviso de privacidad', 'Normativa CPPCR', 'Contacto'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#contact"
                      className="flex items-center justify-between hover:text-white transition-colors"
                    >
                      <span>{item}</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="font-medium text-[#E9F2EC] mb-3">Agendar consulta</p>
            <p className="text-[#9AB5A5] leading-relaxed mb-3">
              Conversá con nuestra coordinación para encontrar al psicólogo adecuado para vos.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-[#E9F2EC] hover:text-[#9AD7B2] transition-colors"
            >
              <span className="underline underline-offset-4">Solicitar llamada</span>
              <ArrowRightIcon className="w-3.5 h-3.5 btn-arrow" />
            </a>
          </div>
        </div>

        <div className="pt-4 text-center">
          <p className="text-[11px] text-[#9AB5A5] underline underline-offset-4">
            Copyright 2026 Alder Psicología. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
