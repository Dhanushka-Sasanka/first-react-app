
import "./App.css";
import Component1 from "./components/classBase";
import ClassProps from "./components/ClassProps";
import Clicked from "./components/Clicked";
import FunctionComponent from "./components/functionBase";
import MouseHover from "./components/MouseHover";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>Hello ReactJS</h1>
      <FunctionComponent/>
      <Component1/>
      <Clicked/>
      <MouseHover/>
      <ClassProps name="DHANUSHKA SASANKA PROPERTY"/>
    </div>
  );
}

export default App;
