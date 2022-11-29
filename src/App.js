import React from "react";

// function App() {
//   return (
//     <h1>Hello,world!</h1>
//   );
// }

const App = () => {
  return (
  <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
