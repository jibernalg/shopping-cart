import React, { useEffect, useState } from "react";
import I131 from "../images/I131.jpeg";
import I132 from "../images/I132.jpeg";
import I13reg1 from "../images/I13reg1.jpeg";
import I13reg2 from "../images/I13reg2.jpeg";
import I13reg3 from "../images/I13reg3.jpeg";
import I13reg4 from "../images/I13reg4.jpeg";

function Iphone13({addToCart}) {
  const [iphone13, setIphone13] = useState({
    id: 5,
    name: "iPhone 13",
    price: 599,
    image: [I132, I131, I13reg1, I13reg2, I13reg3, I13reg4],
    description:
      "Upgrade your mobile experience with the iPhone 13. Boasting a 6.1-inch Super Retina XDR display, A15 Bionic chip, Ceramic Shield front cover, and advanced camera system, this phone is perfect for streaming, gaming, and capturing every moment.",
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevButtonClick = () => {
    setActiveImageIndex(
      (activeImageIndex - 1 + iphone13.image.length) % iphone13.image.length
    );
  };

  const handleNextButtonClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % iphone13.image.length);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart=()=>{
    addToCart(iphone13,quantity)
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
          <img src={iphone13.image[activeImageIndex]} alt={iphone13.name} />
          <div className="ArrowsContainer">
            <button className="NextArrow" onClick={handleNextButtonClick}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="IphoneInformation">
          <h3 className="IphoneSellName">{iphone13.name}</h3>
          <p className="IphoneSellDescription">{iphone13.description}</p>
          <p className="IphoneSellPrice">Cost: ${iphone13.price}</p>
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
            Total: ${iphone13.price * quantity}
          </h4>
          <button onClick={handleAddToCart} className="AddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Iphone13;
