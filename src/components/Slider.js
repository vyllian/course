import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ItemCard from './ItemCard';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
            <div className='carousel-item'>
                <ItemCard imageUrl="#"/>
                <ItemCard imageUrl="#"/>
                <ItemCard imageUrl="#"/>
                <ItemCard imageUrl="#"/>
            </div>
     
        </Carousel.Item>
      
    </Carousel>
  );
}

export default Slider;