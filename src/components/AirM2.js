import React, { useEffect, useState } from "react";
import mbairm21 from "../images/mbairm21.jpeg";
import mbairm22 from "../images/mbairm22.jpeg";
import mbairm23 from "../images/mbairm23.jpeg";
import mbairm24 from "../images/mbairm24.jpeg";
import mbairm25 from "../images/mbairm25.jpeg";
import mbairm26 from "../images/mbairm26.jpeg";


function AirM2({addToCart}) {
  const [airM2, setAirM2] = useState({
    id: 2,
    name: "MacBook Air M2",
    price: 1199,
    image: [mbairm21, mbairm22, mbairm23, mbairm24, mbairm25, mbairm26],
    description:
      "The MacBook Air M2 is the next generation of Apple's iconic laptop. With a sleek and lightweight design, this laptop is built for speed and efficiency. The M2 chip promises even faster performance and longer battery life than its predecessor, and the new design is rumored to be even more elegant and minimalist.",
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevButtonClick = () => {
    setActiveImageIndex(
      (activeImageIndex - 1 + airM2.image.length) % airM2.image.length
    );
  };

  const handleNextButtonClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % airM2.image.length);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart=()=>{
    addToCart(airM2,quantity)
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
          <img src={airM2.image[activeImageIndex]} alt={airM2.name} />
          <div className="ArrowsContainer">
            <button className="NextArrow" onClick={handleNextButtonClick}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="IphoneInformation">
          <h3 className="IphoneSellName">{airM2.name}</h3>
          <p className="IphoneSellDescription">{airM2.description}</p>
          <p className="IphoneSellPrice">Cost: ${airM2.price}</p>
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
            Total: ${airM2.price * quantity}
          </h4>
          <button onClick={handleAddToCart} className="AddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default AirM2;