import React, { useState } from "react";
import Header from "components/Header";
import Container from "components/Container";
import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { tabRedux } from "redux/modules/tab";

function Main() {
  // tab 메뉴 관련
  const [tab, setTab] = useState("cap");
  // redux 사용하기
  // dispatch를 사용하기 위한 준비
  // const dispatch = useDispatch();

  // store에 접근하여 state 가져오기
  // const tab = useSelector((state) => state.tab);
  const dispatch = useDispatch();

  const tabHandler = (item) => {
    dispatch({ type: item });
    setTab(item);
    // console.log(item, "item");
    // console.log(dispatch(tab(item)));
    // dispatch(tab(item));
  };

  return (
    <div>
      <Header tab={tab} tabHandler={tabHandler} />
      <Container tab={tab} />
      {/* <Header /> */}
      {/* <Container /> */}
      <Footer />
    </div>
  );
}

export default Main;
