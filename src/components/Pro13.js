import React, { useEffect, useState } from "react";
import mbpro131 from "../images/mbpro131.jpeg";
import mbpro132 from "../images/mbpro132.jpeg";
import mbpro133 from "../images/mbpro133.jpeg";
import mbpro134 from "../images/mbpro134.jpeg";
import mbpro135 from "../images/mbpro135.jpeg";
import mbpro136 from "../images/mbpro136.jpeg";

function Pro13({addToCart}) {
  const [pro13, setPro13] = useState({
    id: 9,
    name: 'MacBook Pro 13" M2',
    price: 1299,
    image: [mbpro131, mbpro132, mbpro133, mbpro134, mbpro135, mbpro136],
    description:
    `Take your productivity to the next level with the MacBook Pro 13". This laptop features a powerful 8-core processor, stunning Retina display, and Touch Bar interface for quick and easy access to your favorite apps and tools. Whether you're a designer, programmer, or content creator, the MacBook Pro 13" is the perfect tool for getting things done.`,
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevButtonClick = () => {
    setActiveImageIndex(
      (activeImageIndex - 1 + pro13.image.length) % pro13.image.length
    );
  };

  const handleNextButtonClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % pro13.image.length);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart=()=>{
    addToCart(pro13,quantity)
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
          <img src={pro13.image[activeImageIndex]} alt={pro13.name} />
          <div className="ArrowsContainer">
            <button className="NextArrow" onClick={handleNextButtonClick}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="IphoneInformation">
          <h3 className="IphoneSellName">{pro13.name}</h3>
          <p className="IphoneSellDescription">{pro13.description}</p>
          <p className="IphoneSellPrice">Cost: ${pro13.price}</p>
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
            Total: ${pro13.price * quantity}
          </h4>
          <button onClick={handleAddToCart} className="AddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Pro13;