import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ActionItem from "../../atoms/ActionItem";
import BrandLogo from "../../atoms/BrandLogo";
import SideMenu from "../../molecules/SideMenu";
import "./index.scss";

const Header = () => {
  const { t } = useTranslation();
  // const [adhState, setAdhState] = useState(false);
  const [menuState, setMenuState] = useState(false);

  // const toggleAddtoHome = () => {
  //   setAdhState(!adhState);
  // };

  const toggleMenu = () => {
    const state = !menuState;
    if (state) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    setMenuState(state);
  };

  return (
    <>
      <div
        className="test px-3 d-flex align-items-center"
        style={{ height: "60px" }}
      >
        <div
          className="icon-menu mr-2"
          style={{ fontSize: "36px" }}
          onClick={toggleMenu}
        />
        {/* <BrandLogo alt={t("Cellcard Play")} />
        <div className="flex-grow-1" />
        <ActionItem
          variant="sub1"
          weight="semi-bold"
          rounded
          flex
          className="btn-register-free"
          value={t("GP720_004")}
          to={{
            pathname: "/",
            hash: "login",
          }}
        /> */}
      </div>
      {/* <SideMenu onClose={toggleMenu} show={menuState} /> */}
    </>
  );
};

export default Header;
