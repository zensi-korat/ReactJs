import { useContext } from "react";
import { BioContext } from ".";

function About() {
  const { myName, myAge } = useContext(BioContext);
  return (
    <div>
      This is About Page!. {myName} is {myAge} yr old
    </div>
  );
}

export default About;
