import { PureComponent } from "react";
import { randomHex } from "../util/randomHex";

export default class ChildPureCls extends PureComponent {
  render() {
    const rndHex = randomHex();
    return <div className="Child" style={{ backgroundColor: rndHex }}>Pure class component with {rndHex}</div>
  }
}