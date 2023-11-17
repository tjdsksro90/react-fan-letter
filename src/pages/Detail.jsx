import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import data from "../fakeData.json";
import styled from "styled-components";

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

const DetailBg = styled.div`
  background-image: url("/img/background.jpg");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.color.dark};
  background-blend-mode: multiply;
  width: 100%;
`;

const DetailHome = styled.span`
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

const DetailVh = styled.div`
  min-height: 100vh;
`;
const DetailBox = styled.div`
  text-align: center;
  position: relative;
  top: 150px;
  width: 420px;
  max-width: 90%;
  margin: 0 auto;
  padding: 30px;
  background: #dfdfdf;
`;
const DetailImg = styled.figure`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  overflow: hidden;
  background: #ccc;
`;
const DetailImg100 = styled.img`
  width: 100%;
`;
const DetailH2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  line-height: 1.2;
  color: ${(props) => props.color.dark};
`;
const DetailTime = styled.time`
  font-size: 14px;
  margin-top: 20px;
  display: block;
`;
const DetailTo = styled.div`
  margin-top: 10px;
  font-style: italic;
`;
const DetailContent = styled.div`
  padding: 20px;
  background: #ededed;
  margin-top: 20px;
  display: flex;
  textArea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;
const DetailBtnWrap = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const DetailBtn = styled.button`
  width: 75px;
  height: 25px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
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
`;

function Detail() {
  const param = useParams();
  // const location = useLocation();
  // const data = location.state;
  console.log(param);
  // 기존 최초 배열
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("watched")) || data
  );
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
    console.log("들어옴");
  }, [lists]);

  // detail
  const detail = lists.find((item) => item.id === param.id);
  // detail의 index 찾기
  const detailIndex = JSON.parse(localStorage.getItem("watched")).findIndex(
    (item) => item.id === param.id
  );
  console.log(detailIndex);

  const navigate = useNavigate();

  const [editCheck, setEditCheck] = useState(false);

  const editClick = () => {
    setEditCheck(true);
    setDesc(detail.content);
  };
  const editCancel = () => {
    setEditCheck(false);
  };

  const [desc, setDesc] = useState("");

  const changeHandler = (e) => {
    setDesc(e.target.value);
  };

  const editSubmit = () => {
    if (desc === detail.content) return alert("수정된 부분이 없습니다");
    // json을 객채화
    const commentsJSON = JSON.parse(localStorage.getItem("watched"));
    // 해당 요소 찾아서 수정
    commentsJSON[detailIndex].content = desc;
    // 해당 키 지우고 새롭게 입히기
    localStorage.removeItem("watched");
    localStorage.setItem("watched", JSON.stringify(commentsJSON));
    setLists(commentsJSON);
    setEditCheck(false);
    navigate("/");
  };

  const deleteClick = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      // json을 객채화
      const commentsJSON = JSON.parse(localStorage.getItem("watched"));
      // 해당 요소 찾아서 수정
      commentsJSON.splice(detailIndex, 1);
      // 해당 키 지우고 새롭게 입히기
      localStorage.removeItem("watched");
      localStorage.setItem("watched", JSON.stringify(commentsJSON));
      alert("삭제완료");
      navigate("/");
    }
  };

  return (
    <DetailBg color={detail.writedTo === "cap" ? blue : red}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <DetailHome>홈으로</DetailHome>
      </Link>
      <DetailVh>
        <DetailBox>
          <DetailImg>
            <DetailImg100 src={`../img/${detail.img}`} alt="img" />
          </DetailImg>
          <DetailH2 color={detail.writedTo === "cap" ? blue : red}>
            {detail.nickname}
          </DetailH2>
          <DetailTime>{detail.createdAt}</DetailTime>
          <DetailTo>
            To. {detail.writedTo === "cap" ? "Captain America" : "Iron Man"}
          </DetailTo>
          {editCheck ? (
            <DetailContent>
              <textarea
                name="content"
                id="content"
                cols="30"
                rows="10"
                placeholder="Your Content ( max : 100 )"
                value={desc}
                onChange={changeHandler}
                maxLength={100}
                required
              ></textarea>
            </DetailContent>
          ) : (
            <DetailContent>{detail.content}</DetailContent>
          )}
          {editCheck ? (
            <DetailBtnWrap>
              <DetailBtn
                onClick={editCancel}
                color={detail.writedTo === "cap" ? blue : red}
              >
                취소
              </DetailBtn>
              <DetailBtn
                onClick={editSubmit}
                color={detail.writedTo === "cap" ? blue : red}
              >
                수정 완료
              </DetailBtn>
            </DetailBtnWrap>
          ) : (
            <DetailBtnWrap>
              <DetailBtn
                onClick={editClick}
                color={detail.writedTo === "cap" ? blue : red}
              >
                수정
              </DetailBtn>
              <DetailBtn
                onClick={deleteClick}
                color={detail.writedTo === "cap" ? blue : red}
              >
                삭제
              </DetailBtn>
            </DetailBtnWrap>
          )}
        </DetailBox>
      </DetailVh>
    </DetailBg>
  );
}

export default Detail;
