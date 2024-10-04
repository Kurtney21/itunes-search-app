import { Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * SearchForm Component
 * 
 * A form that allows users to input a search term and select a media type
 * to search for media items. It triggers a search action when the user
 * clicks the search button or presses the Enter key.
 * 
 * @returns {JSX.Element} The rendered SearchForm component.
 */
const SearchForm = ({ searchTerm, setSearchTerm, mediaType, setMediaType, handleSearch }) => {
  /**
   * Handles key down events on the search input field.
   * 
   * @param {KeyboardEvent} event - The keyboard event triggered by user input.
   * 
   * If the Enter key is pressed, it prevents the default form submission
   * and calls the handleSearch function.
   */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default form submission
      handleSearch(); // Trigger the search function
    }
  };

  return (
    <Form>
      <Form.Group as={Row}>
        <Col sm={8}>
          <Form.Control
            type="text"
            placeholder="Search for media"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown} // Listen for key down events
            className='my-2'
          />
        </Col>
        <Col sm={4}>
          <Form.Select
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
            className='my-2'
          >
            <option value="all">All</option>
            <option value="movie">Movie</option>
            <option value="music">Music</option>
            <option value="podcast">Podcast</option>
            <option value="audiobook">Audiobook</option>
            <option value="shortFilm">Short Film</option>
            <option value="tvShow">TV Show</option>
            <option value="software">Software</option>
            <option value="ebook">eBook</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Button variant="primary" onClick={handleSearch} className="mt-3">Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  mediaType: PropTypes.string.isRequired,
  setMediaType: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchForm; // Exporting SearchForm component