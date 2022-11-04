import logo from './logo.svg';
import './App.css';
import Map from './Map';
import PointMap from './PointMap';
import WebMap from './WebMap';
import MapView from './MapView';




function App() {
  return (
    <>
   {/* <Map/> */}
   {/* <WebMap /> */}
   <PointMap latitude={'35.0'} longitude={'105.0'}/>
   <MapView />
   </>
  );
}

export default App;
