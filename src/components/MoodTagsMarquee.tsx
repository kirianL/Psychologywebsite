import React from 'react';
import { BrandLogo } from './Icons';

type PillItem =
  | { kind: 'pill'; label: string; bg: string }
  | { kind: 'icon'; bg: string };

const ROW_ONE: PillItem[] = [
  { kind: 'pill', label: 'Ansiedad', bg: '#D8B4F8' },
  { kind: 'icon', bg: '#9AD7B2' },
  { kind: 'pill', label: 'Desgaste', bg: '#D8B4F8' },
  { kind: 'pill', label: 'TCC', bg: '#D8B4F8' },
  { kind: 'pill', label: 'Duelo', bg: '#9AD7B2' },
  { kind: 'icon', bg: '#F7C59F' },
  { kind: 'pill', label: 'Pareja', bg: '#D8B4F8' },
  { kind: 'pill', label: 'Trauma', bg: '#D8B4F8' },
  { kind: 'icon', bg: '#9AD7B2' },
  { kind: 'pill', label: 'EMDR', bg: '#D8B4F8' },
  { kind: 'pill', label: 'Autoestima', bg: '#D8B4F8' },
];

const ROW_TWO: PillItem[] = [
  { kind: 'pill', label: 'Depresión', bg: '#D8B4F8' },
  { kind: 'icon', bg: '#C5C6FA' },
  { kind: 'pill', label: 'Estrés', bg: '#D8B4F8' },
  { kind: 'pill', label: 'Insomnio', bg: '#9AD7B2' },
  { kind: 'pill', label: 'ACT', bg: '#D8B4F8' },
  { kind: 'icon', bg: '#9AD7B2' },
  { kind: 'pill', label: 'Límites', bg: '#D8B4F8' },
  { kind: 'pill', label: 'Familia', bg: '#D8B4F8' },
  { kind: 'icon', bg: '#FBE094' },
  { kind: 'pill', label: 'Calma', bg: '#9AD7B2' },
  { kind: 'pill', label: 'Bienestar', bg: '#D8B4F8' },
];

const renderTrack = (items: PillItem[], keyPrefix: string) =>
  items.map((item, idx) =>
    item.kind === 'pill' ? (
      <span
        key={`${keyPrefix}-${idx}`}
        className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[14px] font-medium text-[#0C2E1B] shrink-0 select-none"
        style={{ backgroundColor: item.bg }}
      >
        {item.label}
      </span>
    ) : (
      <span
        key={`${keyPrefix}-${idx}`}
        aria-hidden="true"
        className="inline-flex items-center justify-center w-11 h-11 rounded-full text-[#0C2E1B] shrink-0"
        style={{ backgroundColor: item.bg }}
      >
        <BrandLogo className="w-6 h-6" />
      </span>
    )
  );

export const MoodTagsMarquee: React.FC = () => {
  return (
    <section
      aria-label="Áreas de atención clínica"
      className="bg-canvas py-12 overflow-hidden marquee-container"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
      }}
    >
      <div className="space-y-4">
        <div className="flex w-max animate-marquee-left">
          <div className="flex items-center gap-3.5 pr-3.5 shrink-0">
            {renderTrack(ROW_ONE, 'r1a1')}
            {renderTrack(ROW_ONE, 'r1a2')}
          </div>
          <div className="flex items-center gap-3.5 pr-3.5 shrink-0" aria-hidden="true">
            {renderTrack(ROW_ONE, 'r1b1')}
            {renderTrack(ROW_ONE, 'r1b2')}
          </div>
        </div>

        <div className="flex w-max animate-marquee-right">
          <div className="flex items-center gap-3.5 pr-3.5 shrink-0">
            {renderTrack(ROW_TWO, 'r2a1')}
            {renderTrack(ROW_TWO, 'r2a2')}
          </div>
          <div className="flex items-center gap-3.5 pr-3.5 shrink-0" aria-hidden="true">
            {renderTrack(ROW_TWO, 'r2b1')}
            {renderTrack(ROW_TWO, 'r2b2')}
          </div>
        </div>
      </div>
    </section>
  );
};
