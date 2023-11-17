import React, { useState } from "react";
import Header from "components/Header";
import Container from "components/Container";
import Footer from "components/Footer";

function Main() {
  // tab 메뉴 관련
  const [tab, setTab] = useState("cap");

  const tabHandler = (item) => {
    setTab(item);
  };

  return (
    <div>
      <Header tab={tab} tabHandler={tabHandler} />
      <Container tab={tab} />
      <Footer />
    </div>
  );
}

export default Main;
