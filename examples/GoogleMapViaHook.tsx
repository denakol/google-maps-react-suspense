import React, { useEffect, useRef } from "react";
import { useGoogleMaps } from "google-maps-react-suspense";

const GoogleMap = () => {
  useGoogleMaps({
    apiKey: "Api Key",
  });

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

export default GoogleMap;
