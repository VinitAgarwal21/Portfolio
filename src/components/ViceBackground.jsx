import React from 'react';

export default function ViceBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base background color */}
      <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#090d16] transition-colors duration-500" />

      {/* Atmospheric dusk/sunset ambient radial glow (soft, diffused, zero eye strain) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] rounded-full bg-gradient-to-b from-rose-500/10 via-purple-500/5 to-transparent dark:from-rose-500/15 dark:via-purple-500/10 dark:to-transparent blur-3xl pointer-events-none" />

      {/* Subtle secondary teal/cyan aura at bottom */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* Gentle Retro Sunset Sun (Soft, stylized, clean) */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full opacity-30 dark:opacity-25 pointer-events-none blur-[1px]">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-400 via-rose-500 to-purple-600 flex flex-col justify-end pb-3 space-y-1.5 overflow-hidden">
          {/* Subtle clean horizontal bands */}
          <div className="h-0.5 bg-[#f8fafc] dark:bg-[#090d16] w-full" />
          <div className="h-1 bg-[#f8fafc] dark:bg-[#090d16] w-full" />
          <div className="h-1.5 bg-[#f8fafc] dark:bg-[#090d16] w-full" />
          <div className="h-2 bg-[#f8fafc] dark:bg-[#090d16] w-full" />
          <div className="h-2.5 bg-[#f8fafc] dark:bg-[#090d16] w-full" />
        </div>
      </div>

      {/* Subtle synthwave grid */}
      <div className="subtle-grid" />

      {/* Elegant SVG Silhouette of Palm Trees & Subtle Skyline at the horizon */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-48 opacity-10 dark:opacity-20 text-slate-400 dark:text-slate-800 fill-current transition-colors duration-500"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {/* Distant skyline buildings */}
        <path d="M0,320 L0,260 L60,260 L60,220 L110,220 L110,270 L180,270 L180,200 L240,200 L240,280 L320,280 L320,240 L380,240 L380,280 L460,280 L460,210 L520,210 L520,270 L600,270 L600,240 L670,240 L670,280 L750,280 L750,220 L820,220 L820,270 L890,270 L890,210 L960,210 L960,260 L1030,260 L1030,200 L1100,200 L1100,270 L1180,270 L1180,230 L1260,230 L1260,280 L1340,280 L1340,220 L1440,220 L1440,320 Z" />

        {/* Left Palm Tree */}
        <g transform="translate(60, 40) scale(0.6)">
          <path d="M80,380 Q95,240 130,130 Q135,110 140,90 Q125,110 115,240 Q105,320 70,380 Z" />
          <path d="M135,100 Q190,70 240,110 Q190,115 135,105 Z" />
          <path d="M135,100 Q180,30 220,50 Q170,75 135,105 Z" />
          <path d="M135,100 Q130,10 150,0 Q130,40 135,105 Z" />
          <path d="M135,100 Q80,20 40,45 Q90,65 135,105 Z" />
          <path d="M135,100 Q60,65 10,105 Q70,110 135,105 Z" />
          <path d="M135,100 Q70,120 30,165 Q85,145 135,105 Z" />
          <path d="M135,100 Q190,130 230,175 Q180,150 135,105 Z" />
        </g>

        {/* Right Palm Tree */}
        <g transform="translate(1280, 30) scale(0.65)">
          <path d="M120,380 Q105,240 85,130 Q80,110 75,90 Q90,110 95,240 Q105,320 130,380 Z" />
          <path d="M80,100 Q30,70 -20,110 Q30,115 80,105 Z" />
          <path d="M80,100 Q40,30 0,50 Q50,75 80,105 Z" />
          <path d="M80,100 Q85,10 65,0 Q85,40 80,105 Z" />
          <path d="M80,100 Q135,20 175,45 Q125,65 80,105 Z" />
          <path d="M80,100 Q155,65 205,105 Q145,110 80,105 Z" />
          <path d="M80,100 Q145,120 185,165 Q130,145 80,105 Z" />
          <path d="M80,100 Q25,130 -15,175 Q35,150 80,105 Z" />
        </g>
      </svg>
    </div>
  );
}
