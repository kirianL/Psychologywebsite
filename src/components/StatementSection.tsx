import React from 'react';

export const StatementSection: React.FC = () => {
  return (
    <section className="bg-canvas py-24 sm:py-36 md:py-44 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Overlapping decorative concentric circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-[360px] h-[360px] md:w-[460px] md:h-[460px] flex items-center justify-center">
          <div className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-[#F3EAFC]/75" />
          <div className="absolute -left-6 md:-left-14 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-[#0C2E1B]/12" />
          <div className="absolute -right-6 md:-right-14 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-[#0C2E1B]/12" />
        </div>
      </div>

      <div className="relative z-10 max-w-[760px] mx-auto text-center">
        <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] leading-[1.16] tracking-[-0.02em] text-[#0C2E1B]">
          Un espacio <span className="text-[#87948C]">confidencial</span> para conversar, entender
          lo que hoy se siente <span className="text-[#87948C]">pesado</span> y recuperar tu calma{' '}
          <span className="text-[#87948C]">a tu propio ritmo</span>.
        </h2>
      </div>
    </section>
  );
};
