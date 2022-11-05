import WebMap from "@arcgis/core/WebMap";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";

import MapView from "@arcgis/core/views/MapView";
import { useEffect, useRef } from "react";

export default function Map() {
  const mapDiv = useRef(null);

  function createPoint({ graphicsLayer, lng, lat }) {
    const point = {
      //Create a point
      type: "point",
      longitude: lng,
      latitude: lat,
    };

    const simpleMarkerSymbol = {
      type: "simple-marker",
      color: [226, 119, 40], // Orange
      outline: {
        color: [255, 255, 255], // White
        width: 1,
      },
    };

    const pointGraphic = new Graphic({
      geometry: point,
      symbol: simpleMarkerSymbol,
    });
    graphicsLayer.add(pointGraphic);
  }

  useEffect(() => {
    if (mapDiv.current) {
      const webMap = new WebMap({
        // Define the web map reference
        portalItem: {
          id: "6cf8b8fccec7411d84a2357f91009ff9",
          portal: "https://www.arcgis.com", // Default: The ArcGIS Online Portal
        },
      });

      const view = new MapView({
        map: webMap, // Load the web map
        container: mapDiv.current,
      });

      const graphicsLayer = new GraphicsLayer();
      webMap.add(graphicsLayer);

      const points = [{lng: -105.80657463861,
        lat: 35.0005930608889}, {lng: -100.80657463861,
          lat: 35.0005930608889}, {lng: -85.80657463861,
            lat: 35.0005930608889} ]

      points.forEach(e=>createPoint({graphicsLayer:graphicsLayer, lng: e.lng, lat: e.lat}))
      createPoint({
        graphicsLayer: graphicsLayer,
        lng: -105.80657463861,
        lat: 35.0005930608889,
      });


    }
  }, []);

  return <div style={{ height: 400 }} className="mapDiv" ref={mapDiv} />;
}
