import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";

function App() {
  // For create MD5 Hash: ts + private key + publick
  // Exmaple: 1 12345 55555
  // MD5 Hash: d30f9245267c261e1560dabd9e5b65e9

  // fetch(
  //   "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=cb920ec5ee8092dccba36e86208e1ff2&hash=d30f9245267c261e1560dabd9e5b65e9"
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(data.data.results));
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/inicio" exact component={() => <Home />} />
          <Route path="/series" exact component={() => <Series />} />
          <Route path="/comics" exact component={() => <Comics />} />
          <Route component={() => <Error404 />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
