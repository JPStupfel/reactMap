import {
   useScene, useWebMap, useWebScene, // create a map or scene
  useEvent, useEvents, useWatch, useWatches, // handle events or property changes
  useGraphic, useGraphics // add graphics to a map/scene
} from 'esri-loader-hooks';

// import React, {useRef} from 'react';
import { useMap } from 'esri-loader-hooks';

 export default function Map() {
  const map = {
    basemap: "streets"
  };
  const options = {
    view: {
      center: [15, 65],
      zoom: 4
    }
  };
  const [ref] = useMap(map, options);
  return <div style={{ height: 400 }} ref={ref} />;
}