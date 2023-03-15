import React, { useState } from "react";
import I121 from "../images/I121.jpeg";
import I122 from "../images/I122.jpeg";
import I123 from "../images/I123.jpeg";
import I124 from "../images/I124.jpeg";

function Iphone12({addToCart}) {
  const [iphone12, setIphone12] = useState({
    id: 4,
    name: "iPhone 12",
    price: 599,
    image: [I122, I121, I123, I124],
    description:
      "Experience the future of iPhone technology with the iPhone 12. Featuring 5G connectivity, A14 Bionic chip, Ceramic Shield front cover, and a stunning Super Retina XDR display, this phone is built to perform.",
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevButtonClick = () => {
    setActiveImageIndex(
      (activeImageIndex - 1 + iphone12.image.length) % iphone12.image.length
    );
  };

  const handleNextButtonClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % iphone12.image.length);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    addToCart(iphone12, quantity);
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
          <img src={iphone12.image[activeImageIndex]} alt={iphone12.name} />
          <div className="ArrowsContainer">
            <button className="NextArrow" onClick={handleNextButtonClick}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="IphoneInformation">
          <h3 className="IphoneSellName">{iphone12.name}</h3>
          <p className="IphoneSellDescription">{iphone12.description}</p>
          <p className="IphoneSellPrice">Cost: ${iphone12.price}</p>
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
            Total: ${iphone12.price * quantity}
          </h4>

          <button onClick={handleAddToCart} className="AddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Iphone12;
