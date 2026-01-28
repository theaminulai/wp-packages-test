import { useState } from "react";

export default function Color({
  label = "Color",
  value = "#2563eb",
  onChange
}) {
  const [color, setColor] = useState(value);

  const handleChange = (e) => {
    setColor(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className="color-control">
      <span className="color-label">{label}</span>

      <div className="color-input">
        <input
          type="color"
          value={color}
          onChange={handleChange}
        />
        <input
          type="text"
          value={color}
          onChange={handleChange}
        />
      </div>

      <div
        className="color-preview"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
