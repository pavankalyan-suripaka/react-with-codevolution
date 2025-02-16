import React from "react"
import EventBinding from "./components/eventBinding/EventBinding"
import Parent from "./components/methodAsProp/Parent"
import Login from "./components/conditionalRendering/Login"
import NameList from "./components/listRendering/NameList"
import Form from "./components/form/Form"
// import ComponentA from "./components/class-lifeCycleMethods/mounting/ComponentA"
import ComponentUpdateA from "./components/class-lifeCycleMethods/updating/ComponentUpdateA"
import ParentComp from "./components/pureComponents/ParentComp"
import ParentCompMemo from "./components/react.memo/ParentComp"
import RefComp from "./components/refs-class/RefComp"
import ParentCompoRef from "./components/usingRefFocusChildCompFromParentInClassCompo/ParentCompo"


// This is called stateless component
const App = () => {

  return (
    <div>
      <ParentCompoRef />
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