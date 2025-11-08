import React from "react";
import "../../styles/reels.css";

const items = [
  {
    id: 1,
    title: "Delicious biryani at House of Spice - Order now!",
    store: "House of Spice",
  },
  {
    id: 2,
    title: "Authentic sushi platter available today — limited stock",
    store: "Sushi World",
  },
  {
    id: 3,
    title: "Street-style tacos with a twist. Try the new salsa!",
    store: "Taco Town",
  },
];

const home = () => {
  return (
    <div className="reels">
      {items.map((item) => (
        <section className="reel" key={item.id}>
          <div className="video-placeholder">VIDEO {item.id}</div>

          <div className="overlay">
            <div className="desc">{item.title}</div>
            <a className="btn" href="#">
              Visit store — {item.store}
            </a>
          </div>
        </section>
      ))}
    </div>
  );
};

export default home;
