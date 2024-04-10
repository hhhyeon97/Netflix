import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import TvPage from './pages/Tv/TvPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutTest from './layout/LayoutTest';
// 홈페이지
// 영화 전체 페이지 (검색)
// 영화 디테일 페이지
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
          {/* Tv 페이지에 대해 TestLayout 적용 */}
          <Route path="tv" element={<LayoutTest />}>
            <Route index element={<TvPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
