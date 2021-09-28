import React from "react";

import "./style.scss";
import Header from "../../components/organisms/Header";
import AssetSlider from "../../components/molecules/AssetSlider";

const Ads = (props) => {
  return (
    <>
      <Header active="true" />
      <AssetSlider
        dataKey="{ASSET_LANDING_HERO.KEY}"
        minHeight="{ASSET_LANDING_HERO.MIN_HEIGHT}"
        className=""
      />
    </>
  );
};

export default Ads;
