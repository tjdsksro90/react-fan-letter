import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import data from "../fakeData.json";
import GlobalStyle from "assets/GlobalStyle";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const uuid = () => {
  const tokens = v4().split("-");
  return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
};

const blue = {
  basic: "#3747ff",
  light: "#838cf5",
  dark: "#1e29ab",
  back: "#c7c9ff",
};

const red = {
  basic: "#e50000",
  light: "#ff4c4c",
  dark: "#a70000",
  back: "#ffbbbb",
};

const character = [
  {
    val: "cap",
    name: "Captain America",
  },
  {
    val: "iron",
    name: "Iron Man",
  },
];

const HeaderBg = styled.header`
  position: relative;
  background-image: url("/img/background.jpg");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.color.back};
  background-blend-mode: multiply;
  width: 100%;
  height: 500px;
`;

const HeaderH1 = styled.h1`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  background: rgb(0 0 0 / 50%);
  width: 100%;
  text-align: center;
  padding: 10px;
`;

const HeaderUl = styled.ul`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  list-style: none;
  padding: 15px;
  width: 420px;
  gap: 20px;
  max-width: 90%;
  background-color: rgb(0 0 0 / 50%);
`;

const HeaderLi = styled.li`
  font-size: 20px;
  border-radius: 5px;
  padding: 15px;
  flex: 1;
  text-align: center;
  user-select: none;
  cursor: pointer;
  background-color: #c5c5c5;
  color: #575757;
  transition: all 0.3s;
  &.cap:hover {
    background-color: #1e29ab;
    color: #fff;
  }
  &.cap:active {
    background-color: #838cf5;
    color: #fff;
  }
  &.iron:hover {
    background-color: #a70000;
    color: #fff;
  }
  &.iron:active {
    background-color: #ff4c4c;
    color: #fff;
  }
  &.active {
    background-color: ${(props) => props.color.basic};
    color: #fff;
    &:hover {
      background-color: ${(props) => props.color.dark};
      color: #fff;
    }
    &:active {
      background-color: ${(props) => props.color.light};
      color: #fff;
    }
  }
`;

const FooterStyle = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  background: black;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const MainWrap = styled.div`
  background-color: #000;
`;
const BasicWrap = styled.main`
  width: 420px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const FormWrap = styled.form`
  margin-top: 20px;
  background: #ccc;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const FormSpan = styled.span`
  width: 100%;
  display: flex;
`;
const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormButton = styled.button`
  border: 0;
  color: #fff;
  background-color: ${(props) => props.color.basic};
  padding: 10px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: ${(props) => props.color.dark};
  }
  &:active {
    background-color: ${(props) => props.color.light};
  }
`;

const ListUl = styled.ul`
  background: #ccc;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  transition: all 0.3s;
`;

const ListLi = styled.li`
  border: 3px solid ${(props) => props.color.basic};
  box-shadow: 0 0 0 0 ${(props) => props.color.basic};
  background-color: #fff;
  color: ${(props) => props.color.basic};
  width: 90%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border: 3px solid ${(props) => props.color.dark};
    box-shadow: 0 0 20px 2px ${(props) => props.color.dark};
    color: ${(props) => props.color.dark};
  }
  &:active {
    border: 3px solid ${(props) => props.color.light};
    box-shadow: 0 0 15px 2px ${(props) => props.color.light};
    color: ${(props) => props.color.light};
  }
`;

const ListImgWrap = styled.article`
  width: 60px;
  height: 60px;
`;

const ListImgFigure = styled.figure`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #e1e1e1;
  overflow: hidden;
`;

const ListImg = styled.img`
  width: 100%;
`;

const ListTextWrap = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  min-width: 0;
`;

const ListTextTitle = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 900;
`;

const ListTextTime = styled.time`
  font-size: 12px;
  color: #000;
`;

const ListTextDesc = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000;
`;
const SearchWrap = styled.div`
  display: flex;
  gap: 5px;
  > span {
    flex: 1;
  }
`;
const SearchSapn = styled.span`
  display: flex;
  input {
    height: 30px;
    flex: 1;
    padding: 0 8px;
    border: 0;
    border-radius: 5px;
  }
`;

function Main() {
  const [tab, setTab] = useState("cap");

  const tabHandler = (item) => {
    setTab(item);
  };

  const navigate = useNavigate();

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
    <div>
      <GlobalStyle />
      {/* <Header /> */}
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
      <MainWrap>
        <BasicWrap>
          <FormWrap onSubmit={submitHandler}>
            <FormSection>
              <span>
                <label htmlFor="nickname">nickname</label>
              </span>
              <FormSpan>
                <FormInput
                  name="nickname"
                  id="nickname"
                  ref={nicknameRef}
                  type="text"
                  placeholder="Your nickname ( max : 20 )"
                  value={list.nickname}
                  onChange={changeHandler}
                  maxLength={20}
                  required
                />
              </FormSpan>
            </FormSection>
            <FormSection>
              <span>
                <label htmlFor="content">Content</label>
              </span>
              <FormSpan>
                <FormTextarea
                  name="content"
                  id="content"
                  ref={contentRef}
                  cols="30"
                  rows="10"
                  placeholder="Your Content ( max : 100 )"
                  value={list.content}
                  onChange={changeHandler}
                  maxLength={100}
                  required
                ></FormTextarea>
              </FormSpan>
            </FormSection>
            <FormSection>
              <span>
                <label htmlFor="writedTo">Who ?</label>
              </span>
              <FormSpan>
                <FormSelect
                  name="writedTo"
                  id="writedTo"
                  onChange={changeHandler}
                  value={list.writedTo}
                >
                  {character.map((item) => {
                    return (
                      <option key={item.val} value={item.val}>
                        {item.name}
                      </option>
                    );
                  })}
                </FormSelect>
              </FormSpan>
            </FormSection>
            <div>
              <FormButton color={tab === "cap" ? blue : red} type="submit">
                Send
              </FormButton>
            </div>
          </FormWrap>
          <SearchWrap>
            <SearchSapn>
              <input
                type="text"
                placeholder="search name"
                value={search}
                onChange={searchHandler}
              />
            </SearchSapn>
          </SearchWrap>
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
        </BasicWrap>
      </MainWrap>
      <FooterStyle>
        <span>copyright @YOON</span>
      </FooterStyle>
    </div>
  );
}

export default Main;
