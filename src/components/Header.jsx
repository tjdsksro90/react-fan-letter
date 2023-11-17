import {
  HeaderBg,
  HeaderH1,
  HeaderLi,
  HeaderUl,
  blue,
  red,
} from "assets/BasicStyle";
import React from "react";
import character from "./Character";

function Header({ tab, tabHandler }) {
  return (
    <HeaderBg color={tab === "cap" ? blue : red}>
      <HeaderH1>Marvel Fan Letter</HeaderH1>
      <HeaderUl>
        {character.map((item) => {
          return (
            <HeaderLi
              className={`${item.val === tab ? "active" : ""} ${item.val}`}
              key={item.val}
              value={item.val}
              onClick={() => tabHandler(item.val)}
              color={tab === "cap" ? blue : red}
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
