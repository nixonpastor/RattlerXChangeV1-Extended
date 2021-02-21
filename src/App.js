import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      {/*Navbar */}
      <Route path="/" exact component={Home} />
      {/* <Route path="/books" exact component={Books} /> 
     <Route path="/dormdecor" exact component={DormDecor} />
     <Route path="/apparel" exact component={Apparel} /> 
     <Route path="/profile" exact component={Profile} /> 
     <Route path="/wishlist" exact component={Wishlist} />  
     <Route path="/editprofile" exact component={EditProfile} /> 
     <Route path="/addproduct" exact component={AddProduct} />  */}
    </Router>
  );
}

export default App;
