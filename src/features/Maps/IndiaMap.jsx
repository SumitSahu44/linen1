import React, { useState, useEffect } from "react";

export default function PresenceSection() {

    // ✅ Mobile detection
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={getContainerStyle(isMobile)}>

            {/* LEFT VIDEO */}
            <div style={mapWrapper}>
                <div style={mapContainer}>
                    <video
                        src="/india-map.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={videoStyle}
                    />
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <div style={{ marginTop: isMobile ? "30px" : "80px" }}>
                <h2 style={headingStyle}>Our Presence</h2>

                <div style={getLocationsGrid(isMobile)}>
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

/* ---------------- DATA ---------------- */

const locations = [
  { id: 1, name: "Parekh Fabrics", city: "Ahmedabad" },
  { id: 2, name: "Parekh Silk", city: "Surat" },
  { id: 3, name: "Parekh Rayon", city: "Raipur" },
  { id: 4, name: "Parekh Linen", city: "Kolkata" },
  { id: 5, name: "Parekh e-Trade Market", city: "Hyderabad" },
  { id: 6, name: "Parekh Chamber of Textile", city: "Bangalore" },
  { id: 7, name: "Parekh Southern Polyfabrics", city: "Chennai" },
];

/* ---------------- DYNAMIC STYLES ---------------- */

const getContainerStyle = (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: "40px",
    alignItems: "center",

    padding: isMobile ? "90px 20px 40px" : "100px 60px 60px", // 🔥 top spacing fix

    background: "#f3f4f6",
    fontFamily: "sans-serif",
});

const getLocationsGrid = (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: "16px",
});

/* ---------------- STATIC STYLES ---------------- */

const mapWrapper = {
    width: "100%",
    maxWidth: "650px",
    margin: "auto",
};

const mapContainer = {
    width: "100%",
    height: "100%",
    minHeight: "400px",
    maxHeight: "700px",
};
const videoStyle = {
    width: "100%",
    height: "auto",   // 🔥 IMPORTANT (fixes cut)
    maxHeight: "650px",
    objectFit: "contain",
    borderRadius: "12px",
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