import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Box, Html, useGLTF, useFBX } from '@react-three/drei';

import Model from '../Model';

const Loader = () => {
	return (
		<Html conter>
			<p>Loading...</p>
		</Html>
	)
}

const Scene = () => {

	// console.log('model : ', model);

	// let fbx = useFBX('/models/car/2021_Volkswagen_ID.4_LOW.fbx')

	return (
		<>
			<OrbitControls />	
			<ambientLight />
			{/* <primitive object={fbx} /> */}
			<Box />
			<Suspense fallback={<Loader />}>
				<Model />
			</Suspense>
		</>
	)
}

export default Scene;