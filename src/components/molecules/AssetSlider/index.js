import React from "react";
import { useHistory } from "react-router-dom";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./style.scss";

SwiperCore.use([Autoplay, Pagination]);
const AssetSlider = ({ dataKey, minHeight, eventKey }) => {
  const history = useHistory();
  const dataSelected = [
    {
      url: "https://cellcard-play-cms-data-qa.s3-ap-southeast-1.amazonaws.com/dd5edb4c-8c71-4e50-b896-2e11016cccbf.png",
      assetId: 1,
    },
    {
      url: "https://cellcard-play-cms-data-qa.s3-ap-southeast-1.amazonaws.com/e5afcbec-75f1-422c-8698-56797b7914c8.png",
      assetId: 2,
    },
  ];
  function onSlideClick(deeplink, code) {
    if (deeplink) {
      history.push(deeplink);
    }
  }
  return (
    <Swiper
      slidesPerView="auto"
      autoplay={{
        delay: 3600,
        disableOnInteraction: false,
      }}
      pagination
      loop
    >
      {dataSelected.map(({ url, altText, assetId, deeplink, code }) => (
        <SwiperSlide
          key={assetId}
          onClick={() => {
            onSlideClick(deeplink, code);
          }}
        >
          <img src={url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Wrapper = ({
  dataKey,
  minHeight = "16px",
  eventKey,
  className = "mt-3",
}) => (
  <div style={{ minHeight }} className={className}>
    <AssetSlider dataKey={dataKey} minHeight={minHeight} eventKey={eventKey} />
  </div>
);

export default Wrapper;
