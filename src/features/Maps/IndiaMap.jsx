import indiaMap from "../../assets/images/in.svg";

export default function PresenceSection() {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
                alignItems: "center",
                padding: "60px",
                background: "#f3f4f6",
                fontFamily: "sans-serif"
            }}
        >
            {/* LEFT MAP */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "500px", // Map size thoda control kiya for better alignment
                    margin: "auto",
                }}
            >
                <img src={indiaMap} alt="India Map" style={{ width: "100%", display: "block" }} />

                {/* --- MARKERS START --- */}

                {/* DELHI - North Central */}
                <div style={markerStyle("39%", "31%")}>
                    <span style={labelStyle}>Delhi</span>
                </div>

                {/* AHMEDABAD - West (Gujarat) */}
                <div style={markerStyle("19%", "48%")}>
                    <span style={labelStyle}>Ahmedabad</span>
                </div>

                {/* MUMBAI - South West Coast (Maharashtra) */}
                <div style={markerStyle("23%", "64%")}>
                    <span style={labelStyle}>Mumbai</span>
                </div>

                {/* KOLKATA - East (West Bengal) */}
                <div style={markerStyle("54%", "52%")}>
                    <span style={labelStyle}>Kolkata</span>
                </div>

                {/* COIMBATORE - Deep South (Tamil Nadu) */}
                <div style={markerStyle("36%", "87%")}>
                    <span style={labelStyle}>Coimbatore</span>
                </div>

                {/* --- MARKERS END --- */}
            </div>

            {/* RIGHT CONTENT */}
            <div>
                <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "30px", color: "#001a41" }}>
                    Our Presence
                </h2>

                {locations.map((loc, i) => (
                    <div
                        key={i}
                        style={{
                            border: "1px solid #e2e8f0",
                            borderRadius: "12px",
                            padding: "20px",
                            marginBottom: "16px",
                            background: "white",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
                        }}
                    >
                        <h3 style={{ margin: 0, fontSize: "18px", color: "#1e293b" }}>{loc.city}</h3>
                        <p style={{ margin: "4px 0 0 0", color: "#64748b" }}>{loc.state}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const locations = [
    { city: "Kolkata (HQ)", state: "West Bengal" },
    { city: "Mumbai", state: "Maharashtra" },
    { city: "Ahmedabad", state: "Gujarat" },
    { city: "Coimbatore", state: "Tamil Nadu" },
    { city: "Delhi", state: "Delhi" },
];

function markerStyle(left, top) {
    return {
        position: "absolute",
        left: left,
        top: top,
        transform: "translate(-50%, -50%)",
        width: "14px",
        height: "14px",
        background: "#f59e0b", // Orange color from your image
        borderRadius: "50%",
        border: "2.5px solid white",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        zIndex: 5
    };
}

const labelStyle = {
    position: "absolute",
    left: "18px", // Dot ke right side mein text
    fontSize: "14px",
    fontWeight: "600",
    color: "#334155",
    whiteSpace: "nowrap"
};