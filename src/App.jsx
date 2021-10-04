/* eslint-disable no-useless-computed-key */
/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import {
  Route, Switch, withRouter,
} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import HomePage from './Pages/HomePage';
import EssayPage from './Pages/EssayPage';
import SearchResultPage from './Pages/SearchResultPage';
import TagFilterPage from './Pages/TagFilterPage';
import WriterEssaysPage from './Pages/WriterEssaysPage';
import clearTagData from './Utils/clearTagData';
import Header from './Component/Header';
import Footer from './Component/Footer';

const useStyles = makeStyles({
  app: {
    minHeight: '100vh',
    position: 'relative',
    paddingBottom: '176px',
    ['@media (max-width:769px)']: {
      paddingBottom: '144px',
    },
    ['@media (max-width:550px)']: {
      paddingBottom: '112px',
    },
  },
});

function App() {
  // clear session storage for search feature after changing page
  // const location = useLocation();
  // const purge = async () => {
  //   await persistor.purge();
  // };
  // useEffect(() => {
  //   setTimeout(() => purge(), 200);
  // }, [location]);

  // fucntion to clear topics data
  clearTagData();

  // Styling Component
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Essay" exact component={EssayPage} />
          <Route path="/Search" exact component={withRouter(SearchResultPage)} />
          <Route path="/Filter" exact component={withRouter(TagFilterPage)} />
          <Route path="/Writer" exact component={withRouter(WriterEssaysPage)} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
