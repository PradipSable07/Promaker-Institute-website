'use client'
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }: { address: string }) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      throw new Error("Google Maps API key is not defined.");
    }

    const loader = new Loader({
      apiKey,
      version: "weekly",
    });

    loader.load().then(() => {
      if (!mapRef.current) return;

      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const map = new google.maps.Map(mapRef.current as HTMLElement, {
            center: results[0].geometry.location,
            zoom: 8,
          });

          new google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
        } else {
          console.error(`Geocode was not successful: ${status}`);
        }
      });
    });
  }, [address]);

  return <div className="h-56 w-full"  ref={mapRef} />;
}

export default Map;
