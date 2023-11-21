import React from "react";
import "./List.scss";
import Card from "../ItemCard/Card";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pokemon_Trading_Card_Game_cardback.jpg/220px-Pokemon_Trading_Card_Game_cardback.jpg",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pokemon_Trading_Card_Game_cardback.jpg/220px-Pokemon_Trading_Card_Game_cardback.jpg",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pokemon_Trading_Card_Game_cardback.jpg/220px-Pokemon_Trading_Card_Game_cardback.jpg",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pokemon_Trading_Card_Game_cardback.jpg/220px-Pokemon_Trading_Card_Game_cardback.jpg",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}{" "}
    </div>
  );
};

export default List;
