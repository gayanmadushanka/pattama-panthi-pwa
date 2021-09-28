/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Wednesday, 09th December 2020 11:11 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useEffect, useState } from 'react';
// import Icon from '../../atoms/Icon';
// import Typography from 'components/atoms/Typography';
// import { useTranslation } from 'react-i18next';
// import { Row, Col } from 'react-bootstrap';
// import ConfirmAlert from 'components/molecules/ConfirmAlert';
// import { SUSPENSE_IMAGE } from 'constants/Images';
// import useGTM from 'hooks/useGTM';
// import { isRunningOnAsApp } from 'utils/helpers';
import './style.scss';

const HamburgerATH = ({ showMenu }) => {
  // const { t } = useTranslation();
  // const [adhState, setAdhState] = useState(false);
  // const gtm = useGTM();

  // useEffect(() => {
  //   if (!showMenu) {
  //     setAdhState(false);
  //   }
  // }, [showMenu]);

  // const onATHclick = (e) => {
  //   e.stopPropagation();
  //   const GTMEvent = adhState
  //     ? gtm.events.ACT_ADD_TO_HOME_GOT_IT
  //     : gtm.events.ACT_ADD_TO_HOME;
  //   gtm.push(GTMEvent, {});
  //   setAdhState(!adhState);
  // };
  // if (isRunningOnAsApp()) {
  //   return null;
  // }
  return (
    <>
      <div className="px-3 mb-3 hamburger-btn-add-to-home">
        <div className="hamburger-add-to-home  landing-separator pb-3  ">
          <div
            className="hamburger-add-to-home-container  d-flex align-items-end   focus-nulled"
            // onClick={onATHclick}
            role="button"
            onKeyDown={() => {}}
            tabIndex={0}
          >
            {/* <div className="hamburger-add-to-home-container-icon d-flex overflow-hidden">
              <Icon icon="add_to_home" />
            </div>
            <Typography
              value={t('GP_LANDING_ADDTOHOME')}
              color="white"
              variant="h3"
              weight="semi-bold"
              component="div"
              className="ml-2"
            /> */}
          </div>
        </div>
      </div>

      {/* <ConfirmAlert
        onConfirm={onATHclick}
        show={adhState}
        title={t('GP_LANDING_ADDTOHOME')}
        buttonTitle={t('GP_BROWSERMENU_GOTIT')}
        gtmEvent={gtm.events.ACT_ADD_TO_HOME_GOT_IT}
      >
        <Row noGutters>
          <Col xs={2}>
            <img src={SUSPENSE_IMAGE} alt="Play Unlimited" />
          </Col>
          <Col>
            <div className="ml-2">
              {t('GP_LANDING_GETTOPLAY')} <br /> {t('GP_LANDING_CLICKOR')}{' '}
              <Icon icon="android_a2hs" /> {t('GP_LANDING_CLICKOR_1')}{' '}
              <Icon icon="ios_a2hs" /> {t('GP_BROWSERMENU_ADDTOHOME')}
            </div>
          </Col>
        </Row>
      </ConfirmAlert> */}
    </>
  );
};

export default HamburgerATH;
