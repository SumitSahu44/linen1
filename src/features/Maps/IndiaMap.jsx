import React from "react";
import Map from "../../components/common/Map"; // 👈 your map component

export default function PresenceSection() {
    return (
        <div style={containerStyle} >
            
            {/* LEFT MAP */}
            <div style={mapWrapper}>
                <div style={mapContainer}>
                    <Map />
                </div>
            </div>

            {/* RIGHT CONTENT */}
            {/* RIGHT CONTENT */}
<div className="mt-20">
    <h2 style={headingStyle}>Our Presence</h2>

    <div style={locationsGrid}>
        {locations.map((loc) => (
            <div key={loc.id} style={cardStyle}>
                <h3 style={cityStyle}>{loc.city}</h3>
                <p style={stateStyle}>{loc.name}</p>
            </div>
        ))}
    </div>
</div>
        </div>
    );
}

/* ---------------- DATA (Your Original One) ---------------- */
const locationsGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // 👈 2 columns
    gap: "16px",
};
const locations = [
  { id: 1, name: "Parekh Fabrics", city: "Ahmedabad" },
  { id: 2, name: "Parekh Silk", city: "Surat" },
  { id: 3, name: "Parekh Rayon", city: "Raipur" },
  { id: 4, name: "Parekh Linen", city: "Kolkata" },
  { id: 5, name: "Parekh e-Trade Market", city: "Hyderabad" },
  { id: 6, name: "Parekh Chamber of Textile", city: "Bangalore" },
  { id: 7, name: "Parekh Southern Polyfabrics", city: "Chennai" },
];

/* ---------------- STYLES ---------------- */

const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
    padding: "60px",
    background: "#f3f4f6",
    fontFamily: "sans-serif",
};

const mapWrapper = {
    width: "100%",
    maxWidth: "650px",
    margin: "auto",
};

const mapContainer = {
    width: "100%",
    height: "600px", // 🔥 important
};

const headingStyle = {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#001a41",
};

const cardStyle = {
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "16px",
    background: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
};

const cityStyle = {
    margin: 0,
    fontSize: "18px",
    color: "#1e293b",
};

const stateStyle = {
    margin: "4px 0 0 0",
    color: "#64748b",
};