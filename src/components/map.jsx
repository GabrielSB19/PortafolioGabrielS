import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

let DefaultIcon = L.icon({
  iconUrl: icon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

const customZoomControl = {
  position: "bottomright", // Puedes ajustar la posición según tus necesidades
  zoomInText: "+", // Texto para el botón de zoom in
  zoomOutText: "-", // Texto para el botón de zoom out
  zoomInTitle: "Zoom in", // Título emergente para el botón de zoom in
  zoomOutTitle: "Zoom out", // Título emergente para el botón de zoom out
  positionTiny: "false", // Deshabilitar los botones de zoom
  display: "none",
};

const Map = () => {
  const position = [3.548050185953776, -76.3150715290598];

  return (
    <MapContainer
      center={position}
      zoom={9}
      maxZoom={9}
      scrollWheelZoom={false}
      className="w-[100%] h-96 mx-auto mb-9"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={DefaultIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
