import React, { useState, useEffect, useRef } from 'react';
import { BrandLogo, ArrowRightIcon, MenuIcon, CloseIcon } from './Icons';

const NAV_LINKS = [
  { label: 'Servicios', href: '#services' },
  { label: 'Enfoque', href: '#approach' },
  { label: 'Equipo', href: '#experts' },
  { label: 'Preguntas', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="relative z-40 w-full">
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a
            href="#"
            aria-label="Inicio de Alder Psicología"
            className="inline-flex items-center gap-2.5 text-[#D8B4F8] hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B4F8] rounded-full py-1"
          >
            <BrandLogo className="w-8 h-8" />
            <span className="text-[14px] font-medium text-[#E9F2EC] tracking-tight hidden sm:inline">
              Alder Psicología
            </span>
          </a>

          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] text-[#C8DDD0] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B4F8] rounded px-1 py-0.5"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="#contact"
            className="text-[13px] text-[#C8DDD0] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B4F8] rounded px-1 py-0.5"
          >
            Portal de pacientes
          </a>
          <a
            href="#contact"
            className="group pressable inline-flex items-center gap-2 text-[13px] font-medium text-[#E9F2EC] border border-white/25 hover:border-white/50 hover:bg-white/5 rounded-full px-5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B4F8]"
          >
            <span>Agendar sesión</span>
            <ArrowRightIcon className="w-3.5 h-3.5 btn-arrow" />
          </a>
        </div>

        <button
          ref={toggleBtnRef}
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          className="md:hidden pressable text-[#E9F2EC] min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B4F8]"
        >
          {mobileOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
            className="md:hidden fixed inset-0 top-14 bg-black/45 backdrop-blur-xs z-40"
          />
          <div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navegación móvil"
            className="md:hidden mobile-drawer fixed top-14 inset-x-0 bg-[#0C2E1B] border-b border-white/15 px-6 py-6 shadow-2xl z-50"
          >
            <nav aria-label="Enlaces de navegación móvil" className="flex flex-col gap-1">
              {NAV_LINKS.map((item, idx) => (
                <a
                  key={item.label}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="pressable text-[15px] text-[#E9F2EC] min-h-[44px] flex items-center border-b border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B4F8] rounded px-1"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 gap-4">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-[14px] text-[#C8DDD0] min-h-[44px] inline-flex items-center"
                >
                  Portal de pacientes
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="pressable inline-flex items-center gap-2 text-[13px] font-medium text-[#0C2E1B] bg-[#D8B4F8] rounded-full px-5 min-h-[44px]"
                >
                  <span>Agendar sesión</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
