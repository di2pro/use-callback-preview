import { Component } from "react";

import { randomHex } from "../util/randomHex";

export default class ChildCls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rndHex = randomHex();
    return <div className="Child" style={{ backgroundColor: rndHex }}>Class child component with {rndHex}</div>
  }
}