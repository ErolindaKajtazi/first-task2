import React from "react";
import './App.css';
import Card from "./components/Card";
import items from "./components/Items";

function App() {

  return (
    <div className="map">
      {items.map((item) => (
        <Card className="card"
          id={item.id}
          date={item.date}
          button1={item.button1}
          name={item.name}
          text={item.text}
          button2={item.button2}
        />
      ))}
    </div>
  );
}

export default App;
