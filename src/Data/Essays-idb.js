/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../Globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const likeAndCommentEssaysIdb = {
  async getEssay(id) {
    if (!id) {
      return;
    }

    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllEssays() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putEssay(essay) {
    // eslint-disable-next-line no-prototype-builtins
    if (!essay.hasOwnProperty('id')) {
      return;
    }

    return (await dbPromise).put(OBJECT_STORE_NAME, essay);
  },
  async deleteEssay(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default likeAndCommentEssaysIdb;
