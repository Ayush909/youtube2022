import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="feature" />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default Home;
