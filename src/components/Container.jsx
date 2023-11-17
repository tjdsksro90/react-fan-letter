import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import data from "../fakeData.json";
import character from "./Character";
import { BasicWrap, MainWrap, blue, red } from "assets/BasicStyle";
import Form from "./container/Form";
import Search from "./container/Search";
import List from "./container/List";

// id 호출
const uuid = () => {
  const tokens = v4().split("-");
  return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
};

function Container({ tab }) {
  // 기존 최초 배열
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("watched")) || data
  );

  // 추가하게 될 빈값 기본값
  const initialState = {
    id: 0,
    createdAt: "2023-11-02T11:25:37.026Z",
    nickname: "",
    img: "img-icon-cap.png",
    content: "",
    writedTo: "cap",
  };

  const [list, setList] = useState(initialState);

  // 초기 설정
  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem("watched"));
    if (storedLists) {
      setLists(storedLists);
    }
  }, []);

  // 리스트 변경될 때마다 Local Storage에 저장하는 함수 추가
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(lists));
  }, [lists]);

  const changeHandler = (e) => {
    setList({
      ...list,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const today = new Date();
    setLists([
      ...lists,
      {
        ...list,
        id: uuid(),
        createdAt: today.toJSON(),
        img: "img-icon-" + list.writedTo + ".png",
      },
    ]);
    setList({ ...initialState, writedTo: list.writedTo });
    localStorage.setItem(
      "watched",
      JSON.stringify([
        ...lists,
        {
          ...list,
          id: uuid(),
          createdAt: today.toJSON(),
          img: "img-icon-" + list.writedTo + ".png",
        },
      ])
    );
  };

  // focus
  const nicknameRef = useRef("");
  const contentRef = useRef("");
  // tab 선택시 input 포커스
  useEffect(() => {
    nicknameRef.current.focus();
  }, [tab]);
  useEffect(() => {
    if (list.nickname.length >= 20) {
      contentRef.current.focus();
    }
  }, [list.nickname]);

  useEffect(() => {
    if (list.nickname.length >= 20) {
      contentRef.current.focus();
    }
  }, [list.nickname]);

  // 검색기능
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <MainWrap>
      <BasicWrap>
        <Form
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          nicknameRef={nicknameRef}
          contentRef={contentRef}
          character={character}
          tab={tab}
          list={list}
          blue={blue}
          red={red}
        />
        <Search search={search} searchHandler={searchHandler} />
        <List tab={tab} lists={lists} search={search} />
      </BasicWrap>
    </MainWrap>
  );
}

export default Container;
