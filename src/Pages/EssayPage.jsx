/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

function EssayPage() {
  const dispatch = useDispatch();
  const essayID = useSelector((state) => state.open.id);
  const filteredEssays = essayFilter(essayID);

  // like and comment configuration
  useEffect(() => {
    dispatch(saveLike(filteredEssays[0].like));
    dispatch(saveComment(filteredEssays[0].comment));
  }, []);

  return (
    <div className="content">
      <div className="content-main">
        <EssayTitleandWriter essay={filteredEssays[0]} />
        <article>
          <p>
            {filteredEssays[0].essay}
          </p>
        </article>
        <section>
          <p>tag :</p>
          <EssayTag tag={filteredEssays[0].tag} />
        </section>

        <section>
          <WriterInformationinEssay essay={filteredEssays[0]} />
        </section>

        <section>
          <LikeandCommentNumber />
        </section>

        <section className="content-main-comments">
          <Comment />
        </section>
      </div>
      <aside>
        <h3>Topics</h3>
        <div className="aside-topics">
          <SideEssayCard data={detail} firstTag={filteredEssays[0].tag[0].label} />
        </div>
      </aside>
    </div>
  );
}

export default EssayPage;
