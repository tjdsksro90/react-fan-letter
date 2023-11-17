import {
  HeaderBg,
  HeaderH1,
  HeaderLi,
  HeaderUl,
  blue,
  red,
} from "assets/BasicStyle";
import React, { useContext } from "react";
import character from "./Character";
import { FamilyContext } from "context/Context";

function Header() {
  const contextData = useContext(FamilyContext);
  const tab = contextData.tab;

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
              onClick={() => contextData.tabHandler(item.val)}
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
