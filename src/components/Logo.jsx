export function Logo({ className = '' }) {
  return (
    <a href="#home" className={`logo ${className}`} aria-label="Rex Salon home">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" width="40" height="40">
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <text
            x="32"
            y="28"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="Georgia, serif"
            fontSize="22"
            fontWeight="500"
          >
            R
          </text>
          <path
            d="M22 40 L32 46 L42 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="32"
            y1="44"
            x2="32"
            y2="50"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="logo-text">Rex Salon</span>
    </a>
  )
}
