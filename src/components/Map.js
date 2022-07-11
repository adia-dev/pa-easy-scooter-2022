import React, { useMemo, useState } from 'react';

import { Circle, DirectionsRenderer, GoogleMap, Marker, MarkerClusterer } from "@react-google-maps/api";
import axios from 'axios';
import { useCallback } from 'react';
import { closeOptions } from '../data/googleMapsOptions';

// 6 Rue Gerbe

const Map = ({ mapRef, target, isLoaded, centerCoords, customOptions, pickupPoints, setPickupPoints }) => {

    const google = window.google;

    const center = useMemo(() => (centerCoords ?? { lat: 45.7641447, lng: 4.83543 }), [])
    const options = useMemo(() => customOptions ?? { mapId: "3bb35e645c690444", disableDefaultUI: false, clickableIcons: false }, [])
    const scooters = useMemo(() => generateScooters(target), [target])
    const [directions, setDirections] = useState(null)
    const [currentCoords, setCurrentCoords] = useState(null)



    const onLoad = useCallback(
        (map) => {
            mapRef.current = map;
            const fetchPickupPoints = async () => {
                const data = await axios.get("http://localhost:5500/api/v2/pickups");
                console.log(data.data);

                if (navigator && navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(pos => {
                        const coords = pos.coords;
                        console.log(coords)
                        setCurrentCoords({ lat: coords.latitude, lng: coords.longitude })
                    });
                }
                setPickupPoints(data.data)
            }

            fetchPickupPoints();
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

    const handleClickOnPickupPoint = (coords) => {
        if (!coords) return;

        console.log(coords);
        console.log(center);

        const googleMapsDirectionService = new google.maps.DirectionsService();
        googleMapsDirectionService.route(
            {
                // origin: currentCoords ?? center,
                origin: center,
                destination: coords,
                travelMode: google.maps.TravelMode.BICYCLING
            },
            (result, status) => {
                console.log(result);
                console.log(status);
                if (status === "OK" && result)
                    setDirections(result);
            }
        )
    }


    if (!isLoaded) return <div>Loading...</div>

    return (
        <div className='w-full h-full bg-red-200'>
            <GoogleMap onLoad={onLoad} zoom={11} center={center} mapContainerClassName="w-full h-full" options={options}>

                {directions && <DirectionsRenderer directions={directions} />}

                {target &&
                    <>


                        <Marker position={target} />
                        <Circle center={target} radius={15000} options={closeOptions} />
                        <MarkerClusterer
                            averageCenter={true}
                            enableRetinaIcons={true}
                            gridSize={250}>
                            {(clusterer) =>
                                scooters.length > 0 && scooters.map((scooter, i) => <Marker key={i} onClick={() => handleClickOnMaker(scooter)} position={scooter} clusterer={clusterer} />)
                            }
                        </MarkerClusterer>

                    </>}
                {
                    pickupPoints.length > 0 &&
                    <MarkerClusterer
                        averageCenter={true}
                        enableRetinaIcons={true}
                        gridSize={250}>
                        {(clusterer) => {
                            console.log("pickup points");
                            console.log(pickupPoints);
                            return pickupPoints.length > 0 && pickupPoints.map((point, i) => <Marker key={i} onClick={() => handleClickOnPickupPoint({ lat: point.lat, lng: point.lng })} position={{ lat: point.lat, lng: point.lng }} clusterer={clusterer} />)
                        }
                        }
                    </MarkerClusterer>
                }
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
    return _scooters;
};
