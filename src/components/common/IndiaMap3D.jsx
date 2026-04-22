import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

const stores = [
  { name: "Delhi", position: [0.4, 1.2, 0.1] },
  { name: "Mumbai", position: [-0.8, -0.2, 0.1] },
  { name: "Indore", position: [-0.2, 0.3, 0.1] },
  { name: "Bangalore", position: [0.3, -1, 0.1] },
  { name: "Ahmedabad", position: [-0.9, 0.5, 0.1] },
  { name: "Kolkata", position: [1.2, 0.3, 0.1] },
  { name: "Chennai", position: [0.5, -1.3, 0.1] },
];

function MapPlane() {
  const texture = new THREE.TextureLoader().load("/in.svg");

  return (
    <mesh>
      <planeGeometry args={[4, 5]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

function StorePin({ position, name }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.07, 32, 32]} />
      <meshStandardMaterial color="red" />

      <Html>
        <div
          style={{
            background: "black",
            color: "white",
            padding: "3px 6px",
            borderRadius: "5px",
            fontSize: "12px",
            transform: "translate(-50%, -120%)",
          }}
        >
          {name}
        </div>
      </Html>
    </mesh>
  );
}

export default function IndiaMap3D() {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />

        <MapPlane />

        {stores.map((store, i) => (
          <StorePin key={i} position={store.position} name={store.name} />
        ))}

        <OrbitControls />
      </Canvas>
    </div>
  );
}
