import { useContext } from "react";
import { BioContext } from ".";

function Home() {
  const { myName, myAge } = useContext(BioContext);
  return (
    <div>
      Hello Context API. {myName} is {myAge} yr old
    </div>
  );
}

export default Home;
