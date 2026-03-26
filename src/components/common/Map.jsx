import { useState, useEffect } from "react";

const locations = [
  { id: 1, name: "Parekh Fabrics", city: "Ahmedabad", short: "Fabrics", x: 300, y: 475 },
  { id: 2, name: "Parekh Silk", city: "Surat", short: "Silk", x: 330, y: 550 },
  { id: 3, name: "Parekh Rayon", city: "Raipur", short: "Rayon", x: 488, y: 505 },
  { id: 4, name: "Parekh Linen", city: "Kolkata", short: "Linen", x: 625, y: 515 },
  { id: 5, name: "Parekh e-Trade Market", city: "Hyderabad", short: "e-Trade", x: 450, y: 635 },
  { id: 6, name: "Parekh Chamber of Textile", city: "Bangalore", short: "Chamber", x: 405, y: 755 },
  { id: 7, name: "Parekh Southern Polyfabrics", city: "Chennai", short: "Southern", x: 475, y: 755 },
];

const PIN_COLOR = "#8b1a1a";

function Pin({ loc, index, active, onClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 120 + 100);
    return () => clearTimeout(t);
  }, [index]);

  let labelX = loc.x;
  let labelY = loc.y - 35;
  let textAnchor = "middle";

  if (loc.id === 6) {
    labelX = loc.x - 40;
    labelY = loc.y - 5;
    textAnchor = "end";
  } else if (loc.id === 7) {
    labelX = loc.x + 40;
    labelY = loc.y - 5;
    textAnchor = "start";
  }

  return (
    <g
      onClick={() => onClick(loc.id)}
      style={{ opacity: visible ? 1 : 0, cursor: "pointer" }}
    >
      {/* 🔴 Blink dot */}
   <circle cx={loc.x} cy={loc.y} r="6" fill="#d32f2f">

        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
      </circle>

      {/* Glow */}
      <circle cx={loc.x} cy={loc.y} r="10" fill="none" stroke="#d32f2f">
        <animate attributeName="r" values="10;22" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* ✅ TEXT (NAME + CITY) */}
      <text
        x={labelX}
        y={labelY}
        textAnchor={textAnchor}
        fontSize="18"
        fontWeight="700"
        fill="#1a237e"
      >
        <tspan x={labelX}>{loc.name}</tspan>
        <tspan x={labelX} dy="16" fontSize="14" fill="#444">
          {loc.city}
        </tspan>
      </text>
    </g>
  );
}

export default function MapPointerPolished() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      


      {/* MAP */}
    <svg
  viewBox="0 0 1000 1000"
  style={{
    width: "100%",
    display: "block",
    margin: "0 auto"   // ✅ CENTER FIX
  }}
>


        {/* ✅ PERFECT BACKGROUND */}
  <svg
  viewBox="0 0 1000 1000"
  style={{
    width: "100%",
    display: "block",
    margin: "0 auto"
  }}
>


  {/* 🔲 OUTER BORDER BOX */}
  <rect
    x="20"
    y="20"
    width="960"
    height="960"
    fill="none"
    stroke="#000"
    strokeWidth="2"
  />
  {/* 🏷️ HEADING */}
  <text
    x="500"
    y="70"
    textAnchor="middle"
    fontSize="28"
    fontWeight="700"
    fill="#070c1"
    // color="#0f172b"
    letterSpacing="1"
  >
    HC PAREKH & ASSOCIATES
  </text>

  {/* 🌐 SUBTEXT (optional - like website) */}
  <text
    x="500"
    y="100"
    textAnchor="middle"
    fontSize="14"
    fill="#0f172b"
  >
    www.hcparekh.com
  </text>


  {/* 🗺️ IMAGE (center me) */}
  <image
    href="https://img.freepik.com/premium-vector/vector-map-black-outline-india-vector-illustration_686498-514.jpg?w=1060"
    x="40"
    y="40"
    width="920"
    height="920"
    preserveAspectRatio="xMidYMid meet"  // ✅ correct centering
    opacity="0.4"
  />

  {/* Pins */}
  {locations.map((loc, i) => (
    <Pin
      key={loc.id}
      loc={loc}
      index={i}
      active={active === loc.id}
      onClick={setActive}
    />
  ))}

</svg>

        {/* Pins */}
        {locations.map((loc, i) => (
          <Pin
            key={loc.id}
            loc={loc}
            index={i}
            active={active === loc.id}
            onClick={setActive}
          />
        ))}
      </svg>
    </div>
  );
}