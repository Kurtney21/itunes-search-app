// src/components/MediaCard.js

import PropTypes from 'prop-types'; // Importing PropTypes for prop validation
import { Card, Button } from 'react-bootstrap'; // Importing Bootstrap components for styling
import styled from 'styled-components'; // Importing styled-components for custom styling

// Styled-components for the MediaCard
const StyledCard = styled(Card)`
  height: 450px; /* Set a fixed height for all cards */
  display: flex; /* Use flexbox for alignment */
  flex-direction: column; /* Stack children vertically */
`;

const MediaImage = styled(Card.Img)`
  height: 200px; /* Fixed height for images */
  object-fit: contain; /* Maintain aspect ratio without cropping */
`;

const CardBody = styled(Card.Body)`
  display: flex; /* Flexbox for vertical alignment of contents */
  flex-direction: column; /* Stack children vertically */
  flex-grow: 1; /* Allow body to grow */
`;

const Title = styled(Card.Title)`
  flex-grow: 1; /* Title grows to take available space */
`;

const Text = styled(Card.Text)`
  flex-grow: 1; /* Text grows to take available space */
`;

/**
 * MediaCard Component
 * 
 * A card component that displays media information, including an album cover,
 * album name, and artist name. It also includes a button to add the media item
 * to the user's favorites.
 * 
 * @param {Object} item - The media item object containing album details.
 * @param {string} item.albumCover - The URL of the album cover image.
 * @param {string} item.albumName - The name of the album.
 * @param {string} item.artistName - The name of the artist.
 * @param {function} handleAddToFavorites - Function to handle adding the item to favorites.
 * 
 * @returns {JSX.Element} The rendered MediaCard component.
 */
const MediaCard = ({ item, handleAddToFavorites }) => {
  return (
    <StyledCard>
      <MediaImage 
        variant="top" 
        src={item.albumCover} 
      />
      <CardBody>
        <Title>{item.albumName}</Title>
        <Text>{item.artistName}</Text>
        <Button 
          variant="success" 
          onClick={() => handleAddToFavorites(item)} // Add item to favorites
        >
          Add to Favorites
        </Button>
      </CardBody>
    </StyledCard>
  );
};

// PropTypes for type-checking the component's props
MediaCard.propTypes = {
  item: PropTypes.shape({
    albumCover: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
  }).isRequired,
  handleAddToFavorites: PropTypes.func.isRequired, // Function to add item to favorites
};

export default MediaCard; // Exporting MediaCard component
