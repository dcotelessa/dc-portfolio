import { Canvas } from "@react-three/fiber";

export default function MySidebar(props) {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshPhongMaterial />
      </mesh>
      <ambientLight args={[0xff0000]} intensity={0.1} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
    </Canvas>
  );
}
