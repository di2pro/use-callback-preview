import { randomHex } from "../util/randomHex";

export default function ChildFn({ callback }) {
  const rndHex = randomHex();
  return <div className="Child" style={{backgroundColor: rndHex}}>Functional component with {rndHex}</div>
}