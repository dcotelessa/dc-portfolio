import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./logo-model";
import { Loader } from "./loader";

export default function MyLogo(props) {
  return (
    <Canvas camera={{ fov: 50, position: [0, 100, 1.5] }} shadows="soft">
      <Suspense fallback={Loader}>
        <Model rotation={[-0.1, 0, -0.7]} />
      </Suspense>
      <ambientLight args={[0xffffff]} intensity={0.5} />
      <directionalLight position={[-5, 15, 5]} intensity={0.75} />
    </Canvas>
  );
}
