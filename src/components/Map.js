import React, { useMemo, useState } from 'react';

import { Circle, DirectionsRenderer, GoogleMap, Marker, MarkerClusterer } from "@react-google-maps/api";
import axios from 'axios';
import { useCallback } from 'react';
import { closeOptions } from '../data/googleMapsOptions';

// 6 Rue Gerbe

const Map = ({ mapRef, target, isLoaded, centerCoords, customOptions, pickupPoints, setPickupPoints, scooters, setScooters, params }) => {

    const google = window.google;

    const center = useMemo(() => (centerCoords ?? { lat: 45.7641447, lng: 4.83543 }), [])
    const options = useMemo(() => customOptions ?? { mapId: "3bb35e645c690444", disableDefaultUI: false, clickableIcons: false }, [])
    const [directions, setDirections] = useState(null)
    const [currentCoords, setCurrentCoords] = useState(null)



    const onLoad = useCallback(
        (map) => {

            console.log(params);

            mapRef.current = map;
            const fetchPickupPoints = async () => {
                const data = await axios.get(process.env.REACT_APP_EASY_SCOOTER_API_BASE_URL + "pickups");
                console.log(data.data);


                setPickupPoints(data.data)
            }

            const fetchScooters = async () => {
                const data = await axios.get(process.env.REACT_APP_EASY_SCOOTER_API_BASE_URL + "scooters/rides");
                setScooters(data.data)
                console.log('scooters')
                console.log(data.data);
            }

            !!setPickupPoints && fetchPickupPoints();
            !!setScooters && fetchScooters();

            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    console.log(coords)
                    setCurrentCoords({ lat: coords.latitude, lng: coords.longitude })
                });
            }
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
                travelMode: google.maps.TravelMode.DRIVING
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

                {params?.showDirections && directions && <DirectionsRenderer directions={directions} />}

                {target &&
                    <>
                        <Marker position={target} />
                        <Circle center={target} radius={15000} options={closeOptions} />

                    </>}
                {
                    params?.showPickupPoints && pickupPoints.length > 0 &&
                    <MarkerClusterer
                        averageCenter={true}
                        enableRetinaIcons={true}
                        gridSize={250}>
                        {(clusterer) => {
                            console.log("pickup points");
                            console.log(pickupPoints);
                            return pickupPoints.length > 0 && pickupPoints.map((point, i) => <Marker key={i} icon={{ url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png" }} onClick={() => handleClickOnPickupPoint({ lat: point.lat, lng: point.lng })} position={{ lat: point.lat, lng: point.lng }} clusterer={clusterer} />)
                        }
                        }
                    </MarkerClusterer>
                }

                {
                    params?.showScooters && scooters.length > 0 &&
                    <MarkerClusterer
                        averageCenter={true}
                        enableRetinaIcons={true}
                        gridSize={250}>
                        {(clusterer) => {
                            console.log("scooters rides");
                            console.log(scooters);
                            return scooters.length > 0 && scooters.map((scooter, i) => <Marker key={i} icon={{ url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" }} onClick={() => handleClickOnPickupPoint({ lat: scooter.lat, lng: scooter.lng })} position={{ lat: scooter.lat, lng: scooter.lng }} clusterer={clusterer} />)
                        }
                        }
                    </MarkerClusterer>
                }
            </GoogleMap>
        </div>
    )


}

export default Map

