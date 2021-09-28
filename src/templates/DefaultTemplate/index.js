import React from "react";

import Header from "../../components/organisms/Header";
import Nav from "../../components/organisms/Nav";
// import Footer from "./components/organisms/Footer";
// import FooterDesktop from "components/organisms/FooterDesktop";
// import ContentDesktop from "components/organisms/home/ContentDesktop";

const DefaultTemplate = (props) => {
  return (
    <React.Fragment>
      <div className="page page--default d-lg-none d-xl-none ">
        <Header />
        <Nav active="true" />
        {/* <div className="page__content">{props.children}</div>
        <Footer /> */}
      </div>
      {/* <div className="d-none d-lg-block">
        <ContentDesktop />
        <FooterDesktop />
      </div> */}
    </React.Fragment>
  );
};

export default DefaultTemplate;
