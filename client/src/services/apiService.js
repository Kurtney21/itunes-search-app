// BASE URL for the API
const BASE_URL = 'http://localhost:5000';

/**
 * Fetches media data from the API based on the search term and media type.
 *
 * This function constructs a GET request to the search endpoint of the API
 * using the provided term and media type as query parameters. It handles
 * network errors and parses the response data into JSON format.
 *
 * @param {string} term - The search term for the media query.
 * @param {string} mediaType - The type of media to search for (e.g., music, movie).
 *
 * @returns {Promise<Object>} A promise that resolves to the JSON response data.
 *
 * @throws {Error} Throws an error if the network response is not ok or if an
 *                 error occurs during the fetch operation.
 */
export const fetchMediaData = async (term, mediaType) => {
  try {
    // Construct the full URL for the GET request
    const response = await fetch(`${BASE_URL}/search?term=${term}&media=${mediaType}`);
    
    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok'); // Throw an error if response is not ok
    }
    
    // Parse the response data as JSON
    const data = await response.json();
    return data; // Return the parsed data
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching media data:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};
