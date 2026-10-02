import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import PropTypes from "prop-types";
import { skills } from "../constants/data";
import Loader from "./Loader";

const AnimatedText = animated(Text);

/**
 * A single word in the sphere.
 *
 * @param {Object} props Component props.
 * @param {*} props.children The text of the word.
 * @param {THREE.Vector3} props.position The position of the word in 3D space.
 *
 * @returns {JSX.Element} A word in a sphere.
 */
const Word = ({ children, position }) => {
  const [hovered, setHovered] = useState(false);
  const textRef = useRef();

  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  const { color, scale } = useSpring({
    color: hovered ? "#fc0865" : "white",
    scale: hovered ? 1.1 : 1,
    config: { tension: 200, friction: 20 },
  });

  return (
    <AnimatedText
      ref={textRef}
      position={position}
      fontSize={0.5}
      font="fonts/Roboto-VariableFont_wdth,wght.ttf"
      color={color}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {children}
    </AnimatedText>
  );
};

Word.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.object.isRequired,
};

/**
 * A sphere with words.
 *
 * @returns {JSX.Element} A sphere with words.
 */
const WordSphere = () => {
  const radius = 5;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5)); //≈ 2.399

  const wordPositions = skills.map((skill, i) => {
    const y = 1 - (i / (skills.length - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    const position = new THREE.Vector3(
      radius * Math.cos(theta) * radiusAtY,
      radius * y,
      radius * Math.sin(theta) * radiusAtY
    );

    return { position, skill };
  });

  return (
    <group>
      {wordPositions.map(({ skill, position }, index) => (
        <Word key={index} position={position}>
          {skill}
        </Word>
      ))}
    </group>
  );
};

/**
 * A canvas that displays a sphere with words in 3D space.
 *
 * It renders a canvas with a sphere made of words, with an ambient light and orbit controls.
 * The canvas is responsive and will change its size and camera settings based on the window size.
 *
 * @returns {JSX.Element} A Canvas element with a sphere of words.
 */
const SkillsSphere = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = size < 640;
  const isTablet = size >= 640 && size < 1024;

  return (
    <Canvas
      camera={{
        position: isMobile ? [0, 0, 14] : isTablet ? [0, 0, 16] : [0, 0, 12],
        fov: isMobile ? 70 : isTablet ? 65 : 60,
      }}
      style={{
        width: "100%",
        height: isMobile ? "50vh" : isTablet ? "60vh" : "80vh",
      }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.5} />
        <WordSphere />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
};

export default SkillsSphere;
