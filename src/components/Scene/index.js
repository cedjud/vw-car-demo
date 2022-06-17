import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, ScrollControls, useTexture, PerspectiveCamera } from '@react-three/drei';
import { Box, Html, useGLTF, useFBX } from '@react-three/drei';

import Model from '../Model';
import Car from '../Car';
import createTube from '../PathTube';
import { Vector3 } from 'three';

// import Model2 from '../4_LOw';

const Loader = () => {
	return (
		<Html conter>
			<p>Loading...</p>
		</Html>
	)
}

function Rig({ zoom, children }) {
	const outer = useRef()
	const inner = useRef()
	useFrame(({ clock }) => {
		const { elapsedTime } = clock;

		if (!zoom) {
			outer.current.rotation.y -= 0.0025;
		} 

		if (zoom) {
			outer.current.rotation.y = 0;
		}
		// outer.current.position.y = THREE.MathUtils.lerp(outer.current.position.y, 0, 0.05)
		// inner.current.rotation.y = Math.sin(clock.getElapsedTime() / 8) * Math.PI
		// inner.current.position.z = 5 + -Math.sin(clock.getElapsedTime() / 2) * 10
		// inner.current.position.y = -5 + Math.sin(clock.getElapsedTime() / 2) * 2
	})
	return (
		<group position={[0, 0, 0]} rotation={[0, -Math.PI / 4, 0]} ref={outer}>
		<group ref={inner}>{children}</group>
		</group>
	)
}

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Scene = ({ zoom }) => {
	const cameraRef = useRef();
	const cameraLookAtRef = useRef(new THREE.Vector3(0, 0, 0));
	const percentageRef = useRef(0.0001);
	const { curvePath } = createTube();

	let percentage = 0.0;
	useFrame(() => {
		// console.log(cameraRef.current.position)
		if (zoom && percentageRef.current < 0.99) {

			percentageRef.current += 0.001;

			let localP = clamp(percentageRef.current, 0, 1);

			var p1 = curvePath.getPointAt(localP % 1);

			// var p2 = curvePath.getPointAt((percentageRef.current + 0.01) % 1);
			var p3 = curvePath.getPointAt(1);

			// if (percentageRef.current > 0) {
			cameraRef.current.position.x = p1.x;
			cameraRef.current.position.y = p1.y;
			cameraRef.current.position.z = p1.z;
				// cameraRef.current.lookAt(p2.x, p2.y, p2.z);
			// }
			cameraLookAtRef.current = new THREE.Vector3(p3.x, p3.y, p3.z + 0.1);
			// cameraRef.current.lookAt(0, 0, 0);
		} else {
			cameraRef.current.lookAt(cameraLookAtRef.current);
		}

		// if (!zoom && percentageRef.current > 0) {
		//   percentageRef.current -= 0.00095;
		// 	var p1 = curvePath.getPointAt(percentageRef.current % 1);
		// 	var p2 = curvePath.getPointAt((percentageRef.current + 0.01) % 1);

		// 	cameraRef.current.position.x = p1.x;
		// 	cameraRef.current.position.y = p1.y;
		// 	cameraRef.current.position.z = p1.z;
		// 	cameraRef.current.lookAt(p2.x, p2.y, p2.z);
		// 	// cameraRef.current.lookAt(0, 0, 0);
		// }
		// // let percentageRef.current = scrollControls.getScrollPosition();

	})

	return (
		<>
			{/* <axesHelper args={[10]} /> */}
			<PerspectiveCamera ref={cameraRef} position={[0, 3, 5]} fov={70} makeDefault />
			<OrbitControls />
			<ambientLight intensity={1} />
			<color attach="background" args={['#ffffff']} />
			<fog attach="fog" args={['#ffffff', 50, 100]} />
			<pointLight args={["#ffffff", 1]} position={[4, 1, 3]} />
			<pointLight args={["#ffffff", 1]} position={[-1, 1, -4]} />
			<directionalLight args={["#ffffff", 5]} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512} />
			{/* <pointLight  */}
			{/* <Box castShadow={true} position={} /> */}
			{/* <mesh>
				<tubeBufferGeometry args={[curvePath, 600, 0.25, 10, false]} />
				<meshBasicMaterial color="white" transparent opacity={0}/>
			</mesh> */}
			<Rig zoom={zoom}>
				{/* <primitive scale={0.001} object={fbx} castShadow /> */}
				<mesh scale={[50, 40, 1]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
					<planeBufferGeometry />
					{/* <meshStandardMaterial color="white" /> */}
					<meshStandardMaterial transparent opacity={0.6} color="#ffffff" />
				</mesh>

				<Suspense fallback={<Loader />}>
					<Car />
				</Suspense>

			</Rig>
		</>
	)
}

export default Scene;