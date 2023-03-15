import React, { useEffect, useState } from "react";
import mbpro161 from "../images/mbpro161.jpeg";
import mbpro162 from "../images/mbpro162.jpeg";
import mbpro163 from "../images/mbpro163.jpeg";
import mbpro164 from "../images/mbpro164.jpeg";
import mbpro165 from "../images/mbpro165.jpeg";
import mbpro166 from "../images/mbpro166.jpeg";
import mbpro167 from "../images/mbpro167.jpeg";
import mbpro168 from "../images/mbpro168.jpeg";

function Pro16({addToCart}) {
  const [pro16, setPro16] = useState({
    id: 11,
    name: 'MacBook Pro 16" M2',
    price: 2499,
    image: [mbpro161, mbpro162, mbpro163, mbpro164, mbpro165, mbpro166, mbpro167, mbpro168],
    description:
    `If you're looking for the ultimate in performance and power, look no further than the MacBook Pro 16". With a massive 16-inch Retina display, up to 8TB of storage, and a 10-core processor, this laptop is built for the most demanding tasks. Whether you're editing 4K video, developing complex software, or running virtual machines, the MacBook Pro 16" is up to the challenge.`,
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevButtonClick = () => {
    setActiveImageIndex(
      (activeImageIndex - 1 + pro16.image.length) % pro16.image.length
    );
  };

  const handleNextButtonClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % pro16.image.length);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart=()=>{
    addToCart(pro16,quantity)
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
          <img src={pro16.image[activeImageIndex]} alt={pro16.name} />
          <div className="ArrowsContainer">
            <button className="NextArrow" onClick={handleNextButtonClick}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="IphoneInformation">
          <h3 className="IphoneSellName">{pro16.name}</h3>
          <p className="IphoneSellDescription">{pro16.description}</p>
          <p className="IphoneSellPrice">Cost: ${pro16.price}</p>
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
            Total: ${pro16.price * quantity}
          </h4>
          <button onClick={handleAddToCart} className="AddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Pro16;