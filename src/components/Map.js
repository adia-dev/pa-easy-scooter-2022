import React, { useMemo, useState } from 'react';

import { Circle, DirectionsRenderer, GoogleMap, Marker, MarkerClusterer } from "@react-google-maps/api";
import { useCallback } from 'react';
import { closeOptions } from '../data/googleMapsOptions';

// 6 Rue Gerbe

const Map = ({ mapRef, target, isLoaded, centerCoords, customOptions }) => {

    const google = window.google;

    const center = useMemo(() => (centerCoords ?? { lat: 45.7641447, lng: 4.83543 }), [])
    const options = useMemo(() => customOptions ?? { mapId: "3bb35e645c690444", disableDefaultUI: false, clickableIcons: false }, [])
    const scooters = useMemo(() => generateScooters(target), [target])
    const [directions, setDirections] = useState(null)

    const onLoad = useCallback(
        (map) => {
            mapRef.current = map;
        },
        [],
    )


    const handleClickOnMaker = (coords) => {
        if (!coords) return;

        const googleMapsDirectionService = new google.maps.DirectionsService();
        googleMapsDirectionService.route(
            {
                origin: target,
                destination: coords,
                waypoints: scooters.map((scooter) => ({ location: scooter, stopover: true })),
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.BICYCLING
            },
            (result, status) => {
                if (status === "OK" && result)
                    setDirections(result);
            }
        )
    }


    if (!isLoaded) return <div>Loading...</div>

    return (
        <div className='w-full h-full bg-red-200'>
            <GoogleMap onLoad={onLoad} zoom={11} center={center} mapContainerClassName="w-full h-full" options={options}>
                {target &&
                    <>

                        {directions && <DirectionsRenderer directions={directions} />}

                        <Marker position={target} />
                        <Circle center={target} radius={15000} options={closeOptions} />
                        <MarkerClusterer
                            averageCenter={true}
                            enableRetinaIcons={true}
                            gridSize={250}>
                            {(clusterer) =>
                                scooters.length > 0 && scooters.map((scooter, i) => <Marker onClick={() => handleClickOnMaker(scooter)} key={i} position={scooter} clusterer={clusterer} />)
                            }
                        </MarkerClusterer>
                    </>}
            </GoogleMap>
        </div>
    )


}

export default Map

const generateScooters = (position) => {
    if (position == null) return;

    const _scooters = [];
    for (let i = 0; i < 10; i++) {
        const directionX = Math.random() < 0.5 ? -4 : 4;
        const directionY = Math.random() < 0.5 ? -5 : 5;
        _scooters.push({
            lat: position.lat + Math.random() / directionX,
            lng: position.lng + Math.random() / directionY,
        });
    }
    console.log(_scooters)
    return _scooters;
};