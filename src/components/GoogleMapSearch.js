import {
    Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import React from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";


const GoogleMapSearch = ({ setTarget }) => {

    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();

    const handleSelect = async (option) => {
        setValue(option, false);
        clearSuggestions();

        const results = await getGeocode({ address: option })
        const { lat, lng } = await getLatLng(results[0]);
        console.log(lat, lng)
        setTarget({ lat, lng })
    }

    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={!ready}
                className="w-full rounded-md bg-gray-100 border-transparent p-2"
                placeholder="Search a location" />
            <ComboboxPopover className="bg-white border shadow">
                <ComboboxList>
                    {status === "OK" && data.map(({ place_id, description }) => <ComboboxOption className="p-2 hover:bg-gray-50 cursor-pointer transition-all duration-150 ease-in-out" key={place_id} value={description} />)}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}

export default GoogleMapSearch