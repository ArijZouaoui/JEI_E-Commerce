import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
function Slider() {
  return (
    <div className="Slider-container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="Slider-image"
            src="https://images.wallpaperscraft.com/image/hotel_room_bed_furniture_design_interior_109666_1920x1080.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="Slider-image"
            src="https://cdn.hipwallpaper.com/i/91/98/FM2uJ6.jpg"
            alt="second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Slider-image"
            src="https://www.wallpapers4u.org/wp-content/uploads/bedroom_bed_style_interior_39274_1920x1080.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
