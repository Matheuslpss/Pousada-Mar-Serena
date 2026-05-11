type IconProps = {
  className?: string;
};

export function WaveLogo({ className }: IconProps) {
  return (
    <svg className={className} width="46" height="46" viewBox="0 0 46 46" aria-hidden="true">
      <circle cx="23" cy="23" r="22" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M9 27c5.8-6.4 12.3 5.3 18.4-1.2 3.3-3.5 5.8-6 10.2-4.2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
      <path
        d="M13 32c4.5-3.1 9.1 2.1 14.1-.7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3v4M17 3v4M4.5 9.2h15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <rect x="4" y="5.5" width="16" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.2 13h2.4M13.4 13h2.4M8.2 16.2h2.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg className={className} width="31" height="31" viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M26.8 5.2C15.4 5.9 7.6 12.4 6.6 24.8 18.9 23.7 25.2 16.3 26.8 5.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 24 22.3 9.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export function BeachIcon({ className }: IconProps) {
  return (
    <svg className={className} width="42" height="42" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M9 32c4-3.2 7.7 3.2 12 0s7.8 3.2 12 0 6.8 1.6 8 2.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M12 25a12 12 0 0 1 24 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M24 9V4M15.5 12.6 12 9M32.5 12.6 36 9M8 25h4M36 25h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export function BreakfastIcon({ className }: IconProps) {
  return (
    <svg className={className} width="42" height="42" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M13 19h20v6a10 10 0 0 1-10 10 10 10 0 0 1-10-10v-6Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M33 21h3.4a4.1 4.1 0 0 1 0 8.2H33M12 38h23" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M22 15c-2-2.5-2-5 0-7M28 15c-1.8-2.5-1.8-5 0-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export function WellnessIcon({ className }: IconProps) {
  return (
    <svg className={className} width="42" height="42" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 36c0-12 0-19 0-25M24 36C12.5 34.7 8.2 27.2 9 17c8.7 1.6 13.6 7.6 15 19ZM24 36c11.5-1.3 15.8-8.8 15-19-8.7 1.6-13.6 7.6-15 19Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg className={className} width="42" height="42" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 42s13-11.2 13-24A13 13 0 0 0 11 18c0 12.8 13 24 13 24Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="24" cy="18" r="4.7" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
