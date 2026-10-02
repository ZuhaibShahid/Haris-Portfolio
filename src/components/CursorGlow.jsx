import { useState, useEffect } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 transition-all duration-500 ease-out"
      style={{
        background: `radial-gradient(circle 200px at ${position.x}px ${position.y}px, rgba(252, 8, 101, 0.2), transparent 60%)`,
        mixBlendMode: "overlay",
        transition: "background 0.3s ease-out, transform 0.1s ease-out",
      }}
    />
  );
};

export default CursorGlow;
