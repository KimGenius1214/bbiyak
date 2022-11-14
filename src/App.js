import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import HeaderHtml from "./common/HeaderHtml";
import LatestMovieSection from "./features/movie/latest";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
      <Route exact path="/users/:id" element={<MyPage />}></Route>
      <Route path="/movie/:id" element={<MovieDetail />}></Route>
      {/* <Route path="/event" element={<Event />}></Route>
      <Route path="/event/:id" element={<EventDetail />}></Route>
      <Route path="/qna" element={<Qna />}></Route>
      <Route path="/qna/:id" element={<QnaDetail />}></Route> */}
    </Routes>
  );
}

export default App;
