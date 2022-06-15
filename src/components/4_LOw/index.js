/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./2021_Volkswagen_ID.4_LOW.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.Body_1.geometry} material={materials.PlasticSilver} />
        <mesh geometry={nodes.Body_2.geometry} material={materials.PlasticDarkExt} />
        <mesh geometry={nodes.Body_3.geometry} material={materials.CarPaint} />
        <mesh geometry={nodes.Body_4.geometry} material={materials.MetalDeepBlack} />
        <mesh geometry={nodes.Body_5.geometry} material={materials.PlasticGlossy} />
        <mesh geometry={nodes.Body_6.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.Body_7.geometry} material={materials.MetalDark} />
        <mesh geometry={nodes.Body_8.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Body_9.geometry} material={materials.AluminumLt} />
        <mesh geometry={nodes.Body_10.geometry} material={materials.RadiatorDark} />
        <mesh geometry={nodes.Body_11.geometry} material={materials.intTexGlossyButtons} />
        <mesh geometry={nodes.Body_12.geometry} material={materials.GlassTextured} />
        <mesh geometry={nodes.Body_13.geometry} material={materials.ExteriorTex} />
      </group>
      <group position={[-0.9, 0.9, -0.21]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.DoorRearRight_1.geometry} material={materials.PlasticDarkExt} />
        <mesh geometry={nodes.DoorRearRight_2.geometry} material={materials.CarPaint} />
        <mesh geometry={nodes.DoorRearRight_3.geometry} material={materials.PlasticGlossy} />
        <mesh geometry={nodes.DoorRearRight_4.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.DoorRearRight_5.geometry} material={materials.AluminumLt} />
        <mesh geometry={nodes.DoorRearRight_6.geometry} material={materials.GlassTextured} />
        <mesh geometry={nodes.DoorRearRight_7.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.DoorRearRight_8.geometry} material={materials.intLeatherDk} />
        <mesh geometry={nodes.DoorRearRight_9.geometry} material={materials.intPlasticDkmatte} />
        <mesh geometry={nodes.DoorRearRight_10.geometry} material={materials.intLeatherLt} />
        <mesh geometry={nodes.DoorRearRight_11.geometry} material={materials.intPlasticDkBMP} />
        <mesh geometry={nodes.DoorRearRight_12.geometry} material={materials.intTexButtons} />
      </group>
      <group position={[0, 1.52, -1.42]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.RearDoor_1.geometry} material={materials.PlasticSilver} />
        <mesh geometry={nodes.RearDoor_2.geometry} material={materials.CarPaint} />
        <mesh geometry={nodes.RearDoor_3.geometry} material={materials.MetalDeepBlack} />
        <mesh geometry={nodes.RearDoor_4.geometry} material={materials.PlasticGlossy} />
        <mesh geometry={nodes.RearDoor_5.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.RearDoor_6.geometry} material={materials.MetalDark} />
        <mesh geometry={nodes.RearDoor_7.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.RearDoor_8.geometry} material={materials.GlassTextured} />
        <mesh geometry={nodes.RearDoor_9.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.RearDoor_10.geometry} material={materials.intPlasticDkBMP} />
        <mesh geometry={nodes.RearDoor_11.geometry} material={materials.GlassRedLights} />
        <mesh geometry={nodes.RearDoor_12.geometry} material={materials.GlassRedLights} />
        <mesh geometry={nodes.RearDoor_13.geometry} material={materials.LightsChromeBMP} />
      </group>
      <group position={[0, 0.68, 1.95]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.RearDoorLights_1.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.RearDoorLights_2.geometry} material={materials.GlassRedLights} />
        <mesh geometry={nodes.RearDoorLights_3.geometry} material={materials.GlassLights} />
        <mesh geometry={nodes.RearDoorLights_4.geometry} material={materials.LightsEmissiveBack} />
        <mesh geometry={nodes.RearDoorLights_5.geometry} material={materials.LightsTexture} />
        <mesh geometry={nodes.RearDoorLights_6.geometry} material={materials.GlassLightsMatte} />
        <mesh geometry={nodes.RearDoorLights_7.geometry} material={materials.GlassLightsBMP} />
      </group>
      <group position={[0, 0.68, 0.53]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.Interior_1.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Interior_2.geometry} material={materials.AluminumLt} />
        <mesh geometry={nodes.Interior_3.geometry} material={materials.intTexGlossyButtons} />
        <mesh geometry={nodes.Interior_4.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Interior_5.geometry} material={materials.intPlasticDkBMP} />
        <mesh geometry={nodes.Interior_6.geometry} material={materials.intTexButtons} />
        <mesh geometry={nodes.Interior_7.geometry} material={materials.GlassLights} />
        <mesh geometry={nodes.Interior_8.geometry} material={materials.intUpholsteryplasticBMP} />
        <mesh geometry={nodes.Interior_9.geometry} material={materials.intBelts} />
        <mesh geometry={nodes.Interior_10.geometry} material={materials.intFabricRoof} />
        <mesh geometry={nodes.Interior_11.geometry} material={materials.intCarpet} />
        <mesh geometry={nodes.Interior_12.geometry} material={materials.intRubber} />
        <mesh geometry={nodes.Interior_13.geometry} material={materials.intLedEmissive} />
        <mesh geometry={nodes.Interior_14.geometry} material={materials.Mirrors} />
      </group>
      <group position={[0, 1.08, -1.16]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.Seats_1.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.Seats_2.geometry} material={materials.MetalDark} />
        <mesh geometry={nodes.Seats_3.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Seats_4.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Seats_5.geometry} material={materials.intLeatherDk} />
        <mesh geometry={nodes.Seats_6.geometry} material={materials.intPlasticDkmatte} />
        <mesh geometry={nodes.Seats_7.geometry} material={materials.intLeatherLt} />
        <mesh geometry={nodes.Seats_8.geometry} material={materials.intPlasticDkBMP} />
        <mesh geometry={nodes.Seats_9.geometry} material={materials.intTexButtons} />
        <mesh geometry={nodes.Seats_10.geometry} material={materials.intBelts} />
        <mesh geometry={nodes.Seats_11.geometry} material={materials.intCarpet} />
        <mesh geometry={nodes.Seats_12.geometry} material={materials.intFabric} />
        <mesh geometry={nodes.Seats_13.geometry} material={materials.intPlasticRed} />
        <mesh geometry={nodes.Seats_14.geometry} material={materials.StitchesLt} />
        <mesh geometry={nodes.Seats_15.geometry} material={materials.StitchesDk} />
        <mesh geometry={nodes.Seats_16.geometry} material={materials.StitchesBrown} />
      </group>
      <group position={[0, 0.8, -0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.Dash_1.geometry} material={materials.PlasticSilver} />
        <mesh geometry={nodes.Dash_2.geometry} material={materials.PlasticGlossy} />
        <mesh geometry={nodes.Dash_3.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.Dash_4.geometry} material={materials.MetalDark} />
        <mesh geometry={nodes.Dash_5.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Dash_6.geometry} material={materials.AluminumLt} />
        <mesh geometry={nodes.Dash_7.geometry} material={materials.intTexGlossyButtons} />
        <mesh geometry={nodes.Dash_8.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Dash_9.geometry} material={materials.intLeatherDk} />
        <mesh geometry={nodes.Dash_10.geometry} material={materials.intPlasticDkmatte} />
        <mesh geometry={nodes.Dash_11.geometry} material={materials.intPlasticDkBMP} />
        <mesh geometry={nodes.Dash_12.geometry} material={materials.intTexButtons} />
        <mesh geometry={nodes.Dash_13.geometry} material={materials.intLedEmissive} />
        <mesh geometry={nodes.Dash_14.geometry} material={materials.intChromeButtons} />
      </group>
      <group position={[0.36, 1.02, 0.46]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.SteeringWheel_1.geometry} material={materials.PlasticGlossy} />
        <mesh geometry={nodes.SteeringWheel_2.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.SteeringWheel_3.geometry} material={materials.AluminumLt} />
        <mesh geometry={nodes.SteeringWheel_4.geometry} material={materials.intTexGlossyButtons} />
        <mesh geometry={nodes.SteeringWheel_5.geometry} material={materials.intLeatherDk} />
        <mesh geometry={nodes.SteeringWheel_6.geometry} material={materials.intPlasticDkBMP} />
        <mesh geometry={nodes.SteeringWheel_7.geometry} material={materials.StWheelStitches} />
        <mesh geometry={nodes.SteeringWheel_8.geometry} material={materials.StWheelPlasticBMP} />
      </group>
      <mesh geometry={nodes.Undercarriage.geometry} material={materials.Plastic} position={[0, 0.68, 1.95]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <group position={[0, 0.68, 1.95]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.HeadLights_1.geometry} material={materials.CarPaint} />
        <mesh geometry={nodes.HeadLights_2.geometry} material={materials.PlasticGlossy} />
        <mesh geometry={nodes.HeadLights_3.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.HeadLights_4.geometry} material={materials.AluminumLt} />
        <mesh geometry={nodes.HeadLights_5.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.HeadLights_6.geometry} material={materials.LightsChromeBMP} />
        <mesh geometry={nodes.HeadLights_7.geometry} material={materials.GlassLights} />
        <mesh geometry={nodes.HeadLights_8.geometry} material={materials.GlassLightsMatte} />
        <mesh geometry={nodes.HeadLights_9.geometry} material={materials.GlassLightsBMP} />
        <mesh geometry={nodes.HeadLights_10.geometry} material={materials.LightsEmissiveLED} />
        <mesh geometry={nodes.HeadLights_11.geometry} material={materials.HeadlightsMetalSilver} />
        <mesh geometry={nodes.HeadLights_12.geometry} material={materials.LightEmissiveLens} />
        <mesh geometry={nodes.HeadLights_13.geometry} material={materials.HdLightsLens} />
        <mesh geometry={nodes.HeadLights_14.geometry} material={materials.PlasticDkGlossyGrill} />
      </group>
      <group position={[-0.9, 1.04, -1.28]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.FuelCap_1.geometry} material={materials.CarPaint} />
        <mesh geometry={nodes.FuelCap_2.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.FuelCap_3.geometry} material={materials.Plastic} />
      </group>
      <group position={[0.78, 0.36, 1.43]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.WheelFrLeft_1.geometry} material={materials.WheelPaintBlack} />
        <mesh geometry={nodes.WheelFrLeft_2.geometry} material={materials.WheelAluminumRim} />
        <mesh geometry={nodes.WheelFrLeft_3.geometry} material={materials.WheelLogo} />
        <mesh geometry={nodes.WheelFrLeft_4.geometry} material={materials.WheelTireBump} />
        <mesh geometry={nodes.WheelFrLeft_5.geometry} material={materials.WheelBrakeDisk} />
        <mesh geometry={nodes.WheelFrLeft_6.geometry} material={materials.WheelBrakeCaliper} />
      </group>
      <mesh geometry={nodes.BrakeFrLeft.geometry} material={materials.WheelBrakeCaliper} position={[0, 0.68, 1.95]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <group position={[0.78, 0.37, -1.32]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.WheelRearLeft_1.geometry} material={materials.WheelPaintBlack} />
        <mesh geometry={nodes.WheelRearLeft_2.geometry} material={materials.WheelAluminumRim} />
        <mesh geometry={nodes.WheelRearLeft_3.geometry} material={materials.WheelLogo} />
        <mesh geometry={nodes.WheelRearLeft_4.geometry} material={materials.WheelTireBump} />
        <mesh geometry={nodes.WheelRearLeft_5.geometry} material={materials.WheelBrakeDisk} />
        <mesh geometry={nodes.WheelRearLeft_6.geometry} material={materials.WheelBrakeCaliper} />
      </group>
      <mesh geometry={nodes.BrakeRearLeft.geometry} material={materials.WheelBrakeCaliper} position={[0, 0.68, 1.95]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <group position={[-0.78, 0.36, 1.43]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.WheelFrRight_1.geometry} material={materials.WheelPaintBlack} />
        <mesh geometry={nodes.WheelFrRight_2.geometry} material={materials.WheelAluminumRim} />
        <mesh geometry={nodes.WheelFrRight_3.geometry} material={materials.WheelLogo} />
        <mesh geometry={nodes.WheelFrRight_4.geometry} material={materials.WheelTireBump} />
        <mesh geometry={nodes.WheelFrRight_5.geometry} material={materials.WheelBrakeDisk} />
        <mesh geometry={nodes.WheelFrRight_6.geometry} material={materials.WheelBrakeCaliper} />
      </group>
      <mesh geometry={nodes.BrakeFrRight.geometry} material={materials.WheelBrakeCaliper} position={[0, 0.68, 1.95]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <group position={[-0.78, 0.37, -1.32]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.WheelRearRight_1.geometry} material={materials.WheelPaintBlack} />
        <mesh geometry={nodes.WheelRearRight_2.geometry} material={materials.WheelAluminumRim} />
        <mesh geometry={nodes.WheelRearRight_3.geometry} material={materials.WheelLogo} />
        <mesh geometry={nodes.WheelRearRight_4.geometry} material={materials.WheelTireBump} />
        <mesh geometry={nodes.WheelRearRight_5.geometry} material={materials.WheelBrakeDisk} />
        <mesh geometry={nodes.WheelRearRight_6.geometry} material={materials.WheelBrakeCaliper} />
      </group>
      <mesh geometry={nodes.BrakeRearRight.geometry} material={materials.WheelBrakeCaliper} position={[0, 0.68, 1.95]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <group position={[0, 0.68, 1.95]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.RearLights_1.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.RearLights_2.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.RearLights_3.geometry} material={materials.GlassRedLights} />
        <mesh geometry={nodes.RearLights_4.geometry} material={materials.LightsChromeBMP} />
        <mesh geometry={nodes.RearLights_5.geometry} material={materials.GlassLights} />
        <mesh geometry={nodes.RearLights_6.geometry} material={materials.LightsEmissiveBack} />
        <mesh geometry={nodes.RearLights_7.geometry} material={materials.LightsTexture} />
        <mesh geometry={nodes.RearLights_8.geometry} material={materials.GlassLightsBMP} />
      </group>
      <group position={[0.9, 0.9, 0.88]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.DoorFrLeft_1.geometry} material={materials.CarPaint} />
        <mesh geometry={nodes.DoorFrLeft_2.geometry} material={materials.PlasticGlossy} />
        <mesh geometry={nodes.DoorFrLeft_3.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.DoorFrLeft_4.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.DoorFrLeft_5.geometry} material={materials.AluminumLt} />
        <mesh geometry={nodes.DoorFrLeft_6.geometry} material={materials.GlassTextured} />
        <mesh geometry={nodes.DoorFrLeft_7.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.DoorFrLeft_8.geometry} material={materials.intLeatherDk} />
        <mesh geometry={nodes.DoorFrLeft_9.geometry} material={materials.intPlasticDkmatte} />
        <mesh geometry={nodes.DoorFrLeft_10.geometry} material={materials.intLeatherLt} />
        <mesh geometry={nodes.DoorFrLeft_11.geometry} material={materials.intPlasticDkBMP} />
        <mesh geometry={nodes.DoorFrLeft_12.geometry} material={materials.intTexButtons} />
        <mesh geometry={nodes.DoorFrLeft_13.geometry} material={materials.GlassLights} />
        <mesh geometry={nodes.DoorFrLeft_14.geometry} material={materials.Mirrors} />
        <mesh geometry={nodes.DoorFrLeft_15.geometry} material={materials.Plastic} />
      </group>
      <group position={[0.9, 0.9, -0.21]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.DoorRearLeft_1.geometry} material={materials.CarPaint} />
        <mesh geometry={nodes.DoorRearLeft_2.geometry} material={materials.PlasticGlossy} />
        <mesh geometry={nodes.DoorRearLeft_3.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.DoorRearLeft_4.geometry} material={materials.AluminumLt} />
        <mesh geometry={nodes.DoorRearLeft_5.geometry} material={materials.GlassTextured} />
        <mesh geometry={nodes.DoorRearLeft_6.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.DoorRearLeft_7.geometry} material={materials.intLeatherDk} />
        <mesh geometry={nodes.DoorRearLeft_8.geometry} material={materials.intPlasticDkmatte} />
        <mesh geometry={nodes.DoorRearLeft_9.geometry} material={materials.intLeatherLt} />
        <mesh geometry={nodes.DoorRearLeft_10.geometry} material={materials.intPlasticDkBMP} />
        <mesh geometry={nodes.DoorRearLeft_11.geometry} material={materials.intTexButtons} />
      </group>
      <group position={[-0.9, 0.9, 0.88]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.DoorFrRight_1.geometry} material={materials.PlasticDarkExt} />
        <mesh geometry={nodes.DoorFrRight_2.geometry} material={materials.CarPaint} />
        <mesh geometry={nodes.DoorFrRight_3.geometry} material={materials.PlasticGlossy} />
        <mesh geometry={nodes.DoorFrRight_4.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.DoorFrRight_5.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.DoorFrRight_6.geometry} material={materials.AluminumLt} />
        <mesh geometry={nodes.DoorFrRight_7.geometry} material={materials.GlassTextured} />
        <mesh geometry={nodes.DoorFrRight_8.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.DoorFrRight_9.geometry} material={materials.intLeatherDk} />
        <mesh geometry={nodes.DoorFrRight_10.geometry} material={materials.intPlasticDkmatte} />
        <mesh geometry={nodes.DoorFrRight_11.geometry} material={materials.intLeatherLt} />
        <mesh geometry={nodes.DoorFrRight_12.geometry} material={materials.intPlasticDkBMP} />
        <mesh geometry={nodes.DoorFrRight_13.geometry} material={materials.intTexButtons} />
        <mesh geometry={nodes.DoorFrRight_14.geometry} material={materials.GlassLights} />
        <mesh geometry={nodes.DoorFrRight_15.geometry} material={materials.Mirrors} />
        <mesh geometry={nodes.DoorFrRight_16.geometry} material={materials.Plastic} />
      </group>
    </group>
  )
}

useGLTF.preload('/2021_Volkswagen_ID.4_LOW.gltf')