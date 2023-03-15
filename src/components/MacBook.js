import React, { useState } from "react";

import mbairm11 from "../images/mbairm11.jpeg";
import mbairm12 from "../images/mbairm12.jpeg";
import mbairm13 from "../images/mbairm13.jpeg";
import mbairm14 from "../images/mbairm14.jpeg";
import mbairm21 from "../images/mbairm21.jpeg";
import mbairm22 from "../images/mbairm22.jpeg";
import mbairm23 from "../images/mbairm23.jpeg";
import mbairm24 from "../images/mbairm24.jpeg";
import mbairm25 from "../images/mbairm25.jpeg";
import mbairm26 from "../images/mbairm26.jpeg";
import mbpro131 from "../images/mbpro131.jpeg";
import mbpro132 from "../images/mbpro132.jpeg";
import mbpro133 from "../images/mbpro133.jpeg";
import mbpro134 from "../images/mbpro134.jpeg";
import mbpro135 from "../images/mbpro135.jpeg";
import mbpro136 from "../images/mbpro136.jpeg";
import mbpro141 from "../images/mbpro141.jpeg";
import mbpro142 from "../images/mbpro142.jpeg";
import mbpro143 from "../images/mbpro143.jpeg";
import mbpro144 from "../images/mbpro144.jpeg";
import mbpro145 from "../images/mbpro145.jpeg";
import mbpro146 from "../images/mbpro146.jpeg";
import mbpro147 from "../images/mbpro147.jpeg";
import mbpro148 from "../images/mbpro148.jpeg";
import mbpro161 from "../images/mbpro161.jpeg";
import mbpro162 from "../images/mbpro162.jpeg";
import mbpro163 from "../images/mbpro163.jpeg";
import mbpro164 from "../images/mbpro164.jpeg";
import mbpro165 from "../images/mbpro165.jpeg";
import mbpro166 from "../images/mbpro166.jpeg";
import mbpro167 from "../images/mbpro167.jpeg";
import mbpro168 from "../images/mbpro168.jpeg";
import imac1 from "../images/imac1.jpeg";
import imac2 from "../images/imac2.jpeg";
import imac3 from "../images/imac3.jpeg";

import { Link} from "react-router-dom";

function MacBook({ macId }) {
  const [mac, setMac] = useState([
    {
      id: 1,
      name: "MacBook Air M1",
      linkName: "airM1",
      price: 999,
      image: [mbairm13, mbairm11],
      description:
        "Experience the future of laptop computing with the MacBook Air M1. Powered by Apple's revolutionary M1 chip, this laptop delivers blazing-fast performance and exceptional battery life. With a stunning Retina display, Magic Keyboard, and Touch ID, the MacBook Air M1 is designed for productivity and creativity on the go.",
    },
    {
      id: 2,
      name: "MacBook Air M2",
      linkName: "airM2",
      price: 1199,
      image: [mbairm21, mbairm22],
      description:
        "The MacBook Air M2 is the next generation of Apple's iconic laptop. With a sleek and lightweight design, this laptop is built for speed and efficiency. The M2 chip promises even faster performance and longer battery life than its predecessor, and the new design is rumored to be even more elegant and minimalist.",
    },
    {
      id: 3,
      name: 'MacBook Pro 13" M2',
      linkName: "pro13",
      price: 1299,
      image: [mbpro131,mbpro132],
      description:
        `Take your productivity to the next level with the MacBook Pro 13". This laptop features a powerful 8-core processor, stunning Retina display, and Touch Bar interface for quick and easy access to your favorite apps and tools. Whether you're a designer, programmer, or content creator, the MacBook Pro 13" is the perfect tool for getting things done.`,
    },
    {
      id: 4,
      name: 'MacBook Pro 14" M2',
      linkName: "pro14",
      price: 1999,
      image: [mbpro141,mbpro142],
      description:
        `The MacBook Pro 14" is a powerhouse of a laptop, with an even faster processor, larger screen, and up to 64GB of RAM. This laptop is designed for professionals who demand the best performance and the most advanced features, including the Touch Bar, Touch ID, and Thunderbolt 4 ports.`,
    },
    {
      id: 5,
      name: 'MacBook Pro 16" M2',
      linkName: "pro16",
      price: 2499,
      image: [mbpro161,mbpro162],
      description:
        `If you're looking for the ultimate in performance and power, look no further than the MacBook Pro 16". With a massive 16-inch Retina display, up to 8TB of storage, and a 10-core processor, this laptop is built for the most demanding tasks. Whether you're editing 4K video, developing complex software, or running virtual machines, the MacBook Pro 16" is up to the challenge.`,
    },
    {
        id: 6,
        name: 'iMac 24" M1',
        linkName: "imac",
        price: 1299,
        image: [imac1,imac3],
        description:
          `Experience the future of desktop computing with the iMac M1. This all-in-one computer features a stunning 24-inch 4.5K Retina display, powerful M1 chip, and a sleek design that will look great in any home or office. With up to 16GB of RAM and 2TB of storage, the iMac M1 is perfect for anyone who needs a high-performance desktop computer.`,
      },
  ]);

  const filteredMac = macId
    ? mac.filter((item) => item.id === macId)
    : mac;

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="Mac">
      <div className="MacContainer">
        {filteredMac.map((mac, index) => (
          <div className="MacCard" key={mac.id}>
            <Link to={`/${mac.linkName}`}>
              <img
                src={hoveredIndex === index ? mac.image[1] : mac.image[0]}
                alt={mac.name}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            </Link>

            <h3>{mac.name}</h3>
            <p>{mac.description}</p>
            <h4>from ${mac.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MacBook;
