import { AmmoJSPlugin, CannonJSPlugin, OimoJSPlugin, Vector3 } from "@babylonjs/core"
import { Engine, Scene, useScene } from "react-babylonjs"
import { Provider } from "react-redux"
import { store } from '../../redux/store'
//@ts-ignore
import { default as Ammo } from 'ammo.js/builds/ammo.js';
import { useEffect, useState } from "react";

//cannon does not handle mesh-mesh or convex-convex collisions dices will not bounce of each other
// import * as CANNON from 'cannon'
// window.CANNON = CANNON


const BabylonScene:React.FC = ({children}) => {
  const [physicsEngine, setPhysicsEngine] = useState<AmmoJSPlugin | null>(null)
  const gravity = new Vector3(0,-9.81*5,0)
  //const physicsEngine = new CannonJSPlugin()
  // const physicsEngine = new OimoJSPlugin()

  useEffect(() => {
    //ammo has to be loaded asynchronously due to WebAssembly compiler
    Ammo().then((ammo: any) => setPhysicsEngine(new AmmoJSPlugin(true, ammo)))
  }, [])

  return physicsEngine ? (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene enablePhysics={[gravity, physicsEngine]}>
        {/* context is not passed down to canvas need to bridge it explicitly */}
        <Provider store={store}>
        {children}
        </Provider>
      </Scene>
    </Engine> 
  ) : null
}

export default BabylonScene