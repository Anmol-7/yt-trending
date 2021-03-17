import React from "react";
import HomeScreen from "./screens/HomeScreen";
import VideoDetailScreen from "./screens/VideoDetailScreen";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main className="App">
          <Route path="/:id" component={VideoDetailScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>
      </Container>
    </Router>
  );
};

export default App;
