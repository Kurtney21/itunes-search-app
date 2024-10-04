import PropTypes from 'prop-types'; // Importing PropTypes for type-checking
import { Row, Col, Button } from 'react-bootstrap'; // Importing Bootstrap components
import styled from 'styled-components'; // Importing styled-components for custom styling
import { Card } from 'react-bootstrap'; // Importing Card from Bootstrap

// Styled-component for the FavoriteCard
const StyledCard = styled(Card)`
  height: 450px; /* Set a fixed height for all cards */
  display: flex; /* Use flexbox for alignment */
  flex-direction: column; /* Stack children vertically */
`;

// Styled-component for the image in the card
const FavoriteImage = styled(Card.Img)`
  height: 200px; /* Fixed height for images */
  object-fit: contain; /* Maintain aspect ratio without cropping */
`;

// Styled-component for the card body
const CardBody = styled(Card.Body)`
  display: flex; /* Flexbox for vertical alignment of contents */
  flex-direction: column; /* Stack children vertically */
  flex-grow: 1; /* Allow body to grow */
`;

// Styled-component for the title in the card
const Title = styled(Card.Title)`
  flex-grow: 1; /* Title grows to take available space */
`;

// Styled-component for the text in the card
const Text = styled(Card.Text)`
  flex-grow: 1; /* Text grows to take available space */
`;

const Favorites = ({ favorites, handleRemoveFromFavorites }) => {
  return (
    <>
      <h2 className="mt-5">Favorites</h2> {/* Section header for favorites */}
      <Row>
        {/* Map through favorites array to render a card for each favorite item */}
        {favorites.map((item) => (
          <Col key={item.id} sm={4} className="mb-4"> {/* Column for responsive layout */}
            <StyledCard>
              <FavoriteImage variant="top" src={item.albumCover} /> {/* Display the album cover */}
              <CardBody>
                <Title>{item.albumName}</Title> {/* Display the album name */}
                <Text>{item.artistName}</Text> {/* Display the artist name */}
                {/* Button to remove item from favorites */}
                <Button variant="danger" onClick={() => handleRemoveFromFavorites(item.id)}>
                  Remove
                </Button>
              </CardBody>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </>
  );
};

// PropTypes for type-checking the component's props
Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      albumCover: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
    })
  ).isRequired, // Favorites array must be provided
  handleRemoveFromFavorites: PropTypes.func.isRequired, // Function to remove item from favorites
};

export default Favorites; // Exporting Favorites component
