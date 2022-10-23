import { Polyline } from 'react-native-maps';
let polyline = require('polyline');
import React, { useState, useEffect } from "react";

export default function RedLine() {
  return lineWithCoords()
}

function lineWithCoords() {
  const [coords] = useState([]);
  const [color] = useState("#ffffff");

  useEffect(() => {
    fetch(
      `https://transitnu-api.herokuapp.com/api/v1/line`,
      {
        method: "GET",
      }
    )
      .then(res => {res.json()[0]['polylines'][0]; console.log(res); })
      .then(response => {
        coords(polyline.decode(response).map(function (pair) { return {latitude: pair[0], longitude: pair[1]}; }));
      })
      .catch(error => console.log(error));
  }, [coords]);
  return (
    <Polyline
      coordinates={coords}
      strokeColor={color}
      strokeWidth={6}
    />
  );
}
