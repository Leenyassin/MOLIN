import React, { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

function FavoritesProvider(props) {

    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("molinFavorites")) || []
    );

    useEffect(() => {
        localStorage.setItem("molinFavorites", JSON.stringify(favorites));
    }, [favorites]);

    function toggleFavorite(place) {

        const existingPlace = favorites.find(function(item) {
            return (
                item.id === place.id &&
                (
                    item.destinationId === place.destinationId ||
                    (!item.destinationId && item.country === place.country)
                )
            );
        });

        if (existingPlace) {

            setFavorites(favorites.filter(function(item) {
                return !(
                    item.id === place.id &&
                    (
                        item.destinationId === place.destinationId ||
                        (!item.destinationId && item.country === place.country)
                    )
                );
            }));

        } else {

            setFavorites([...favorites, place]);

        }
    }

    function removeFavorite(id, destinationId, country) {

        setFavorites(favorites.filter(function(item) {
            return !(
                item.id === id &&
                (
                    item.destinationId === destinationId ||
                    (!item.destinationId && item.country === country)
                )
            );
        }));

    }

    return (
        <FavoritesContext.Provider value={{
            favorites: favorites,
            toggleFavorite: toggleFavorite,
            removeFavorite: removeFavorite
        }}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export { FavoritesContext, FavoritesProvider };
