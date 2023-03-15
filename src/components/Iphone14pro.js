import React, { useEffect, useState } from "react";
import I14pro1 from "../images/I14pro1.jpeg";
import I14pro2 from "../images/I14pro2.jpeg";
import I14proreg1 from "../images/I14proreg1.jpeg";
import I14proreg2 from "../images/I14proreg2.jpeg";
import I14proreg3 from "../images/I14proreg3.jpeg";
import I14proreg4 from "../images/I14proreg4.jpeg";

function Iphone14pro({addToCart}) {
  const [iphone14pro, setIphone14pro] = useState({
    id: 7,
    name: "iPhone 14 Pro",
    price: 999,
    image: [I14pro2, I14pro1, I14proreg1, I14proreg2, I14proreg3, I14proreg4],
    description:
      "Get the ultimate in iPhone performance with the iPhone 14 Pro. Featuring a ProMotion Super Retina XDR display, A16 Bionic chip, Ceramic Shield front cover, and an advanced camera system with ProRAW, this phone is perfect for professionals and power users alike.",
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevButtonClick = () => {
    setActiveImageIndex(
      (activeImageIndex - 1 + iphone14pro.image.length) % iphone14pro.image.length
    );
  };

  const handleNextButtonClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % iphone14pro.image.length);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart=()=>{
    addToCart(iphone14pro,quantity)
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
          <img src={iphone14pro.image[activeImageIndex]} alt={iphone14pro.name} />
          <div className="ArrowsContainer">
            <button className="NextArrow" onClick={handleNextButtonClick}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="IphoneInformation">
          <h3 className="IphoneSellName">{iphone14pro.name}</h3>
          <p className="IphoneSellDescription">{iphone14pro.description}</p>
          <p className="IphoneSellPrice">Cost: ${iphone14pro.price}</p>
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
            Total: ${iphone14pro.price * quantity}
          </h4>
          <button onClick={handleAddToCart} className="AddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Iphone14pro;
