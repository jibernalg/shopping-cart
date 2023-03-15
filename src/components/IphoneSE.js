import React, { useEffect, useState } from "react";
import SE1 from "../images/SE1.jpeg";
import SE2 from "../images/SE2.jpeg";
import SE3 from "../images/SE3.jpeg";
import SE4 from "../images/SE4.jpeg";

function IphoneSE({addToCart}) {
  const [iphoneSE, setIphoneSE] = useState({
    id: 8,
    name: "iPhone SE",
    price: 429,
    image: [SE2, SE1, SE3, SE4],
    description:
      "Get the power and performance you need in a compact design with the iPhone SE. Featuring an A13 Bionic chip, advanced camera system, and long-lasting battery, this phone is perfect for on-the-go use.",
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevButtonClick = () => {
    setActiveImageIndex(
      (activeImageIndex - 1 + iphoneSE.image.length) % iphoneSE.image.length
    );
  };

  const handleNextButtonClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % iphoneSE.image.length);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart=()=>{
    addToCart(iphoneSE,quantity)
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
          <img src={iphoneSE.image[activeImageIndex]} alt={iphoneSE.name} />
          <div className="ArrowsContainer">
            <button className="NextArrow" onClick={handleNextButtonClick}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="IphoneInformation">
          <h3 className="IphoneSellName">{iphoneSE.name}</h3>
          <p className="IphoneSellDescription">{iphoneSE.description}</p>
          <p className="IphoneSellPrice">Cost: ${iphoneSE.price}</p>
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
            Total: ${iphoneSE.price * quantity}
          </h4>
          <button onClick={handleAddToCart} className="AddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default IphoneSE;
