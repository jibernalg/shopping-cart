import React, { useEffect, useState } from "react";
import imac1 from "../images/imac1.jpeg";
import imac2 from "../images/imac2.jpeg";
import imac3 from "../images/imac3.jpeg";

function Imac({addToCart}) {
  const [imac, setImac] = useState({
    id: 3,
    name: 'iMac 24" M1',
    price: 1299,
    image: [imac1, imac2, imac3],
    description:
    `Experience the future of desktop computing with the iMac M1. This all-in-one computer features a stunning 24-inch 4.5K Retina display, powerful M1 chip, and a sleek design that will look great in any home or office. With up to 16GB of RAM and 2TB of storage, the iMac M1 is perfect for anyone who needs a high-performance desktop computer.`,
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevButtonClick = () => {
    setActiveImageIndex(
      (activeImageIndex - 1 + imac.image.length) % imac.image.length
    );
  };

  const handleNextButtonClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % imac.image.length);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart=()=>{
    addToCart(imac,quantity)
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
          <img src={imac.image[activeImageIndex]} alt={imac.name} />
          <div className="ArrowsContainer">
            <button className="NextArrow" onClick={handleNextButtonClick}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="IphoneInformation">
          <h3 className="IphoneSellName">{imac.name}</h3>
          <p className="IphoneSellDescription">{imac.description}</p>
          <p className="IphoneSellPrice">Cost: ${imac.price}</p>
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
            Total: ${imac.price * quantity}
          </h4>
          <button onClick={handleAddToCart} className="AddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Imac;