import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000)
  const [sort , setSort] = useState(null)


  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2> Product categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1}></input>
            <label htmlFor="1"> Yugioh</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2}></input>
            <label htmlFor="1"> Pokemon</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3}></input>
            <label htmlFor="1"> Weiss Schwarz</label>
          </div>
        </div>
        <div className="filterItem">
          <h2> Filter by price</h2>
          <div className="inputItem">
            <input type="range" min={0} max={10000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>

        <div className="filterItem">
          <h2> Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")} />
            <label htmlFor="asc"> Price (Lowest)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")} />
            <label htmlFor="desc"> Price (Highest)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pokemon_Trading_Card_Game_cardback.jpg/220px-Pokemon_Trading_Card_Game_cardback.jpg"
        ></img>
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}

export default Products;
