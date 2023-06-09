import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ItemCard from './ItemCards';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
                <ItemCard imageUrl1="#"
                    imageUrl2="#"
                    imageUrl3="#"
                    imageUrl4="#"
                />     
        </Carousel.Item>
        <Carousel.Item>
                <ItemCard imageUrl1="#"
                    imageUrl2="#"
                    imageUrl3="#"
                    imageUrl4="#"
                />     
        </Carousel.Item>
      
    </Carousel>
  );
}

export default Slider;