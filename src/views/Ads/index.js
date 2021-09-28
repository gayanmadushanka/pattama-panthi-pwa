import React from "react";

import "./style.scss";
import DefaultTemplate from "../../templates/DefaultTemplate";
import AssetSlider from "../../components/molecules/AssetSlider";

const Ads = (props) => {
  return (
    <>
      <DefaultTemplate></DefaultTemplate>{" "}
      <AssetSlider
        dataKey="{ASSET_LANDING_HERO.KEY}"
        minHeight="{ASSET_LANDING_HERO.MIN_HEIGHT}"
        className=""
      />
    </>
  );
};

export default Ads;
