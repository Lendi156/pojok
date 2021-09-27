/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import {
  Route, Switch,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './Pages/HomePage';
import EssayPage from './Pages/EssayPage';
import SearchResultPage from './Pages/SearchResultPage';
import TagFilterPage from './Pages/TagFilterPage';
import WriterEssaysPage from './Pages/WriterEssaysPage';
import detail from './Data/DetailEssayData';
import { essayFound, displayingResult } from './Redux/searchEssay';
import clearTagData from './Utils/clearTagData';

function App() {
  const dispatch = useDispatch();

  // get search result and keyword from store
  const searchResult = useSelector((state) => state.search.list);
  const searchKeyword = useSelector((state) => state.search.keyword);

  // clear session storage for search feature after changing page
  // const location = useLocation();
  // const purge = async () => {
  //   await persistor.purge();
  // };
  // useEffect(() => {
  //   setTimeout(() => purge(), 200);
  // }, [location]);

  // funtion to search article
  const SearchArticle = async () => {
    const searchElement = document.querySelector('#search');
    const keyword = searchElement.value;
    const filteredEssays = detail
      .filter((essay) => essay.title
        .toUpperCase()
        .includes(keyword.toUpperCase()));

    await dispatch(essayFound(filteredEssays));
    await dispatch(displayingResult(keyword));
    window.location.href = '/Search';
  };

  // fucntion to clear topics data
  clearTagData();

  return (
    <div className="App">
      <header className="App-header">
        <h3>Logo</h3>
        <a href="/">Home</a>
        <a href="/Essay">Essay</a>
        <a href="/Search">Search</a>
        <a href="/Filter">Filter</a>
        <a href="/Writer">Writer</a>
        <span>{searchResult.length}</span>
        <span>{searchKeyword}</span>
        <input placeholder="Search Essay" id="search" type="search" />
        <button type="button" className="searchButton" onClick={() => { SearchArticle(); }}>cari</button>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Essay" exact component={EssayPage} />
          <Route path="/Search" exact component={SearchResultPage} />
          <Route path="/Filter" exact component={TagFilterPage} />
          <Route path="/Writer" exact component={WriterEssaysPage} />
        </Switch>
      </main>
      <footer>
        <a href="/">Tentang</a>
        <a href="/">Pedoman Media Siber</a>
        <a href="/">Kontak Kami</a>
        <h3>© 2021 PoJOK.CO-All Rights Reserved</h3>
      </footer>
    </div>
  );
}

export default App;
