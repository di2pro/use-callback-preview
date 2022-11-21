import './App.css';
import { useCallback, useState } from "react";
import ChildFn from "./components/ChildFn";
import ChildCls from "./components/ChildCls";
import ChildPureCls from "./components/ChildPureCls";
import ChildFnMemo from "./components/ChildFnMemo";

function App() {
  const [isTurnedOn, setIsTurnedOn] = useState(false);
  const toggleSwitch = useCallback(() => {
    setIsTurnedOn(!isTurnedOn);
  }, [isTurnedOn]);

  const turnSwitchOff = useCallback(() => {
    setIsTurnedOn(false);
  }, []);

  return (
    <div className="App">

      {isTurnedOn
        ? <h1>Turned On</h1>
        : <h1>Turned Off</h1>
      }

      <button onClick={toggleSwitch}>Switcher</button>

      <div className="Children">
        <ChildFn callback={turnSwitchOff} />
        <ChildCls callback={turnSwitchOff} />
        <ChildPureCls callback={turnSwitchOff} />
        <ChildFnMemo callback={turnSwitchOff} />
      </div>
    </div>
  );
}

export default App;
