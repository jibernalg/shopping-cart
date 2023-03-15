import React, { useState } from "react";
import SE1 from "../images/SE1.jpeg";
import SE2 from "../images/SE2.jpeg";
import I121 from "../images/I121.jpeg";
import I122 from "../images/I122.jpeg";
import I131 from "../images/I131.jpeg";
import I132 from "../images/I132.jpeg";
import I141 from "../images/I141.jpeg";
import I142 from "../images/I142.jpeg";
import I14pro1 from "../images/I14pro1.jpeg";
import I14pro2 from "../images/I14pro2.jpeg";
import { Link } from "react-router-dom";

function Iphone({ iphoneId }) {
  const [iphone, setIphone] = useState([
    {
      id: 1,
      name: "iPhone SE",
      linkName: "iphoneSE",
      price: 429,
      image: [SE2, SE1],
      description:
        "Get the power and performance you need in a compact design with the iPhone SE. Featuring an A13 Bionic chip, advanced camera system, and long-lasting battery, this phone is perfect for on-the-go use.",
    },
    {
      id: 2,
      name: "iPhone 12",
      linkName: "iphone12",
      price: 599,
      image: [I122, I121],
      description:
        "Experience the future of iPhone technology with the iPhone 12. Featuring 5G connectivity, A14 Bionic chip, Ceramic Shield front cover, and a stunning Super Retina XDR display, this phone is built to perform.",
    },
    {
      id: 3,
      name: "iPhone 13",
      linkName: "iphone13",
      price: 599,
      image: [I132, I131],
      description:
        "Upgrade your mobile experience with the iPhone 13. Boasting a 6.1-inch Super Retina XDR display, A15 Bionic chip, Ceramic Shield front cover, and advanced camera system, this phone is perfect for streaming, gaming, and capturing every moment.",
    },
    {
      id: 4,
      name: "iPhone 14",
      linkName: "iphone14",
      price: 799,
      image: [I142, I141],
      description:
        "Be the first to experience the cutting-edge technology of the iPhone 14. Featuring a sleek design, 5G connectivity, A16 Bionic chip, and an advanced camera system, this phone will take your mobile experience to the next level.",
    },
    {
      id: 5,
      name: "iPhone 14 Pro",
      linkName: "iphone14pro",
      price: 999,
      image: [I14pro2, I14pro1],
      description:
        "Get the ultimate in iPhone performance with the iPhone 14 Pro. Featuring a ProMotion Super Retina XDR display, A16 Bionic chip, Ceramic Shield front cover, and an advanced camera system with ProRAW, this phone is perfect for professionals and power users alike.",
    },
  ]);

  const filteredIphone = iphoneId
    ? iphone.filter((item) => item.id === iphoneId)
    : iphone;

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="Iphone">
      <div className="IphoneContainer">
        {filteredIphone.map((iphone, index) => (
          <div className="IphoneCard" key={iphone.id}>
            <Link to={`/${iphone.linkName}`}>
              <img
                src={hoveredIndex === index ? iphone.image[1] : iphone.image[0]}
                alt={iphone.name}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            </Link>

            <h3>{iphone.name}</h3>
            <p>{iphone.description}</p>
            <h4>from ${iphone.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iphone;
