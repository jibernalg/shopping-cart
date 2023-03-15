import React, { useEffect, useState } from "react";
import mbpro141 from "../images/mbpro141.jpeg";
import mbpro142 from "../images/mbpro142.jpeg";
import mbpro143 from "../images/mbpro143.jpeg";
import mbpro144 from "../images/mbpro144.jpeg";
import mbpro145 from "../images/mbpro145.jpeg";
import mbpro146 from "../images/mbpro146.jpeg";
import mbpro147 from "../images/mbpro147.jpeg";
import mbpro148 from "../images/mbpro148.jpeg";

function Pro14({addToCart}) {
  const [pro14, setPro14] = useState({
    id: 10,
    name: 'MacBook Pro 14" M2',
    price: 1999,
    image: [mbpro141, mbpro142, mbpro143, mbpro144, mbpro145, mbpro146, mbpro147, mbpro148],
    description:
    `The MacBook Pro 14" is a powerhouse of a laptop, with an even faster processor, larger screen, and up to 64GB of RAM. This laptop is designed for professionals who demand the best performance and the most advanced features, including the Touch Bar, Touch ID, and Thunderbolt 4 ports.`,
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevButtonClick = () => {
    setActiveImageIndex(
      (activeImageIndex - 1 + pro14.image.length) % pro14.image.length
    );
  };

  const handleNextButtonClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % pro14.image.length);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart=()=>{
    addToCart(pro14,quantity)
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
          <img src={pro14.image[activeImageIndex]} alt={pro14.name} />
          <div className="ArrowsContainer">
            <button className="NextArrow" onClick={handleNextButtonClick}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="IphoneInformation">
          <h3 className="IphoneSellName">{pro14.name}</h3>
          <p className="IphoneSellDescription">{pro14.description}</p>
          <p className="IphoneSellPrice">Cost: ${pro14.price}</p>
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
            Total: ${pro14.price * quantity}
          </h4>
          <button onClick={handleAddToCart} className="AddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Pro14;