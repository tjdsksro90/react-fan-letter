import { styled } from "styled-components";

export const blue = {
  basic: "#3747ff",
  light: "#838cf5",
  dark: "#1e29ab",
  back: "#c7c9ff",
};

export const red = {
  basic: "#e50000",
  light: "#ff4c4c",
  dark: "#a70000",
  back: "#ffbbbb",
};

export const HeaderBg = styled.header`
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

export const HeaderH1 = styled.h1`
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

export const HeaderUl = styled.ul`
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

export const HeaderLi = styled.li`
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

export const FooterStyle = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  background: black;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const MainWrap = styled.div`
  background-color: #000;
`;
export const BasicWrap = styled.main`
  width: 420px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const FormWrap = styled.form`
  margin-top: 20px;
  background: #ccc;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const FormSpan = styled.span`
  width: 100%;
  display: flex;
`;
export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FormButton = styled.button`
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

export const ListUl = styled.ul`
  background: #ccc;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  transition: all 0.3s;
`;

export const ListLi = styled.li`
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

export const ListImgWrap = styled.article`
  width: 60px;
  height: 60px;
`;

export const ListImgFigure = styled.figure`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #e1e1e1;
  overflow: hidden;
`;

export const ListImg = styled.img`
  width: 100%;
`;

export const ListTextWrap = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  min-width: 0;
`;

export const ListTextTitle = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 900;
`;

export const ListTextTime = styled.time`
  font-size: 12px;
  color: #000;
`;

export const ListTextDesc = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000;
`;
export const SearchWrap = styled.div`
  display: flex;
  gap: 5px;
  > span {
    flex: 1;
  }
`;
export const SearchSapn = styled.span`
  display: flex;
  input {
    height: 30px;
    flex: 1;
    padding: 0 8px;
    border: 0;
    border-radius: 5px;
  }
`;

export const DetailBg = styled.div`
  background-image: url("/img/background.jpg");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.color.dark};
  background-blend-mode: multiply;
  width: 100%;
`;

export const DetailHome = styled.span`
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

export const DetailVh = styled.div`
  min-height: 100vh;
`;
export const DetailBox = styled.div`
  text-align: center;
  position: relative;
  top: 150px;
  width: 420px;
  max-width: 90%;
  margin: 0 auto;
  padding: 30px;
  background: #dfdfdf;
`;
export const DetailImg = styled.figure`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  overflow: hidden;
  background: #ccc;
`;
export const DetailImg100 = styled.img`
  width: 100%;
`;
export const DetailH2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  line-height: 1.2;
  color: ${(props) => props.color.dark};
`;
export const DetailTime = styled.time`
  font-size: 14px;
  margin-top: 20px;
  display: block;
`;
export const DetailTo = styled.div`
  margin-top: 10px;
  font-style: italic;
`;
export const DetailContent = styled.div`
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
export const DetailBtnWrap = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const DetailBtn = styled.button`
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
