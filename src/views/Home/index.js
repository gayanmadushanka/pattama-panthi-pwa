import DefaultTemplate from "../../templates/DefaultTemplate";

import React, { useEffect } from "react";
// import { Link, Redirect } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import PlanContainer from 'components/organisms/home/PlanContainer';
// import LoginDialog from 'components/organisms/LoginDialog';
// import YoutubePromo from 'components/organisms/Landing/YoutubePromo';
// import Divider from 'components/atoms/Divider';
// import { getMsisdn } from 'utils/authUtils';
// import Typography from 'components/atoms/Typography';
// import ActionItem from 'components/atoms/ActionItem';
// import { ROUTE_LOGGED_HOME, ROUTE_STORE } from 'constants/Routes';
// import ActionItemTypes from 'constants/ActionItem';
// import GEvent from 'components/atoms/GEvent';
// import Image from 'components/organisms/Landing/Image';
// import useGTM from 'hooks/useGTM';
// import detectDevice from 'utils/detectDevice';
import AssetSlider from "../../components/molecules/AssetSlider";
// import HomeGames from 'components/molecules/HomeGames';
// import {
//   ASSET_LANDING_HERO,
//   ASSET_LANDING_OFFERS,
//   ASSET_LANDING_PLAYPOINTS,
//   ASSET_LANDING_SPECIAL_DATA,
//   ASSET_LANDING_HIGHSPEED,
//   ASSET_LANDING_BRANDS,
// } from 'constants/AssetConfig';

import "./style.scss";


const HomePage = (props) => {
  return (<>
  <DefaultTemplate>
 
 
 </DefaultTemplate>

     
<AssetSlider
dataKey="{ASSET_LANDING_HERO.KEY}"
minHeight="{ASSET_LANDING_HERO.MIN_HEIGHT}"
className=""
/>
  </>
    

  );
};

export default HomePage;
