import React, { createContext, useState, useEffect } from "react";

const DestinationContext = createContext();

function DestinationProvider(props) {

    const [selectedDestinations, setSelectedDestinations] = useState(
        JSON.parse(localStorage.getItem("molinDestinations")) ||
        (
            JSON.parse(localStorage.getItem("molinDestination"))
                ? [JSON.parse(localStorage.getItem("molinDestination"))]
                : []
        )
    );

    useEffect(() => {
        localStorage.setItem(
            "molinDestinations",
            JSON.stringify(selectedDestinations)
        );
    }, [selectedDestinations]);

    function selectDestination(place) {

        const existingDestination = selectedDestinations.find(function(item) {
            return item.id === place.id;
        });

        if (!existingDestination) {
            setSelectedDestinations([...selectedDestinations, place]);
        }

    }

    function unselectDestination(destinationId) {

        setSelectedDestinations(selectedDestinations.filter(function(item) {
            return item.id !== destinationId;
        }));

    }

    return (
        <DestinationContext.Provider value={{
            selectedDestinations: selectedDestinations,
            selectedDestination: selectedDestinations.length > 0
                ? selectedDestinations[selectedDestinations.length - 1]
                : null,
            selectDestination: selectDestination,
            unselectDestination: unselectDestination
        }}>
            {props.children}
        </DestinationContext.Provider>
    );
}

export { DestinationContext, DestinationProvider };
