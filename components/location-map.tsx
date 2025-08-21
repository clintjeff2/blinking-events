"use client";

import { useEffect, useState, useRef } from 'react';
import Map, { Marker, NavigationControl, Popup, MapRef } from 'react-map-gl';
import { MapPin } from 'lucide-react';
import { motion } from '@/lib/motion';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapLocation {
  id: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
  address?: string;
  phone?: string;
  type?: string;
}

interface LocationMapProps {
  locations: MapLocation[];
  initialViewState?: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  height?: string;
  showPopup?: boolean;
  interactive?: boolean;
}

export function LocationMap({ 
  locations, 
  initialViewState = { 
    latitude: 4.1527, // Approximate center of Cameroon
    longitude: 9.2920, 
    zoom: 10 
  },
  height = '500px',
  showPopup = true,
  interactive = true
}: LocationMapProps) {
  // Handle server-side rendering
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const [popupInfo, setPopupInfo] = useState<MapLocation | null>(null);
  const mapRef = useRef<MapRef | null>(null);
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  // If locations array changes, adjust the map view to fit all markers
  useEffect(() => {
    if (locations.length > 1 && mapRef.current) {
      // This is where we could implement bounds adjustment logic
      // to fit all markers in view for larger implementations
    }
  }, [locations]);

  // Handle missing token or server-side rendering
  if (!mapboxToken || !isMounted) {
    return (
      <div className="bg-muted rounded-lg flex items-center justify-center" style={{ height }}>
        <p>{!mapboxToken ? 'Map could not be loaded. Please check your configuration.' : 'Loading map...'}</p>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg border border-border" style={{ height }}>
      <Map
        ref={mapRef}
        mapboxAccessToken={mapboxToken}
        initialViewState={initialViewState}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        attributionControl={false}
        interactive={interactive}
      >
        <NavigationControl position="bottom-right" />
        
        {locations.map((location) => (
          <Marker 
            key={location.id}
            latitude={location.lat} 
            longitude={location.lng}
            anchor="bottom"
            onClick={(e: { originalEvent: MouseEvent }) => {
              // Prevent event from bubbling to the map
              e.originalEvent.stopPropagation();
              setPopupInfo(showPopup ? location : null);
            }}
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="relative">
                <MapPin 
                  className="h-8 w-8 text-primary drop-shadow-md"
                  strokeWidth={3}
                />
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] w-3 h-3 
                    bg-white rounded-full border-2 border-primary"
                ></div>
              </div>
            </motion.div>
          </Marker>
        ))}

        {popupInfo && showPopup && (
          <Popup
            latitude={popupInfo.lat}
            longitude={popupInfo.lng}
            closeOnClick={false}
            anchor="bottom"
            onClose={() => setPopupInfo(null)}
            className="z-10 rounded-lg overflow-hidden"
            closeButton={true}
            offset={[0, -30]}
          >
            <div className="p-2 max-w-[250px]">
              <h3 className="font-medium text-sm">{popupInfo.name}</h3>
              <p className="text-xs text-muted-foreground">{popupInfo.description}</p>
              {popupInfo.address && (
                <p className="text-xs mt-1 text-muted-foreground">{popupInfo.address}</p>
              )}
              {popupInfo.phone && (
                <p className="text-xs mt-1 text-primary font-medium">
                  <a href={`tel:${popupInfo.phone}`}>{popupInfo.phone}</a>
                </p>
              )}
            </div>
          </Popup>
        )}
      </Map>
      
      {/* Attribution overlay */}
      <div className="absolute bottom-1 left-1 text-[8px] text-gray-600 bg-white/70 px-1 rounded">
        © <a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noopener noreferrer">Mapbox</a>
      </div>
    </div>
  );
}
