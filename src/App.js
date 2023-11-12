import React from "react";
import Browse from "./screens/Browse";
import Navbar from "./components/NavBar/Nav";
import CardDetails from "./screens/CardDetails";
function App() {
  return (  
    <React.Fragment>
    <Navbar/>
    <Browse/>
    <CardDetails />
  </React.Fragment>
  );
}

export default App;
