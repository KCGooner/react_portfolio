import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/about/index";
// import Contact from "./pages/contact";
// import Projects from "./pages/projects";
import Header from "./components/header";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper";

function App() {
  document.title = "About Me";
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path ="/" component={Portfolio} />
          {/* <Route exact path ="/contact" component={Contact} />
          <Route exact path ="/projects" component={Projects} /> */}
       </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App;