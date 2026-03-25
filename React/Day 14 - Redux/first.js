
import React from "react";
import ReactDOM from "react-dom/client"
import Counting from "./src/Counting";
import stores from "./src/Stores";
import { Provider } from "react-redux";
import { Increase } from "./src/Slicer1";
import { CustomCounter } from "./src/Custom-Counter";

function App() {


return(

<>

<Provider  store={stores } >

<Counting>     </Counting>
<br></br>
<br></br>


<CustomCounter> </CustomCounter>

</Provider>


</>

)

}

let root = ReactDOM.createRoot(document.getElementById("road"))
root.render(<App/>)

  




/*









 
  */




