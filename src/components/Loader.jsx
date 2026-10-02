import { Html, useProgress } from "@react-three/drei";

/**
 * Displays a loading bar for the 3D scene
 * @returns A JSX element that renders a loading bar
 */
const Loader = () => {
  const { progress } = useProgress();
  console.log("Loading Progress:", progress);

  return (
    <Html center>
      <div className="flex flex-col items-center text-white text-lg font-bold">
        <p>Loading {Math.round(progress)}%</p>
        <div className="w-32 h-1 bg-gray-500 mt-2">
          <div
            className="h-full bg-[#fc0865]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
