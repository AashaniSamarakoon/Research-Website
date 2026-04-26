import { motion, useReducedMotion } from 'framer-motion'

function FruitFieldSvg({ className }) {
  return (
    <svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* layers use explicit opacities to avoid Tailwind opacity class pitfalls */}
      <g className="text-secondary" fill="currentColor">
        {/* distant hills */}
        <path
          d="M0 360C120 320 220 320 340 360C480 410 560 410 700 360C840 305 940 305 1200 360V700H0V360Z"
          opacity="0.10"
        />
        {/* mid field */}
        <path
          d="M0 410C160 380 280 390 420 430C600 485 720 485 910 430C1050 390 1110 390 1200 410V700H0V410Z"
          opacity="0.14"
        />
        {/* near field */}
        <path
          d="M0 470C210 460 360 480 520 520C740 575 910 585 1200 535V700H0V470Z"
          opacity="0.18"
        />
      </g>

      {/* crop rows */}
      <g className="text-white" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.18">
        <path d="M-60 540C240 500 400 520 620 585C870 650 1000 670 1260 630" opacity="0.65" />
        <path d="M-60 570C240 540 410 560 640 620C900 690 1030 705 1260 670" opacity="0.5" />
        <path d="M-60 510C240 470 390 490 600 555C840 620 970 640 1260 600" opacity="0.4" />
      </g>

      {/* orchard dots (fruit trees) */}
      <g className="text-white" fill="currentColor" opacity="0.22">
        {Array.from({ length: 34 }).map((_, idx) => {
          const x = 80 + (idx % 17) * 65 + (idx % 2 ? 10 : 0)
          const y = 430 + Math.floor(idx / 17) * 36
          return <circle key={idx} cx={x} cy={y} r="3" />
        })}
      </g>

      {/* fruit highlights */}
      <g className="text-secondary" fill="currentColor" opacity="0.55">
        <circle cx="190" cy="560" r="4" />
        <circle cx="220" cy="545" r="3" opacity="0.75" />
        <circle cx="980" cy="565" r="4" opacity="0.9" />
        <circle cx="1010" cy="548" r="3" opacity="0.7" />
      </g>
    </svg>
  )
}

function CloudSvg({ className }) {
  return (
    <svg viewBox="0 0 220 80" className={className} aria-hidden="true" focusable="false">
      <path
        d="M62 58h92c18 0 32-12 32-26c0-12-9-22-22-25C160 3 152 0 142 0c-16 0-30 9-36 21c-4-2-9-4-15-4c-16 0-28 11-30 25C47 43 36 52 36 63c0 11 10 20 26 20Z"
        fill="currentColor"
      />
    </svg>
  )
}

// function TruckSvg({ className }) {
//   return (
//     <svg viewBox="0 0 340 120" className={className} aria-hidden="true" focusable="false">
//       <defs>
//         <filter id="truckShadow" x="-30%" y="-30%" width="160%" height="160%">
//           <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.35" />
//           <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#10B981" floodOpacity="0.22" />
//         </filter>
//       </defs>

//       <g filter="url(#truckShadow)">
//       {/* trailer panel */}
//       <rect x="20" y="38" width="190" height="52" rx="10" fill="currentColor" className="text-white" opacity="0.10" />
//       <rect x="20" y="38" width="190" height="52" rx="10" fill="currentColor" className="text-secondary" opacity="0.32" />

//       {/* trailer border to improve readability */}
//       <rect
//         x="20"
//         y="38"
//         width="190"
//         height="52"
//         rx="10"
//         fill="none"
//         stroke="currentColor"
//         className="text-secondary"
//         strokeWidth="3"
//         opacity="0.9"
//       />

//       {/* FreshRoute label */}
//       <g fill="currentColor" className="text-slate-950" opacity="0.95">
//         <text
//           x="34"
//           y="73"
//           fontSize="20"
//           fontWeight="700"
//           fontFamily="DM Sans, ui-sans-serif, system-ui"
//           letterSpacing="0.5"
//         >
//           FreshRoute
//         </text>
//       </g>

//       {/* light overlay text to pop on dark backgrounds */}
//       <g fill="currentColor" className="text-white" opacity="0.92">
//         <text
//           x="34"
//           y="73"
//           fontSize="20"
//           fontWeight="800"
//           fontFamily="DM Sans, ui-sans-serif, system-ui"
//           letterSpacing="0.5"
//         >
//           FreshRoute
//         </text>
//       </g>

//       {/* cargo lines */}
//       <g className="text-white" stroke="currentColor" strokeWidth="2" opacity="0.16">
//         <line x1="36" y1="80" x2="200" y2="80" />
//         <line x1="36" y1="52" x2="200" y2="52" opacity="0.6" />
//       </g>

//       {/* cab */}
//       <path
//         d="M230 90h58c10 0 18-8 18-18V56c0-7-4-12-10-14l-16-5c-3-1-6-1-9-1h-41V90z"
//         fill="currentColor"
//         className="text-white"
//         opacity="0.14"
//       />
//       <path
//         d="M252 42h30c5 0 9 4 9 9v20h-39V42z"
//         fill="currentColor"
//         className="text-white"
//         opacity="0.08"
//       />

//       {/* outline */}
//       <path
//         d="M20 90h250c10 0 18-8 18-18V56c0-7-4-12-10-14l-16-5c-3-1-6-1-9-1h-43V36c0-6-6-12-12-12H32c-6 0-12 6-12 12v54z"
//         stroke="currentColor"
//         strokeWidth="4"
//         className="text-secondary"
//         fill="none"
//         opacity="0.9"
//       />

//       {/* wheels */}
//       <g className="text-secondary" fill="currentColor" opacity="0.9">
//         <circle cx="92" cy="94" r="16" opacity="0.25" />
//         <circle cx="92" cy="94" r="9" opacity="0.8" />

//         <circle cx="202" cy="94" r="16" opacity="0.25" />
//         <circle cx="202" cy="94" r="9" opacity="0.8" />

//         <circle cx="270" cy="94" r="16" opacity="0.25" />
//         <circle cx="270" cy="94" r="9" opacity="0.8" />
//       </g>
//       </g>
//     </svg>
//   )
// }

export default function HeroBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Scene background stays behind hero content */}

      {/* Sky glow */}
      <div className="absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-secondary/15 blur-3xl" />

      {/* Fruit field anchored to bottom (so it won't cover headings) */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[62%]"
        initial={reduceMotion ? { x: 0 } : { x: -18 }}
        animate={reduceMotion ? { x: 0 } : { x: 18 }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 10,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
              }
        }
        style={{ willChange: 'transform' }}
      >
        <FruitFieldSvg className="h-full w-full" />
      </motion.div>

      {/* Clouds */}
      <motion.div
        className="absolute left-[-20%] top-20"
        initial={reduceMotion ? { x: 0 } : { x: 0 }}
        animate={reduceMotion ? { x: 0 } : { x: '160%' }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 38,
                ease: 'linear',
                repeat: Infinity,
              }
        }
        style={{ willChange: 'transform' }}
      >
        <CloudSvg className="h-16 w-auto text-white opacity-10" />
      </motion.div>
      <motion.div
        className="absolute left-[-25%] top-36"
        initial={reduceMotion ? { x: 0 } : { x: 0 }}
        animate={reduceMotion ? { x: 0 } : { x: '170%' }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 52,
                ease: 'linear',
                repeat: Infinity,
              }
        }
        style={{ willChange: 'transform' }}
      >
        <CloudSvg className="h-12 w-auto text-white opacity-[0.08]" />
      </motion.div>

      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-slate-950/25" />
      <div className="absolute bottom-24 left-0 right-0 h-px bg-white/10" />
      <div className="absolute bottom-14 left-0 right-0 h-px bg-white/8" />

      {/* Moving truck (clear + branded) */}
      <motion.div
        className="absolute bottom-5 left-0"
        initial={reduceMotion ? { x: 0 } : { x: '-35%' }}
        animate={reduceMotion ? { x: 0 } : { x: '125%' }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 16,
                ease: 'linear',
                repeat: Infinity,
              }
        }
        style={{ willChange: 'transform' }}
      >
        {/* <TruckSvg className="h-32 w-auto" /> */}

      </motion.div>

      {/* Foreground fade for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/25 to-primary/75" />
    </div>
  )
}
