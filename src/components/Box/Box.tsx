import { Mesh, Nullable, Color3, Vector3} from "@babylonjs/core"
import { useRef } from "react"
import { useBeforeRender, useScene } from "react-babylonjs"

interface BoxProps  {
  color: Color3 | undefined
  rotationAxis: 'x' | 'y' | 'z'
  position: Vector3 | undefined
  rpm: number
}

const Box: React.FC<BoxProps> = (props) => {
  const scene = useScene()
  const boxRef = useRef<Nullable<Mesh>>(null)

  useBeforeRender(() => {
    if(boxRef.current) {
      let deltaTimeInMillis = scene!.getEngine().getDeltaTime();
      boxRef.current!.rotation[props.rotationAxis] += ((props.rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    }
  })

  return (
    <box name='box' ref={boxRef} size={2} position={props.position}>
      <standardMaterial name='box-material' diffuseColor={props.color} specularColor={Color3.Black()}  />
    </box>
  )
}

export default Box