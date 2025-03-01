import React from "react"
import EventBinding from "./class-components/eventBinding/EventBinding"
import Parent from "./class-components/methodAsProp/Parent"
import Login from "./class-components/conditionalRendering/Login"
import NameList from "./class-components/listRendering/NameList"
import Form from "./class-components/form/Form"
// import ComponentA from "./class-components/class-lifeCycleMethods/mounting/ComponentA"
import ComponentUpdateA from "./class-components/class-lifeCycleMethods/updating/ComponentUpdateA"
import ParentComp from "./class-components/pureComponents/ParentComp"
import ParentCompMemo from "./class-components/react.memo/ParentComp"
import RefComp from "./class-components/refs-class/RefComp"
import ParentCompoRef from "./class-components/usingRefFocusChildCompFromParentInClassCompo/ParentCompo"
import ClickCounter from "./class-components/hoc/ClickCounter"
import HoverCounter from "./class-components/hoc/HoverCounter"
import CompA from "./class-components/context-api-class/CompoA"
import { UserProvider } from "./class-components/context-api-class/Context"
import ObjectUseState from "./functional-components/hooks/use-state/Object"
import MouseEvents from "./functional-components/hooks/use-effect/MouseEvents"
import Index from "./functional-components/hooks/use-effect/Index"
import Timer from "./functional-components/hooks/use-effect/Timer"
import CounterOne from "./functional-components/hooks/use-reducer/CounterOne"
import CounterTwo from "./functional-components/hooks/use-reducer/CounterTwo"
import CounterThree from "./functional-components/hooks/use-reducer/CounterThree"
import FetchApi from "./functional-components/hooks/use-reducer/FetchApi"
import FetchAPI from "./functional-components/hooks/use-state/FetchAPI"
import CounterA from "./functional-components/hooks/use-reducer/conters/CounterA"
import ParentComponent from "./functional-components/hooks/use-callback/ParentComponent"
import Counter from "./functional-components/hooks/use-memo/Counter"
import FocusInput from "./functional-components/hooks/use-ref/FocusInput"
import HookTimer from "./functional-components/hooks/use-ref/HookTimer"
import UseCounterOne from "./functional-components/custom-hooks/components/CounterOne"
import UseCounterTwo from "./functional-components/custom-hooks/components/CounterTwo"
import UseCounterThree from "./functional-components/custom-hooks/components/CounterThree"
import UserForms from "./functional-components/custom-hooks/components/UserForms"




// This is called stateless component
const App = () => {

  return (
    <div>

      <UserForms />
      {/* <UseCounterThree /> */}
      {/* <UseCounterOne />
      <UseCounterTwo /> */}
      {/* <HookTimer/> */}
      {/* <FocusInput /> */}
      {/* <Counter /> */}
      {/* <ParentComponent /> */}
      {/* <CounterA /> */}
      {/* <FetchAPI /> */}
      {/* <FetchApi /> */}
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <Timer /> */}
      {/* <Index /> */}
      {/* <MouseEvents /> */}
      {/* <ObjectUseState/> */}
      {/* <UserProvider value="Pavan">
        <CompA />
      </UserProvider> */}
      {/* <ClickCounter name="pavan" />
      <HoverCounter /> */}
      {/* <ParentCompoRef /> */}
      {/* <RefComp /> */}
      {/* <ParentCompMemo/> */}
      {/* <ParentComp /> */}
      {/* <ComponentUpdateA /> */}
      {/* <ComponentA /> */}
      {/* <Form /> */}
      {/* <NameList/> */}
      {/* <Login /> */}
      {/* <Parent /> */}
      {/* <EventBinding /> */}
    </div>
  )
}

export default App


// This is called state component
// import React, { Component } from "react";

// class App extends Component {

//   render() {
//     return (
//       <div>Hello World</div>
//     )
//   }
// }

// export default App;