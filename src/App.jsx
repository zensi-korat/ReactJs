import "./App.css";
import { BioProvider } from "./components/hooks/ContextAPI";
import About from "./components/hooks/ContextAPI/About";
import Home from "./components/hooks/ContextAPI/Home";
import MainProp from "./components/PropTypes/main";

function App() {
  return (
    <>
      <MainProp />
      {/* <BioProvider>
        <Home />
        <About />
      </BioProvider> */}
      {/* <UseId /> */}
      {/* <UseRef /> */}
      {/* <Pokemon /> */}
      {/* <ApiFetch /> */}
      {/* <EffectChallenge /> */}
      {/* <ReactUseEffect /> */}
      {/* <ContactForm /> */}
      {/* <RegistrationForm /> */}
      {/* <CounterChallenge /> */}
      {/* <ShortCircuit /> */}
      {/* <Todo /> */}
      {/* <ToggleSwitch /> */}
      {/* <GettingStarted /> */}
      {/* if i declare a variable and that variable's value contains any usestate then it is known as derived state */}
    </>
  );
}

export default App;
