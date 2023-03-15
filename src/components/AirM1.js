import React, { useEffect, useState } from "react";
import mbairm11 from "../images/mbairm11.jpeg";
import mbairm12 from "../images/mbairm12.jpeg";
import mbairm13 from "../images/mbairm13.jpeg";
import mbairm14 from "../images/mbairm14.jpeg";

function AirM1({addToCart}) {
  const [airM1, setAirM1] = useState({
    id: 1,
    name: "MacBook Air M1",
    price: 999,
    image: [mbairm13, mbairm11, mbairm12, mbairm14],
    description:
      "Experience the future of laptop computing with the MacBook Air M1. Powered by Apple's revolutionary M1 chip, this laptop delivers blazing-fast performance and exceptional battery life. With a stunning Retina display, Magic Keyboard, and Touch ID, the MacBook Air M1 is designed for productivity and creativity on the go.",
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevButtonClick = () => {
    setActiveImageIndex(
      (activeImageIndex - 1 + airM1.image.length) % airM1.image.length
    );
  };

  const handleNextButtonClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % airM1.image.length);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart=()=>{
    addToCart(airM1,quantity)
  };

  return (
    <div className="Iphone">
      <div className="IphoneSell">
        <div className="IphoneCarousel">
          <div className="ArrowsContainer">
            <button className="PrevArrow" onClick={handlePrevButtonClick}>
              &#10094;
            </button>
          </div>
          <img src={airM1.image[activeImageIndex]} alt={airM1.name} />
          <div className="ArrowsContainer">
            <button className="NextArrow" onClick={handleNextButtonClick}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="IphoneInformation">
          <h3 className="IphoneSellName">{airM1.name}</h3>
          <p className="IphoneSellDescription">{airM1.description}</p>
          <p className="IphoneSellPrice">Cost: ${airM1.price}</p>
          <div className="QuantityContainer">
            <label htmlFor="IphoneSellQuantity">Qty:</label>
            <input
              type="number"
              id="quantity"
              name="IphoneSellQuantity"
              min="1"
              max="10"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>

          <h4 className="IphoneSellTotal">
            Total: ${airM1.price * quantity}
          </h4>
          <button onClick={handleAddToCart} className="AddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default AirM1;