export function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="menu-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <line
        className="menu-icon-line"
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        style={{
          transformOrigin: "center",
          transform: open ? "translateY(5px) rotate(45deg)" : "none",
        }}
      />
      <line
        className="menu-icon-line"
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        style={{
          transformOrigin: "center",
          transform: open ? "scaleX(0.2)" : "none",
          opacity: open ? 0 : 1,
        }}
      />
      <line
        className="menu-icon-line"
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        style={{
          transformOrigin: "center",
          transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
        }}
      />
    </svg>
  );
}
