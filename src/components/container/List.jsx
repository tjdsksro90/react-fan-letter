import React, { useContext } from "react";
import {
  ListImg,
  ListImgFigure,
  ListImgWrap,
  ListLi,
  ListTextDesc,
  ListTextTime,
  ListTextTitle,
  ListTextWrap,
  ListUl,
  blue,
  red,
} from "assets/BasicStyle";
import { useNavigate } from "react-router-dom";
import { FamilyContext } from "context/Context";

function List() {
  const navigate = useNavigate();
  const contextData = useContext(FamilyContext);
  const lists = contextData.lists;
  const tab = contextData.tab;
  const search = contextData.search;

  return (
    <div>
      <ListUl>
        {lists
          .filter((item) => item.writedTo === tab)
          .filter((item) => item.nickname.toLowerCase().includes(search))
          .map((item) => {
            return (
              <ListLi
                key={item.id}
                color={tab === "cap" ? blue : red}
                onClick={() =>
                  navigate("/detail/" + item.id, {
                    state: lists,
                  })
                }
              >
                <ListImgWrap>
                  <ListImgFigure>
                    <ListImg src={`img/${item.img}`} alt="img" />
                  </ListImgFigure>
                </ListImgWrap>
                <ListTextWrap>
                  <ListTextTitle>{item.nickname}</ListTextTitle>
                  <ListTextTime>{item.createdAt}</ListTextTime>
                  <ListTextDesc>{item.content}</ListTextDesc>
                </ListTextWrap>
              </ListLi>
            );
          })}
      </ListUl>
    </div>
  );
}

export default List;
