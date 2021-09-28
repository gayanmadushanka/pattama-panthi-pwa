import React from "react";
import Icon from "../../../components/atoms/Icon";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import data from "./data";
import "./style.scss";

const Item = ({ active, title, route, iconActive, icon }) => {
  const history = useHistory();
  const { t } = useTranslation();
  const onClick = () => {
    history.push(route);
  };

  return (
    <div
      className={clsx(
        "bottom-navigation-item d-flex flex-column align-items-center focus-nulled",
        active ? "text-cellcard" : "text-gray"
      )}
      onKeyDown={() => {}}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="bottom-navigation-icon-container d-flex justify-content-center align-items-center">
        <Icon icon={active ? iconActive : icon} />
      </div>
      <div className="bottom-navigation-text text-uppercase">{t(title)}</div>
    </div>
  );
};
const Header = ({ active }) => {
  return (
    <>
      <div className="bottom-navigation bg-gray-5 d-flex text-uppercase justify-content-around">
        {data.map(({ id, title, route, iconActive, icon }) => (
          <Item
            active={active === id}
            key={id}
            id={id}
            title={title}
            route={route}
            iconActive={iconActive}
            icon={icon}
          />
        ))}
      </div>
    </>
  );
};

export default Header;
