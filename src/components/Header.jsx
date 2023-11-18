import {
  HeaderBg,
  HeaderH1,
  HeaderLi,
  HeaderUl,
  blue,
  red,
} from "assets/BasicStyle";
import React, { useEffect } from "react";
import character from "./Character";
import { useDispatch, useSelector } from "react-redux";
// import reduxTab from "redux/modules/tab";

function Header({ tab, tabHandler }) {
  // redux 사용하기
  // store에 접근하여 state 가져오기
  const reduxTab = useSelector((state) => state.tab);

  console.log(reduxTab);

  return (
    <HeaderBg color={reduxTab}>
      <HeaderH1>Marvel Fan Letter</HeaderH1>
      <HeaderUl>
        {character.map((item) => {
          return (
            <HeaderLi
              className={`${item.val === tab ? "active" : ""} ${item.val}`}
              key={item.val}
              value={item.val}
              onClick={() => tabHandler(item.val)}
              color={reduxTab}
            >
              {item.name}
            </HeaderLi>
          );
        })}
      </HeaderUl>
    </HeaderBg>
  );
}

export default Header;
