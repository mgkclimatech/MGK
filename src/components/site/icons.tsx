import type { SVGProps } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

type P = SVGProps<SVGSVGElement>;

export const IconSplit = (p: P) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="4.5" width="19" height="7" rx="2" />
    <path d="M6 15c0 1.6 1.2 2 1.2 3.5M11 15c0 2 1.2 2.5 1.2 4.5M16 15c0 1.6 1.2 2 1.2 3.5" />
  </svg>
);

export const IconWrench = (p: P) => (
  <svg {...base} {...p}>
    <path d="M15.5 3.5a5 5 0 0 0-6 6.4L3.6 15.8a2 2 0 0 0 2.8 2.8l5.9-5.9a5 5 0 0 0 6.2-6.3l-2.7 2.7-2.6-.6-.6-2.6z" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l7.5 3v5.5c0 4.4-3.1 8.3-7.5 9.5-4.4-1.2-7.5-5.1-7.5-9.5V6z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </svg>
);

export const IconDroplet = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3.2s6 6 6 9.8a6 6 0 1 1-12 0c0-3.8 6-9.8 6-9.8z" />
    <path d="M9.2 14.2a2.9 2.9 0 0 0 2.6 2.7" />
  </svg>
);

export const IconGauge = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 18a8.5 8.5 0 1 1 16 0" />
    <path d="m12 14 3.6-3.6" />
    <circle cx="12" cy="18" r="1.4" />
  </svg>
);

export const IconBlueprint = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="4.5" width="18" height="15" rx="2" />
    <path d="M3 9.5h18M9 9.5v10M9 14h6" />
  </svg>
);

export const IconSearch = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </svg>
);

export const IconClock = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6.5 3.5h3l1.3 3.6-2 1.4a12 12 0 0 0 5.7 5.7l1.4-2 3.6 1.3v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z" />
  </svg>
);

export const IconWhatsApp = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20.2 11.7A8.2 8.2 0 0 1 8.1 19l-4.3 1.2L5 16a8.2 8.2 0 1 1 15.2-4.3z" />
    <path d="M9 9.4c.3 2.7 2.6 5 5.3 5.3.7.1 1.3-.5 1.3-1.2v-.6l-1.9-.8-.9 1a6.4 6.4 0 0 1-2.5-2.5l1-.9-.8-1.9h-.6c-.7 0-1.3.6-1.2 1.3z" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h13M13 6.5 18.5 12 13 17.5" />
  </svg>
);

export const IconBuilding = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20.5V6.5l7-3v17M11 20.5h9V10l-9-3" />
    <path d="M14.5 12.5h2M14.5 16h2M7 9.5h1M7 13h1" />
  </svg>
);

export const IconHome = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 10.8 12 4l8 6.8V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" />
  </svg>
);

export const IconServer = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="4" width="17" height="6.5" rx="1.6" />
    <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.6" />
    <path d="M7 7.2h.01M7 16.7h.01" />
  </svg>
);

export const IconStore = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 9.5 5.4 4.5h13.2L20 9.5a2.6 2.6 0 0 1-4 2.2 2.6 2.6 0 0 1-4 0 2.6 2.6 0 0 1-4 0 2.6 2.6 0 0 1-4-2.2z" />
    <path d="M5.5 12v7.5h13V12" />
  </svg>
);
