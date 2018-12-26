import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  max-width: 100%;
  user-drag: none;
  /* cursor: pointer; */
`;

// eslint-disable-next-line no-unused-vars
const GiphyItem = ({ item }) => {
  // Getting parammeters from the item
  const {
    id,
    title,
    images: { preview_gif: image },
  } = item;

  const {
    url,
    height,
    width,
  } = image;

  // The img identifier
  const imageId = `image-${id}`;

  return (
    <Container textAlign="center">
      {/* compact */}
      <Image
        id={imageId}
        className="giphy-item-image"
        src={url}
        alt={title}
        title={title}
        height={200}
        width={width * (200 / height)}
      />
    </Container>
  );
};

GiphyItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    preview_gif: PropTypes.any,
  }),
};

GiphyItem.defaultProps = {
  item: null,
};

export default GiphyItem;