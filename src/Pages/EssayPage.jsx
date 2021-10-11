/* eslint-disable no-useless-computed-key */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import EssayTag from '../Component/EssayTag';
import detail from '../Data/DetailEssayData';
import SideEssayCard from '../Component/SideEssayCard';
import { essayFilter } from '../Utils/utils';
import LikeandCommentNumber from '../Component/LikeandCommentNumber';
import Comment from '../Component/Comment';
import WriterInformationinEssay from '../Component/WriterInformationinEssay';
import EssayTitleandWriter from '../Component/EssayTitleandWriter';

const useStyles = makeStyles({
  main: {
    position: 'relative',
    zIndex: '0',
    padding: '64px',
    ['@media (max-width:769px)']: {
      padding: '32px',
    },
    ['@media (max-width:550px)']: {
      padding: '16px',
    },
  },
  title: {
    fontSize: '1.953rem',
    marginBottom: '24px',
    fontWeight: '700',
    ['@media (max-width:769px)']: {
      fontSize: '1.72rem',
      marginBottom: '8px',
    },
  },
  essayTitle: {
    fontSize: '2.441rem',
  },
  essayContentBold: {
    lineHeight: '160%',
    margin: '24px 0 64px',
    fontFamily: 'Lora',
    fontWeight: '700',
  },
  essayContent: {
    lineHeight: '160%',
    margin: '24px 0 64px',
    fontFamily: 'Lora',
    ['@media (max-width:769px)']: {
      margin: '16px 0 32px',
    },
    ['@media (max-width:550px)']: {
      margin: '8px 0 16px',
    },
  },
});

function EssayPage() {
  // const dispatch = useDispatch();
  // get essay id data from redux store and filter data source using essay id data
  const essayID = useSelector((state) => state.open.id);
  const filteredEssays = essayFilter(essayID);

  // save like and comment data from datasource to redux store
  // useEffect(() => {
  //   dispatch(saveLike(filteredEssays[0].like));
  //   dispatch(saveComment(filteredEssays[0].comment));
  // }, []);

  // scroll restoration
  useEffect(() => {
    document.body.scrollTop = 0;
  });

  // Styling Component
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.main} columnSpacing={4} rowSpacing={{ xs: 2, md: 6 }}>
        <Grid item lg={8}>
          <EssayTitleandWriter essay={filteredEssays[0]} />
          <article>
            <p id="essay" className={classes.essayContent}>
              <b className={classes.essayContentBold}>POJOK - </b>
              {filteredEssays[0].essay}
            </p>
          </article>
          <section>
            <EssayTag tag={filteredEssays[0].tag} />
          </section>

          <section>
            <LikeandCommentNumber
              id={filteredEssays[0].id}
            />
          </section>

          <section>
            <WriterInformationinEssay essay={filteredEssays[0]} />
          </section>

          <section>
            <Comment id={filteredEssays[0].id} />
          </section>
        </Grid>
        <Grid item lg={4}>
          <h3 className={classes.title}>Artikel Terkait</h3>
          <SideEssayCard data={detail} firstTag={filteredEssays[0].tag[0].label} />
        </Grid>
      </Grid>
    </>
  );
}

export default EssayPage;
