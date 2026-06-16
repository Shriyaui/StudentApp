import React from 'react';
import './App.css';

function Home() {
  return <h1>Welcome to the Home page of Student Management Portal</h1>;
}

function About() {
  return <h1>Welcome to the About page of the Student Management Portal</h1>;
}

function Contact() {
  return <h1>Welcome to the Contact page of the Student Management Portal</h1>;
}

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;