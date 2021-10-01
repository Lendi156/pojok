/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import EssayTag from '../Component/EssayTag';
import detail from '../Data/DetailEssayData';
import SideEssayCard from '../Component/SideEssayCard';
import {
  saveLike, saveComment,
} from '../Redux/likeandComment';
import essayFilter from '../Utils/essayFilter';
import LikeandCommentNumber from '../Component/LikeandCommentNumber';
import Comment from '../Component/Comment';
import WriterInformationinEssay from '../Component/WriterInformationinEssay';
import EssayTitleandWriter from '../Component/EssayTitleandWriter';

const useStyles = makeStyles({
  main: {
    position: 'relative',
    zIndex: '0',
    padding: '72px 112px 36px',
  },
  title: {
    fontSize: '1.953rem',
    margin: '0 0 24px',
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
  },
});

function EssayPage() {
  const dispatch = useDispatch();
  const essayID = useSelector((state) => state.open.id);
  const filteredEssays = essayFilter(essayID);

  // like and comment configuration
  useEffect(() => {
    dispatch(saveLike(filteredEssays[0].like));
    dispatch(saveComment(filteredEssays[0].comment));
  }, []);

  // Styling Component
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.main} columnSpacing={4}>
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
            <LikeandCommentNumber />
          </section>

          <section>
            <WriterInformationinEssay essay={filteredEssays[0]} />
          </section>

          <section className="content-main-comments">
            <Comment />
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
