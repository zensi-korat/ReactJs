import { useContext } from "react";
import { BioContext } from ".";

function About() {
  // Step3: To consume the data from the provider
  // useContext will take the context as an argument
  // and return the value passed from the provider
  const { myName, myAge } = useContext(BioContext);
  return (
    <div>
      This is About Page!. {myName} is {myAge} yr old
    </div>
  );
}

export default About;
