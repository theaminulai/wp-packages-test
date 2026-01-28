import { useState } from "react";
export default function Border() {
  const [borderWidth, setBorderWidth] = useState(1);
  const [borderStyle, setBorderStyle] = useState("solid");
  const [borderRadius, setBorderRadius] = useState(6);
  const [borderColor, setBorderColor] = useState("#2563eb");

  return (
    <div className="border-control">
      <div className="controls">
        <label>``
          Border Width
          <input
            type="range"
            min="0"
            max="10"
            value={borderWidth}
            onChange={(e) => setBorderWidth(e.target.value)}
          />
        </label>

        <label>
          Border Style
          <select
            value={borderStyle}
            onChange={(e) => setBorderStyle(e.target.value)}
          >
            <option value="solid">Solid</option>
            <option value="dashed">Dashed</option>
            <option value="dotted">Dotted</option>
            <option value="double">Double</option>
          </select>
        </label>

        <label>
          Border Radius
          <input
            type="range"
            min="0"
            max="30"
            value={borderRadius}
            onChange={(e) => setBorderRadius(e.target.value)}
          />
        </label>

        <label className="color-picker">
          Border Color
          <input
            type="color"
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
          />
        </label>
      </div>

      <div
        className="preview"
        style={{
          borderWidth: `${borderWidth}px`,
          borderStyle,
          borderRadius: `${borderRadius}px`,
          borderColor
        }}
      >
        Preview Box
      </div>
    </div>
  );
}
