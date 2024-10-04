// src/App.js

import React, { useState } from 'react'; // Importing React and useState hook
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap'; // Importing Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import SearchForm from './components/SearchForm'; // Importing SearchForm component
import MediaCard from './components/MediaCard'; // Importing MediaCard component
import Favorites from './components/Favorites'; // Importing Favorites component
import { fetchMediaData } from './services/apiService'; // Importing API service for fetching media data
import useFavorites from './hooks/useFavorites'; // Importing custom hook for managing favorites

/**
 * App Component
 * 
 * The main application component that handles user interactions,
 * manages state for search functionality, and displays search results
 * as well as favorites. It integrates components for searching media
 * and displaying media cards.
 * 
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  // State variables for search term, media type, results, favorites, loading status, and error handling
  const [searchTerm, setSearchTerm] = useState(''); // Search term entered by the user
  const [mediaType, setMediaType] = useState('all'); // Selected media type for search
  const [results, setResults] = useState([]); // Search results fetched from the API
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites(); // Using custom hook for favorites management
  const [loading, setLoading] = useState(false); // Loading state for indicating API call
  const [error, setError] = useState(null); // Error state for handling API call errors

  /**
   * Function to handle the search action.
   * 
   * It fetches media data based on the search term and media type.
   * Sets loading state while fetching and handles errors if any occur.
   */
  const handleSearch = async () => {
    setResults([]); // Clear previous results before a new search

    // Check if the search term is empty
    if (!searchTerm) {
      return; // Exit if the search term is empty
    }

    setLoading(true); // Set loading to true while fetching data
    setError(null); // Reset error state before making the API call
    try {
      // Fetch media data from the API based on user input
      const data = await fetchMediaData(searchTerm, mediaType);
      
      // Remove duplicates by converting to a Set based on item.id
      const uniqueResults = Array.from(new Set(data.map(item => item.id)))
        .map(id => data.find(item => item.id === id))
        .filter(item => item && item.id); // Filter out any undefined items

      setResults(uniqueResults); // Set results state with unique data
    } catch (error) {
      setError('Failed to fetch media data.'); // Set error message if API call fails
    } finally {
      setLoading(false); // Set loading to false once API call is complete
    }
  };

  return (
    <Container>
      <h1 className="text-center my-4">iTunes Media Search</h1>
      {/* Render SearchForm component for user input */}
      <SearchForm 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        mediaType={mediaType}
        setMediaType={setMediaType}
        handleSearch={handleSearch}
      />

      {/* Show loading spinner while fetching data */}
      {loading && <Spinner animation="border" className="d-block mx-auto my-4" />}
      {/* Show error alert if there's an error during API call */}
      {error && <Alert variant="danger">{error}</Alert>}

      <Row className="mt-4">
        {/* Map through unique results to render MediaCard for each item */}
        {results.map((item) => {
          if (!item) return null; // Check if item is defined
          return (
            <Col key={String(item.id)} sm={4} className="mb-4"> {/* Ensure item.id is a string */}
              <MediaCard item={item} handleAddToFavorites={addToFavorites} />
            </Col>
          );
        })}
      </Row>

      {/* Render Favorites component to display favorite items */}
      <Favorites favorites={favorites} handleRemoveFromFavorites={removeFromFavorites} />
    </Container>
  );
}

export default App; // Exporting App component
