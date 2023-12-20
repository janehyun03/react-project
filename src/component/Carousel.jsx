import { useState } from "react";

export default function Carousel() {
  const images = [
    {
      picture: "./images/car.jpg",
      description: "camping car",
      isLiked: false,
    },
    {
      picture: "./images/deco.jpg",
      description: "decoration",
      isLiked: false,
    },
    {
      picture: "./images/gift.jpg",
      description: "christmas gift",
      isLiked: true,
    },
    {
      picture: "images/neom.jpg",
      description: "neom",
      isLiked: false,
    },
    {
      picture: "./images/wall.jpg",
      description: "wall",
      isLiked: false,
    },
  ];
  // we're going to repeat the carousel assignment, but in react
  // Get three images from internet
  //Inser two buttons that go to next/ prev page

  const [current, setCurrent] = useState(0);

  return (
    <>
      <br />

      <div className="carousel">
        <button
          onClick={() => {
            if (current > 0) {
              setCurrent(current - 1);
            } else {
              setCurrent(images.length - 1);
            }
          }}
        >
          prev
        </button>
        <img
          src={images[current].picture}
          style={{ width: "300px", height: "300px" }}
        ></img>{" "}
        <button
          onClick={() => {
            if (current < images.length - 1) {
              setCurrent(current + 1);
            } else {
              setCurrent(0);
            }
          }}
        >
          next
        </button>
        {/* <p>{images[current].description}</p> */}
      </div>
    </>
  );
}
