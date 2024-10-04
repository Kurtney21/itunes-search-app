import { useState } from 'react';

/**
 * useFavorites Custom Hook
 * 
 * A custom hook for managing a list of favorite media items.
 * Provides functions to add and remove items from the favorites list.
 * 
 * @returns {Object} An object containing the favorites list and functions
 *                   to add and remove favorites.
 * @returns {Array} favorites - The current list of favorite items.
 * @returns {function} addToFavorites - Function to add an item to the favorites.
 * @returns {function} removeFromFavorites - Function to remove an item from the favorites.
 */
const useFavorites = () => {
  const [favorites, setFavorites] = useState([]); // State variable to hold favorites

  /**
   * Adds an item to the favorites list.
   * 
   * @param {Object} item - The media item to be added to favorites.
   */
  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]); // Update favorites state
  };

  /**
   * Removes an item from the favorites list based on its ID.
   * 
   * @param {number} id - The ID of the item to be removed from favorites.
   */
  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== id)); // Update favorites state
  };

  return { favorites, addToFavorites, removeFromFavorites }; // Return favorites and functions
};

export default useFavorites; // Exporting useFavorites hook
