import "./View/App.css";
import Home from "./Controller/Home";
import Header from "./Controller/Header";
import Checkout from "./Controller/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Controller/Login";
import { useEffect } from "react";
import { auth } from "./Model/firebase";
import { useStateValue } from "./Model/StateProvider";
import Payment from "./Controller/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Controller/Orders";

const promise = loadStripe(
  "pk_test_51IehmsSDS4XEIVU2rkxLqZw5ZAHnBfDQE0nSLBBQEvjsjChPLARC7Tq1ibgRrrPZItjKQw2z0JEdfVzktk49E57h00BTkjSc0o"
);
function App() {
  const [{ user, cart }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM convention followed for styling
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
