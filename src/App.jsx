import { useState } from "react";
import "./App.css";
import ToggleSwitch from "./components/projects/ToggleSwitch/ToggleSwitch";
import Todo from "./components/projects/Todo/Todo";
import GettingStarted from "./components/projects/GettingStarted/GettingStarted";
import ShortCircuit from "./components/hooks/ShortCircuit";
import CounterChallenge from "./components/hooks/useState/Challange";
import { RegistrationForm } from "./components/hooks/useState/Registration";
import { ContactForm } from "./components/hooks/useState/ContactForm";
import ReactUseEffect from "./components/hooks/useEffect";
import { EffectChallenge } from "./components/hooks/useEffect/EffectChallange";

function App() {
  return (
    <>
      <EffectChallenge />
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
