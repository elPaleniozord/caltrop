import { AmmoJSPlugin, CannonJSPlugin, OimoJSPlugin, Vector3 } from "@babylonjs/core"
import { Engine, Scene, useScene } from "react-babylonjs"
import { Provider } from "react-redux"
import { store } from '../../redux/store'
//@ts-ignore
import { default as Ammo } from 'ammo.js/builds/ammo';
import { useEffect } from "react";
//cannon does not handle mesh-mesh or convex-convex collisions dices will not bounce of each other
import * as CANNON from 'cannon'
import ammoLoader from "../../utils/ammoLoader";
window.CANNON = CANNON

const BabylonScene:React.FC = ({children}) => {
  const scene = useScene()
  useEffect(() => {
    ammoLoader()
    //wasm package need async loading
    //Ammo().then((res: any) => console.log(res))
  })
  const gravity = new Vector3(0,-9.81,0)
  const physicsEngine = new CannonJSPlugin()
  // const physicsEngine = new OimoJSPlugin()
  //const physicsEngine = new AmmoJSPlugin(false)
  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene enablePhysics={[gravity, physicsEngine]}>
        {/* context is not passed down to canvas need to bridge it explicitly */}
        <Provider store={store}>
        {children}
        </Provider>
      </Scene>
    </Engine> 

  )
}

export default BabylonScene