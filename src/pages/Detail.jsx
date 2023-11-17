import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import data from "../fakeData.json";
import styled from "styled-components";
import {
  DetailBg,
  DetailBox,
  DetailBtn,
  DetailBtnWrap,
  DetailContent,
  DetailH2,
  DetailHome,
  DetailImg,
  DetailImg100,
  DetailTime,
  DetailTo,
  DetailVh,
  blue,
  red,
} from "assets/BasicStyle";

function Detail() {
  const navigate = useNavigate();
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
