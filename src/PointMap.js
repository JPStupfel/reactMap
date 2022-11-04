import React from "react";
import { useMap, useGraphics } from "esri-loader-hooks";

// hooks allow us to create a map component as a function
function PointMap({ latitude, longitude }) {
  const geometry = {
    type: "point", // autocasts as new Point()
    latitude,
    longitude
  };
  var symbol = {
    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
    color: [0, 0, 0],
  };
  const map = {
    basemap: "hybrid"
  };
  const options = {
    view: {
      center: [longitude, latitude],
      zoom: 3
    }
  };
  const [ref, view] = useMap(map, options);
  // takes a view instance and graphic as a POJO
  // the point will be replaced if the lat/lng props change
  useGraphics(view, { geometry, symbol });
  return <div style={{ height: 400 }} ref={ref} />;
}

export default PointMap