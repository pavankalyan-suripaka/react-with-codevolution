import { CounterProvider } from "./components/context-optimization/CountProvider";
import Parent from "./components/context-optimization/Parent";
import ParentComp from "./components/incorrect-optimization/ParentComp";
import UseReducer from "./components/use-reducer/UseReducer";
import ArrayUseState from "./components/useState/ArrayUseState";
import ObjectUseState from "./components/useState/ObjectUseState";
import UseState from "./components/useState/UseState";

function App() {
  return (
    <div className="App">

      <CounterProvider>
        <Parent />
      </CounterProvider>
      {/* <ParentComp /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
