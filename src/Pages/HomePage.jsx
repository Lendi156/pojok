import React from 'react';
import logo from '../logo.svg';
import Topics from '../Component/Topics';
import EssayCard from '../Component/EssayCard';
import detail from '../Data/DetailEssayData';

function HomePage() {
  return (
    <>
      <img src={logo} alt="hero" width="200" />
      <div className="content">
        <div>
          <div>
            <EssayCard data={detail} />
          </div>
        </div>
        <aside>
          <h3>Topics</h3>
          <Topics />
        </aside>
      </div>
    </>
  );
}

export default HomePage;
