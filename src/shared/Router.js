import Main from "pages/Main";
import Detail from "pages/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "shared/Layout";
import GlobalStyle from "assets/GlobalStyle";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
