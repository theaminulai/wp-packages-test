export default function Button({
  children,
  variant = "primary",   // primary | secondary | outline | danger
  size = "md",           // sm | md | lg
  disabled = false,
  onClick,
  type = "button"
}) {
  return (
    <button
      type={type}
      className={`ui-button ${variant} ${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
