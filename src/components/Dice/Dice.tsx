import { Color3, MeshBuilder, PhysicsImpostor, Vector3, VertexBuffer } from "@babylonjs/core"
import { Body, Vec3 } from "cannon"
import { useClick } from "react-babylonjs"
import { randomizeVector } from "../../utils/math"

interface DiceProps {
  name: string
  type: 'tet' | 'oct' | 'dod' | 'ico' | 'tra'
  color: Color3
  position: Vector3
}

const dices = {
  'tet': {size: 1, key: 0, sides: [4,3,1,2]}, //4
  'oct': {size: 1.2, key: 1, sides: [1,7,8,2,3,5,6,4]}, //8
  'cub': {size: 1.4, sides: [6,2,1,5,3,4]},
  'dod': {size: 1.7, key: 2, sides: [1,4,2,5,6,3,12,9,11,8,7,10]}, //12
  'ico': {size: 2, key: 3, sides: [6, 9, 16, 3, 19, 11, 14, 8, 17, 1, 4, 20, 10, 7, 13, 18, 2, 12, 15, 5]}, //20
  'tra': {
    size: 1.5, 
    key: 11,
    sides: [5, 9, 1, 7, 3, 4, 10, 8, 2, 6, 5, 9, 1, 7, 3, 4, 10, 8, 2, 6],
    vertices: [
      [-0.95, -0.1, -0.31],
      [-0.59, -0.1, 0.81],
      [0, -1, 0],
      [0, -0.1, -1],
      [0, 1, 0],
      [0.59, -0.1, 0.81],
      [0.95, -0.1, -0.31],
      [0, 0.1, 1],
      [0.95, 0.1, 0.31],
      [0.59, 0.1, -0.81],
      [-0.59, 0.1, -0.81],
      [-0.95, 0.1, 0.31],
    ],
    faces: [
      [2, 0, 10, 3],
      [2, 1, 11, 0],
      [2, 5, 7, 1],
      [2, 3, 9, 6],
      [2, 6, 8, 5],
      [4, 9, 3, 10],
      [4, 10, 0, 11],
      [4, 11, 1, 7],
      [4, 7, 5, 8],
      [4, 8, 6, 9],
    ]} //10
}
const Dice: React.FC<DiceProps> = ({name, type, color, position}) => {
  const [ref] = useClick(() => {
    const dir = randomizeVector(), pos = randomizeVector()
    ref.current?.physicsImpostor?.applyImpulse(dir.scale(20), pos.scale(10))
  })

  if(name === 'd6') {
    return (
      <box name={name} size={2} position={position} >
        <standardMaterial name={`${name}-material`} diffuseColor={color} />
        <physicsImpostor type={PhysicsImpostor.BoxImpostor} _options={{mass: 15, restitution: 0.5}} />
      </box>
    )
  } else {
    const custom = {name: 'Pentagonal Trapezohedron', vertex: dices.tra.vertices, face: dices.tra.faces}
    const polyhedron = type==='tra' ?
      MeshBuilder.CreatePolyhedron(name, {type: dices[type].key, size: dices[type].size, custom: custom })
      :
      MeshBuilder.CreatePolyhedron(name, {type: dices[type].key, size: dices[type].size })
    polyhedron.rotate(new Vector3(1,0,0), .5)

    return (
      <mesh ref={ref} name={name} position={position} fromInstance={polyhedron} disposeInstanceOnUnmount>
        <standardMaterial name={`${name}-material`} diffuseColor={color} />
        <physicsImpostor type={PhysicsImpostor.MeshImpostor} _options={{mass: 10, restitution: .4}} />
      </mesh>
    )
  }
}

export default Dice