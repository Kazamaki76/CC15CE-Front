import React from "react";
import Slider from "../../components/slider/Slider";
import "./Home.scss";
import FeatureItems from "../../components/FeatureItems/FeatureItems"
import Categories from "../../components/Categories/Categories";

function Home() {
  return (
    <div className="">
      {" "}
      <Slider />
      <FeatureItems type="feature"/>
      <Categories/>
    </div>
  );
}

export default Home;
