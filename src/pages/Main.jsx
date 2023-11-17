import React, { useState } from "react";
import Header from "components/Header";
import Container from "components/Container";
import Footer from "components/Footer";
import { FamilyContext } from "context/Context";

function Main() {
  // tab 메뉴 관련
  const [tab, setTab] = useState("cap");

  const tabHandler = (item) => {
    setTab(item);
  };

  return (
    <FamilyContext.Provider value={{ tab, tabHandler }}>
      <Header />
      <Container />
      <Footer />
    </FamilyContext.Provider>
  );
}

export default Main;
