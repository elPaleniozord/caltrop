import { Color3, PhysicsImpostor, Vector3 } from '@babylonjs/core';
import Box from './components/Box/Box';
import Navbar from './components/Navbar/Navbar';
import BabylonScene from './components/BabylonRenderer/BabylonRenderer';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import {increaseRPM, decreaseRPM, changeRotationAxis, selectBox} from './redux/slices/sceneControls/boxSlice'
import Dice from './components/Dice/Dice';

function App() {
  const {rpm, rotationAxis} = useAppSelector(selectBox)
  const dispatch = useAppDispatch()

  // const handleThrow = () => {
  //   dices.forEach(dice => {
  //     dice.physicsImpostor.appylImpulse(
  //       Vector3..
  //     )
  //   })
  // }
  
  return (
    <AppContainer>
      <Navbar />      
      <BabylonScene>
        <arcRotateCamera name='primary-camera' alpha={0} beta={0} radius={15} target={Vector3.Zero()} position={new Vector3(0,5,-15)}/>
        {/* <freeCamera name='primary-camera' position={new Vector3(0,5,-10)} setTarget={[Vector3.Zero()]} /> */}
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />

          <Dice name='d20' type='ico' color={Color3.Green()} position={new Vector3(4,5,0)} />
          <Dice name='d12' type='dod' color={Color3.Blue()} position={new Vector3(0,5,0)} />
          <Dice name='d10' type='tra' color={Color3.Red()} position={new Vector3(-4,5,0)} />
          <Dice name='d8' type='oct' color={Color3.Yellow()} position={new Vector3(4,5,4)} />
          <Dice name='d6' type='ico' color={Color3.Gray()} position={new Vector3(0,5,-4)} />
          <Dice name='d4' type='tet' color={Color3.Purple()} position={new Vector3(4,5,-4)} />
          <Dice name='d10' type='tra' color={Color3.White()} position={new Vector3(-4,5,-4)} />
        {/* <ground name="ground" width={20} height={20} subdivisions={2} receiveShadows={true}>
          <physicsImpostor type={PhysicsImpostor.PlaneImpostor} _options={{mass: 0, restitution: 0.5}} />
        </ground> */}
        {/* <plane name='tray' size={20} position={new Vector3(0,-10,0)} rotation={new Vector3(0,1,1)}>
          <physicsImpostor type={PhysicsImpostor.PlaneImpostor} _options={{mass: 0, restitution: 0.3}} />
          <standardMaterial name='plane-material' diffuseColor={Color3.Black()}/> 
        </plane> */}

        {/* <Box color={Color3.Green()} position={new Vector3(2,0,0)} rotationAxis='x' rpm={5} />
        <Box color={Color3.Red()} position={new Vector3(-2,0,0)} rotationAxis={rotationAxis} rpm={rpm} /> */}
      </BabylonScene>
      <button>THROW</button>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default App;
