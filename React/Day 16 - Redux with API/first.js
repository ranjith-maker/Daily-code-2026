
import React from "react";
import ReactDOM from "react-dom/client"
import stores from "./src/store";
import { Provider } from "react-redux";
import CoinCreate from "./Coincreate";



function App() {


return(

<Provider store={stores} >
<CoinCreate></CoinCreate>  
  
  
</Provider>

)

}

let root = ReactDOM.createRoot(document.getElementById("road"))
root.render(<App/>)

  




/*

when we request(fetch) data from server, there are 3 stages, 1)Pending - Loading state 2)Fulfilled,Resolves -  3)Rejection - showError
Let's say I need to get github user's data, 3 variable --> Data, status, Error 
If it is resolved, data will be stored and shown in Data, if it is in Pending state,Loading var shows it , Error - It shows rejected, if it is rejected                           
Initially loading is false, as soons as I fetch it I make it true,  if data is resolved I make it false  
When you use createAsyncThunk(), it gives a fucntion like fecthdata()then that createAsyncFcntion can handle all three dispatch fuycntion data, loading, error 
createAsync func made in global with all the dispatch actions, rememeber we dont call it as fucntion , when using dispatch we export with actions and what is that dispatch if we consle log it like this console.log(dispatch(Increase()) ---> type: /slicename/functionname, payload : (argument)   )







 
  */





