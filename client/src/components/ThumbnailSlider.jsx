import React from 'react';
import styled from 'styled-components';
import ThumbnailItem from './ThumbnailItem.jsx';


const OuterContainer = styled.div`
  max-width: 94vh !important;
  margin-left: auto !important;
  margin-right: auto !important;
  overflow: hidden !important;
  left: 24.5%;
  top: 85%;
`;
const SliderContainer = styled.div`
  background-image: none !important;
  background-color: transparent !important;
  position: absolute !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  z-index: 2 !important;
  text-align: center !important;
  color: rgb(255,255,255) !important;
  overflow: hidden !important;
  border-radius: 0px !important;
  margin-bottom: 24px;
  margin-left: auto !important;
  margin-right: auto !important;
  overflow: hidden !important;
`;

const UnorderedListContainer = styled.div`
  position: relative !important;
  width: 11110px !important;
`;
const UnorderedList = styled.ul`

  position: relative !important;
  list-style-type: none !important;
  left: 0px !important;
  transition: -ms-transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s, transform 0.3s ease-out 0s !important;
  margin: 0px !important;
  padding: 0px !important;
`;
class ThumbnailSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { images } = this.props;
    const imageUrlList = { images }.images;
    return (
      <SliderContainer>
        <OuterContainer>
          <UnorderedListContainer>
            <UnorderedList>
              {imageUrlList.map((url) => { return <ThumbnailItem photo={url} />; })}
            </UnorderedList>
          </UnorderedListContainer>
        </OuterContainer>
      </SliderContainer>
    );
  }
}

export default ThumbnailSlider;
