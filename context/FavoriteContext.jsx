"use client";

import { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (user) => {
        setFavorites((prev) => {
            const isAlready = prev.some((u) => u.id === user.id);
            if (isAlready) {
                return prev.filter((u) => u.id !== user.id);
            } else {
                return [...prev, user]};
        });
    };

    const isFavorite = (userId) => favorites.some((u) => u.id === userId);

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};