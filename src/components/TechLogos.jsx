import React from 'react';

/**
 * Official Brand SVG Logos for Technologies
 * High quality vector SVGs with official brand colors
 */

export const TechLogos = {
  Python: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path
        d="M63.7 3.5c-15.6 0-25.2 6.8-25.2 20.3v14.9h25.7v3.7H29.1C13 42.4 3.5 53.3 3.5 69.4c0 15.6 9 26.2 25.1 26.2h7.6v-12.7c0-8.9 7.6-16.7 16.6-16.7h25.8c7.4 0 13.5-6.2 13.5-13.7V23.8c0-13.5-9.6-20.3-28-20.3zm-13.8 7.6c2.8 0 5 2.3 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"
        fill="url(#python-grad-a)"
      />
      <path
        d="M64.3 124.5c15.6 0 25.2-6.8 25.2-20.3v-14.9H63.8v-3.7h35.1c16.1 0 25.6-10.9 25.6-27 0-15.6-9-26.2-25.1-26.2h-7.6v12.7c0 8.9-7.6 16.7-16.6 16.7H49.4c-7.4 0-13.5 6.2-13.5 13.7v28.7c0 13.5 9.6 20.3 28.4 20.3zm13.8-7.6c-2.8 0-5-2.3-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
        fill="url(#python-grad-b)"
      />
      <defs>
        <linearGradient id="python-grad-a" x1="16.5" y1="9.5" x2="80.6" y2="69.7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#387EB8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="python-grad-b" x1="113.5" y1="119.5" x2="48.5" y2="58.7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE873" />
          <stop offset="1" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
    </svg>
  ),

  TypeScript: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path d="M1.5 1.5h125v125H1.5z" fill="#3178C6" />
      <path
        d="M71.4 87.7c1.8 3.5 4.3 6.3 7.6 8.3 3.3 2 7.2 3 11.6 3 3.7 0 6.9-.7 9.6-2.1 2.7-1.4 4.8-3.3 6.3-5.7 1.5-2.4 2.3-5.2 2.3-8.3 0-3.1-.7-5.8-2-8-1.3-2.3-3.2-4.2-5.7-5.8s-6.3-3.5-11.4-5.4c-4.9-1.9-8.9-3.9-12-6-3.1-2.1-5.4-4.7-6.9-7.7-1.5-3-2.3-6.6-2.3-10.8 0-4.3 1.1-8.2 3.4-11.7 2.3-3.5 5.5-6.3 9.6-8.3 4.1-2 9-3 14.7-3 5.4 0 10.3 1 14.6 3.1 4.3 2.1 7.7 5.1 10.2 9 2.5 3.9 3.8 8.4 3.9 13.5h-15.5c-.3-3.6-1.6-6.4-3.9-8.4-2.3-2-5.4-3-9.3-3-3.7 0-6.7.8-9 2.4-2.3 1.6-3.5 3.9-3.5 6.9 0 2.8 1.1 5.1 3.2 6.9s5.6 3.5 10.5 5.2c5.6 2 10.1 4.1 13.5 6.3 3.4 2.2 6 5 7.8 8.3 1.8 3.3 2.7 7.4 2.7 12.3 0 4.7-1.2 9-3.6 12.8-2.4 3.8-5.8 6.8-10.2 9-4.4 2.2-9.6 3.3-15.6 3.3-6.7 0-12.6-1.3-17.7-3.9-5.1-2.6-9-6.3-11.7-11.1-2.7-4.8-4-10.4-3.9-16.8h15.5c.2 4.1 1.3 7.5 3.3 10.2zm-46.7-45.9H44v64.6H27.9V41.8h-16v-13h48.8v13H24.7z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  JavaScript: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path d="M1.5 1.5h125v125H1.5z" fill="#F7DF1E" />
      <path
        d="M32.5 106.8c3.2 5.5 7.7 9.7 13.5 12.6 5.8 2.9 12.4 4.4 19.8 4.4 7.2 0 13.5-1.5 18.9-4.5 5.4-3 9.4-7.3 12-12.9 2.6-5.6 3.9-12.2 3.9-19.8V35H84.1v51.6c0 5.4-.9 9.8-2.7 13.2-1.8 3.4-4.5 5.9-8.1 7.5-3.6 1.6-8.1 2.4-13.5 2.4-4.9 0-9.2-.8-12.9-2.4-3.7-1.6-6.4-4-8.1-7.2-1.7-3.2-2.6-7.3-2.7-12.3H19.5c.2 8.4 1.7 15.6 4.5 21.6 2.8 6 6.9 10.7 12.3 14.1zm69.9-25.9c3.8 6.4 8.7 11.2 14.7 14.4 6 3.2 12.8 4.8 20.4 4.8 6.4 0 12.1-1.2 17.1-3.6 5-2.4 8.8-5.8 11.4-10.2 2.6-4.4 3.9-9.6 3.9-15.6 0-6.1-1.4-11.1-4.2-15-2.8-3.9-6.8-7.2-12-9.9-5.2-2.7-11.4-5.2-18.6-7.5-5.9-1.9-10.7-3.8-14.4-5.7-3.7-1.9-6.4-4.2-8.1-6.9-1.7-2.7-2.6-6-2.6-9.9 0-3.9 1-7.3 3.1-10.2 2.1-2.9 5.1-5.1 9-6.6 3.9-1.5 8.6-2.3 14.1-2.3 5.4 0 10.1.9 14.1 2.7 4 1.8 7.1 4.5 9.3 8.1 2.2 3.6 3.3 8 3.3 13.2h16.2c0-8-2-14.7-6-20.1-4-5.4-9.5-9.4-16.5-12-7-2.6-15.1-3.9-24.3-3.9-8.7 0-16.2 1.4-22.5 4.2-6.3 2.8-11.1 6.8-14.4 12-3.3 5.2-5 11.5-5 18.9 0 6.6 1.3 12.1 3.9 16.5 2.6 4.4 6.3 8 11.1 10.8 4.8 2.8 10.7 5.3 17.7 7.5 6.9 2.2 12.3 4.4 16.2 6.6 3.9 2.2 6.7 4.8 8.4 7.8 1.7 3 2.5 6.7 2.5 11.1 0 4.5-1.1 8.3-3.3 11.4s-5.4 5.5-9.6 7.2-9.2 2.5-15 2.5-10.8-.9-15-2.7c-4.2-1.8-7.5-4.6-9.9-8.4-2.4-3.8-3.6-8.7-3.6-14.7H86.2c.2 8.4 2 15.6 5.4 21.6 3.4 6 8.3 10.7 14.6 14.1z"
        fill="#000000"
      />
    </svg>
  ),

  React: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),

  Nextjs: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="64" fill="#000000" />
      <path
        d="M106.6 111.4L44.8 32H32v64h10.4V45.2l56.8 72.8c2.6-1.8 5.1-3.7 7.4-5.6zM85.6 32h10.4v40.4L85.6 59.2V32z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  Nodejs: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        d="M64 4.8L8.6 36.8v64L64 132.8l55.4-32v-64L64 4.8zm0 18.5l42 24.2v48.5L64 120.2 22 96V47.5l42-24.2z"
        fill="#539E43"
      />
      <path
        d="M64 35.8L35.2 52.4v33.2L64 102.2l28.8-16.6V52.4L64 35.8zm0 13.8l16.8 9.7v19.4L64 88.4 47.2 78.7V59.3L64 49.6z"
        fill="#83CD29"
      />
    </svg>
  ),

  Tailwind: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        d="M64 24C44 24 31.5 34 26.5 54c7.5-10 16.2-13.8 26.2-11.2 5.7 1.4 9.8 5.6 14.3 10.2C74.3 60.5 83.2 69.5 101.5 69.5 121.5 69.5 134 59.5 139 39.5c-7.5 10-16.2 13.8-26.2 11.2-5.7-1.4-9.8-5.6-14.3-10.2C91.2 33 82.3 24 64 24zM26.5 69.5C6.5 69.5-6 79.5-11 99.5c7.5-10 16.2-13.8 26.2-11.2 5.7 1.4 9.8 5.6 14.3 10.2C36.8 106 45.7 115 64 115c20 0 32.5-10 37.5-30-7.5 10-16.2 13.8-26.2 11.2-5.7-1.4-9.8-5.6-14.3-10.2C53.7 78.5 44.8 69.5 26.5 69.5z"
        fill="#06B6D4"
        transform="translate(0, -6) scale(0.9)"
      />
    </svg>
  ),

  FastAPI: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="64" fill="#009688" />
      <path
        d="M66.3 18.5L29.8 70.8h28.1L49.3 109.5l48.9-58.4H70.1l17.4-32.6H66.3z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  Express: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        d="M24 64c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40-40-17.9-40-40z"
        fill="#259DFF"
        opacity="0.1"
      />
      <text
        x="64"
        y="74"
        fontSize="34"
        fontWeight="800"
        fontFamily="sans-serif"
        textAnchor="middle"
        fill="#64748B"
        className="dark:fill-slate-200"
      >
        ex
      </text>
    </svg>
  ),

  MongoDB: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        d="M62.3 3.5C60.2 5.6 42.4 23.3 34.6 47c-8.9 26.9 2.5 53.7 19.3 67.5 3 2.5 6.9 5.3 7.8 5.7 1 .5 1.5.3 1.5-.7V5.1c0-.9-.3-1.6-1-1.6zm3.5.1v119.5c.7-.4 5-3.3 8-5.8 16.8-13.8 28.2-40.6 19.3-67.5-7.8-23.7-25.6-41.4-27.3-46.2z"
        fill="#47A248"
      />
      <path
        d="M64 128c-1.3 0-2.6-.5-3.5-1.5-1.7-1.8-1.5-4.6.3-6.3 1.3-1.2 24.3-22.9 24.3-56.2 0-21.7-11.4-40.2-18.7-49.8-1.5-1.9-1.1-4.7.9-6.2 1.9-1.5 4.7-1.1 6.2.9C81.8 19.4 94.4 39.7 94.4 64c0 38.6-26.6 62.4-27.7 63.4-.7.4-1.7.6-2.7.6z"
        fill="#499D4A"
        opacity="0.3"
      />
    </svg>
  ),

  PostgreSQL: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        d="M63.8 6.5C32.1 6.5 6.5 32.1 6.5 63.8S32.1 121 63.8 121s57.3-25.6 57.3-57.3S95.5 6.5 63.8 6.5zm27.8 71.9c-1.2 6.6-4.9 12.3-10.4 16.2-4.1 2.9-9 4.6-14.1 4.9-7.2.4-14.3-2.2-19.6-7.1-3.4-3.1-5.9-7.1-7.3-11.6-2.5-8.2-1.9-17.1 1.7-24.9 3.5-7.6 9.7-13.6 17.4-16.8 5.7-2.4 11.9-3.3 18.1-2.6 7.4.9 14.3 4.3 19.4 9.6 4.3 4.5 7.1 10.3 8.1 16.5.9 5.3.3 10.8-1.7 15.8h-11.6z"
        fill="#336791"
      />
      <circle cx="56" cy="46" r="3" fill="#FFFFFF" />
    </svg>
  ),

  Docker: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        d="M123.6 54.4c-2.4-1.8-7.9-2.2-12.3-.9-1.4.4-2.8 1.1-4 1.9-.8-4.8-4-8.8-8.6-10.7-5.5-2.2-12-1.2-16.7 2.6-3.8 3-6.1 7.4-6.4 12.2H63V47h11.2V35.8H63V24.6H51.8v11.2H40.6v11.2h11.2v12.5H23V47H11.8v12.5H6.2c-3.4 0-6.2 2.8-6.2 6.2 0 19.3 11.2 36.3 28.5 43.5 15.8 6.6 34.2 6.1 49.5-1.5 14.7-7.3 24.3-21.7 25.4-38 3.5-1.1 7.8-.8 11.1 1.1 4.5 2.6 6.9 7.4 6.9 12.5h6.2c.1-13-5.7-23.7-14-28.9z"
        fill="#2496ED"
      />
      <path d="M40.6 47h11.2v12.5H40.6zm11.2-11.2h11.2V47H51.8zm11.2 11.2h11.2v12.5H63zm11.2 0h11.2v12.5H74.2zm-45.7 0h11.2v12.5H28.5z" fill="#FFFFFF" />
    </svg>
  ),

  Git: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        d="M124.7 57.3L70.7 3.3c-4.4-4.4-11.5-4.4-15.9 0L42.9 15.2l18.4 18.4c4.1-1.4 8.9-.4 12.2 2.9 3.3 3.3 4.3 8.1 2.9 12.2l17.7 17.7c4.1-1.4 8.9-.4 12.2 2.9 4.4 4.4 4.4 11.5 0 15.9s-11.5 4.4-15.9 0c-3.4-3.4-4.4-8.4-2.8-12.6L68.8 56.2v35.3c1.2.6 2.3 1.5 3.2 2.4 4.4 4.4 4.4 11.5 0 15.9s-11.5 4.4-15.9 0c-4.4-4.4-4.4-11.5 0-15.9 1.1-1.1 2.4-2 3.8-2.6V55.7c-1.4-.6-2.7-1.5-3.8-2.6-3.4-3.4-4.4-8.4-2.8-12.6L34.9 22.1 3.3 53.7c-4.4 4.4-4.4 11.5 0 15.9l54 54c4.4 4.4 11.5 4.4 15.9 0l51.5-51.5c4.4-4.3 4.4-11.4 0-14.8z"
        fill="#F05032"
      />
    </svg>
  ),

  LangChain: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="60" fill="#1C3C3C" />
      <path
        d="M42 42c8-8 22-8 30 0l18 18c8 8 8 22 0 30s-22 8-30 0l-4-4"
        stroke="#2DD4BF"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="48" cy="74" r="10" fill="#F43F5E" />
      <circle cx="80" cy="54" r="8" fill="#FBBF24" />
    </svg>
  ),

  OpenCV: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <circle cx="64" cy="38" r="26" fill="#EA3223" />
      <circle cx="64" cy="38" r="12" fill="#FFFFFF" />
      <circle cx="36" cy="86" r="26" fill="#329932" />
      <circle cx="36" cy="86" r="12" fill="#FFFFFF" />
      <circle cx="92" cy="86" r="26" fill="#2E69FF" />
      <circle cx="92" cy="86" r="12" fill="#FFFFFF" />
    </svg>
  ),

  SocketIO: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="60" fill="#010101" />
      <circle cx="64" cy="64" r="44" stroke="#FFFFFF" strokeWidth="6" fill="none" />
      <path d="M60 28l-18 42h18l-6 30 28-44H62l14-28z" fill="#010101" stroke="#FFFFFF" strokeWidth="4" />
    </svg>
  ),

  CPP: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        d="M117.5 35L66.7 5.7c-1.7-1-3.8-1-5.5 0L10.5 35c-1.7 1-2.7 2.8-2.7 4.7v58.6c0 1.9 1 3.7 2.7 4.7l50.7 29.3c1.7 1 3.8 1 5.5 0l50.7-29.3c1.7-1 2.7-2.8 2.7-4.7V39.7c.1-1.9-.9-3.7-2.6-4.7z"
        fill="#00599C"
      />
      <text x="64" y="80" fontSize="42" fontWeight="900" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">
        C++
      </text>
    </svg>
  ),

  Redis: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        d="M12.5 45.4l51.5-23.7 51.5 23.7v37.2L64 106.3 12.5 82.6V45.4z"
        fill="#D82C20"
      />
      <path d="M64 21.7L12.5 45.4 64 69l51.5-23.6L64 21.7z" fill="#A41E11" />
      <circle cx="64" cy="50" r="6" fill="#FFFFFF" />
    </svg>
  ),

  Streamlit: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        d="M64 10l50 35v50l-50 25L14 95V45L64 10z"
        fill="#FF4B4B"
        opacity="0.1"
      />
      <path
        d="M64 18l42 29.5v42.5L64 111 22 90V47.5L64 18z"
        fill="#FF4B4B"
      />
      <circle cx="64" cy="65" r="14" fill="#FFFFFF" />
    </svg>
  ),

  HTML5: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path d="M19.4 11.2L28.8 117l35.2 9.8 35.2-9.8 9.4-105.8H19.4z" fill="#E34F26" />
      <path d="M64 19.4v97.9l27.6-7.7 7.7-86.4L64 19.4z" fill="#EF652A" />
      <path
        d="M64 47.9h-17l1.2 13.5H64V47.9zm0-18.4H33.4l3.5 39.5H64V29.5zm0 46.8l-.2.1-14.7-4-.9-10.6H34.4l1.9 21.3 27.7 7.7v-14.5zm0-46.8v11.1h15.9l-1.5 16.5H64v11.1h25.4l-3.3 37.1-22.1 6.1V120l32.8-9.1 4.5-50.6.4-4.8 2.2-26H64z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  Redux: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="60" fill="#764ABC" />
      <ellipse rx="36" ry="14" cx="64" cy="64" stroke="#FFFFFF" strokeWidth="6" fill="none" transform="rotate(30 64 64)" />
      <ellipse rx="36" ry="14" cx="64" cy="64" stroke="#FFFFFF" strokeWidth="6" fill="none" transform="rotate(-30 64 64)" />
    </svg>
  ),

  Firebase: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128">
      <path d="M22.5 98.4L3.8 62.9c-1.3-2.5-.2-5.6 2.3-6.8 1-.5 2.1-.5 3.1-.2l25.8 15.3-12.5 27.2z" fill="#FFA000" />
      <path d="M63.5 42.4L48.2 13.5c-1.3-2.5-4.4-3.5-6.9-2.2-.9.5-1.7 1.3-2.1 2.2L22.5 98.4l41-56z" fill="#F57C00" />
      <path d="M72.2 108.6l33.3-61.9c1.3-2.5.3-5.6-2.2-6.9-1-.5-2.2-.5-3.2-.1L16.4 86.8l47.4 26.6c2.6 1.4 5.7 1 8.4-4.8z" fill="#FFCA28" />
    </svg>
  ),

  DefaultCode: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
};

/**
 * Returns the matching brand logo SVG component by name
 */
export function getTechLogo(techName) {
  if (!techName) return TechLogos.DefaultCode;
  const name = techName.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (name.includes('python')) return TechLogos.Python;
  if (name.includes('typescript') || name === 'ts') return TechLogos.TypeScript;
  if (name.includes('javascript') || name === 'js' || name.includes('esnext')) return TechLogos.JavaScript;
  if (name.includes('react')) return TechLogos.React;
  if (name.includes('next')) return TechLogos.Nextjs;
  if (name.includes('node')) return TechLogos.Nodejs;
  if (name.includes('express')) return TechLogos.Express;
  if (name.includes('fastapi')) return TechLogos.FastAPI;
  if (name.includes('tailwind')) return TechLogos.Tailwind;
  if (name.includes('mongo')) return TechLogos.MongoDB;
  if (name.includes('postgres') || name.includes('sql')) return TechLogos.PostgreSQL;
  if (name.includes('docker')) return TechLogos.Docker;
  if (name.includes('git')) return TechLogos.Git;
  if (name.includes('langchain') || name.includes('langgraph') || name.includes('agentic')) return TechLogos.LangChain;
  if (name.includes('opencv') || name.includes('yolo') || name.includes('vision')) return TechLogos.OpenCV;
  if (name.includes('socket')) return TechLogos.SocketIO;
  if (name.includes('c++') || name === 'cpp') return TechLogos.CPP;
  if (name.includes('redis') || name.includes('kafka')) return TechLogos.Redis;
  if (name.includes('streamlit')) return TechLogos.Streamlit;
  if (name.includes('html') || name.includes('css')) return TechLogos.HTML5;
  if (name.includes('redux')) return TechLogos.Redux;
  if (name.includes('firebase')) return TechLogos.Firebase;

  return TechLogos.DefaultCode;
}
