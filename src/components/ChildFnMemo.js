import { memo } from "react";

import { randomHex } from "../util/randomHex";

function ChildFnMemo({ callback }) {
  const rndHex = randomHex();
  return <div className="Child" style={{backgroundColor: rndHex}}>Memoized functional component with {rndHex}</div>
}

export default memo(ChildFnMemo);
