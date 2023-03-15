import React, { useEffect, useState } from "react";
import I141 from "../images/I141.jpeg";
import I142 from "../images/I142.jpeg";
import I14reg1 from "../images/I14reg1.jpeg";
import I14reg2 from "../images/I14reg2.jpeg";
import I14reg3 from "../images/I14reg3.jpeg";
import I14reg4 from "../images/I14reg4.jpeg";

function Iphone14({addToCart}) {
  const [iphone14, setIphone14] = useState({
    id: 6,
    name: "iPhone 14",
    price: 799,
    image: [I142, I141, I14reg1, I14reg2, I14reg3, I14reg4],
    description:
      "Be the first to experience the cutting-edge technology of the iPhone 14. Featuring a sleek design, 5G connectivity, A16 Bionic chip, and an advanced camera system, this phone will take your mobile experience to the next level.",
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevButtonClick = () => {
    setActiveImageIndex(
      (activeImageIndex - 1 + iphone14.image.length) % iphone14.image.length
    );
  };

  const handleNextButtonClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % iphone14.image.length);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart=()=>{
    addToCart(iphone14,quantity)
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
          <img src={iphone14.image[activeImageIndex]} alt={iphone14.name} />
          <div className="ArrowsContainer">
            <button className="NextArrow" onClick={handleNextButtonClick}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="IphoneInformation">
          <h3 className="IphoneSellName">{iphone14.name}</h3>
          <p className="IphoneSellDescription">{iphone14.description}</p>
          <p className="IphoneSellPrice">Cost: ${iphone14.price}</p>
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
            Total: ${iphone14.price * quantity}
          </h4>
          <button onClick={handleAddToCart} className="AddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Iphone14;
