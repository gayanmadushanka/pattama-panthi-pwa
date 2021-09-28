import React from "react";
import { useHistory } from "react-router-dom";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import { useSelector } from "react-redux";
// import { selectData } from "reducers/AppAssets";
// import useGTM from "hooks/useGTM";
// import get from "lodash/get";
import "./style.scss";

SwiperCore.use([Autoplay, Pagination]);
const AssetSlider = ({ dataKey, minHeight, eventKey }) => {
  // const { data, loading, error, loadedOnce } = useSelector(selectData);
  const history = useHistory();
  // const gtm = useGTM();

  // if (error) {
  //   return null;
  // }
  // if (loading || !loadedOnce) {
  //   return <div className="bg-gray-2 skeleton-pulse" style={{ minHeight }} />;
  // }
  // const dataSelected = get(data, dataKey);
  // if (!dataSelected || !Array.isArray(dataSelected)) {
  //   return null;
  // }

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

  if (dataSelected.length === 1) {
    return (
      <div className="generic-asset-slider-slide-container">
        <img
          src={dataSelected[0].url}
          // alt={dataSelected[0].altText}
          className="generic-asset-slider-slide-image"
        />
      </div>
    );
  }

  function onSlideClick(deeplink, code) {
    if (deeplink) {
      history.push(deeplink);
    }
  }
  console.log(dataSelected);
  return (
    // <>
    //   {dataSelected.map(({ url, altText, assetId, deeplink, code }) => (
    //     <div className="generic-asset-slider-slide-container">
    //       <img src={url} className="generic-asset-slider-slide-image" />
    //     </div>
    //   ))}
    // </>

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
            <img
              src={url}
              // alt={altText}
              // className="generic-asset-slider-slide-image"
            />
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
