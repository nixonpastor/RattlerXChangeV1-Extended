import "./App.css";
import "./Components/Navbar.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Books from "./Components/Books";
import DormDecor from "./Components/DormDecor";
import Apparel from "./Components/Apparel";
import Wishlist from "./Components/Wishlist";
import Profile from "./Components/Profile";
import Electronics from "./Components/Electronics";
import Navbar from "./Components/ Navbar";
import EditProfile from "./Components/EditProfile";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import SignUpScreen from "./Components/SignUpScreen";
import ProductInfo from "./Components/ProductInfo";
import PrivateRoute from "./Components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import ForgotPassword from "./Components/ForgotPassword";
import LoginScreen from "./Components/LoginScreen";
import SellerInfo from "./Components/SellerInfo";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/books" exact component={Books} />
          <PrivateRoute path="/dormdecor" exact component={DormDecor} />
          <PrivateRoute path="/electronics" exact component={Electronics} />
          <PrivateRoute path="/apparel" exact component={Apparel} />
          <PrivateRoute path="/profile" exact component={Profile} />
          <PrivateRoute path="/wishlist" exact component={Wishlist} />
          <PrivateRoute path="/editprofile" exact component={EditProfile} />
          <PrivateRoute path="/addproduct" exact component={AddProduct} />
          <PrivateRoute path="/editproduct" exact component={EditProduct} />
          <PrivateRoute path="/productinfo" exact component={ProductInfo} />
          <PrivateRoute path="/sellerinfo" exact component={SellerInfo} />
          <Route path="/forgotpassword" exact component={ForgotPassword} />
          <Route path="/signup" exact component={SignUpScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <PrivateRoute
            path="/outlook"
            component={() => {
              window.location.href = "https://id.quicklaunch.io/StMarytx";
              return null;
            }}
          />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
