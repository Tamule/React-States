
import React, { useState } from "react";

export default function City(props) {
  const [temperature ,setTemperature] = useState(props.temperature);
  const [unit, setUnit] = useState ("celsius");

function Fahrenheiht(event) {
  event.preventDefault();
  let FahrenheihtTemperature = Math.round(props.temperature * (9 / 5 ) +32);
  setUnit("imperial");
  setTemperature(FahrenheihtTemperature);
}

function celsius(event) {
  event.preventDefault();
  setUnit("celsius");
  setTemperature(props.temperature);
}
  return (
    <div class="City">
      It is {temperature} {unit} 
      <a href="#" onClick={celsius}> °C </a>{" "}
      | {" "}
      <a href="#" onClick={Fahrenheiht}>°F </a> {" "}
       in {props.name}
    </div>
  );
}
