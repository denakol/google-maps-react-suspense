import React, { useEffect, useRef } from "react";
import { GoogleMapsWrapper } from "google-maps-react-suspense";

const GoogleMap = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      new google.maps.Map(ref.current, {
        center: { lat: 39.571625, lng: 2.650544 },
        zoom: 5,
      });
    }
  });

  return <div ref={ref} id="map" style={{ height: "300px", width: "300px" }} />;
};

const AppWithGoogleMap = () => {
  return (
    <GoogleMapsWrapper apiKey="yourKey">
      <GoogleMap />
    </GoogleMapsWrapper>
  );
};

export default AppWithGoogleMap;
