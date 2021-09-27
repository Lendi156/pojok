import detail from '../Data/DetailEssayData';

const essayFilter = (essayID) => detail
  .filter((essay) => essay.id
    .toUpperCase()
    .includes(essayID.toUpperCase()));

export default essayFilter;
