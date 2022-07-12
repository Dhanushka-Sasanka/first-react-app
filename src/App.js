import "./App.css";
import Component1 from "./components/classBase";
import ClassProps from "./components/ClassProps";
import Clicked from "./components/Clicked";
import FunctionalProps from "./components/FunctionalProps";
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
      <FunctionComponent />
      <Component1 />
      <Clicked />
      <MouseHover />
      <ClassProps name="DHANUSHKA SASANKA PROPERTY" place="Galle" />
      <ClassProps name="ASANKA PROPERTY" place="Colombo" />
      <ClassProps name="Child COM" place="ANYWHERE">
        Child Component
      </ClassProps>
      <ClassProps name="AOT Time DOM gets as a button" place="ANYWHERE">
        <button>child button</button>
      </ClassProps>
      <FunctionalProps username="DSP" place="Melegoda"/>
      <FunctionalProps username="Asanka" place="Pilana"/>
    </div>
  );
}

export default App;
