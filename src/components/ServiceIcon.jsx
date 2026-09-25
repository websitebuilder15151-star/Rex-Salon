const icons = {
  scissors: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8.5 7.5 L20 18 M8.5 16.5 L20 6" strokeLinecap="round" />
    </svg>
  ),
  beard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path
        d="M12 4 C8 4 5 8 5 12 C5 17 8 21 12 21 C16 21 19 17 19 12 C19 8 16 4 12 4 Z"
        strokeLinecap="round"
      />
      <path d="M8 11 Q12 14 16 11" strokeLinecap="round" />
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path
        d="M12 3 C12 3 6 10 6 15 A6 6 0 0 0 18 15 C18 10 12 3 12 3 Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  combo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 8 L12 4 L20 8 L12 12 Z" strokeLinejoin="round" />
      <path d="M4 12 L12 16 L20 12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16 L12 20 L20 16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pulse: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path
        d="M3 12 H7 L9.5 6 L12.5 18 L15 12 H21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  kids: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="8" r="3.5" />
      <path
        d="M5 20 C5 15.5 8 13.5 12 13.5 C16 13.5 19 15.5 19 20"
        strokeLinecap="round"
      />
    </svg>
  ),
  colour: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="11" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="15.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="15.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="8" cy="11" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  crown: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path
        d="M4 17 L5 8 L9 12 L12 6 L15 12 L19 8 L20 17 Z"
        strokeLinejoin="round"
      />
      <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
    </svg>
  ),
  nails: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path
        d="M8 21 V10 C8 7 10 5 12 5 C14 5 16 7 16 10 V21"
        strokeLinecap="round"
      />
      <path d="M8 14 H16" strokeLinecap="round" />
    </svg>
  ),
  curly: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path
        d="M6 8 C6 5 8 4 10 5 C12 6 11 9 9 10 C7 11 6 13 7 15 C8 17 11 17 12 15"
        strokeLinecap="round"
      />
      <path
        d="M12 9 C13 7 15 6 17 7 C19 8 18 11 16 12 C14 13 13 15 14 17 C15 19 18 18 19 16"
        strokeLinecap="round"
      />
    </svg>
  ),
}

export function ServiceIcon({ name }) {
  return (
    <span className="service-icon" aria-hidden="true">
      {icons[name] || icons.scissors}
    </span>
  )
}
