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



// This is called stateless component
const App = () => {

  return (
    <div>
      <UserProvider value="Pavan">
        <CompA />
      </UserProvider>
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