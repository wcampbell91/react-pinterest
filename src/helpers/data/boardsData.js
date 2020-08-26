import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBoardsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getSingleBoardById = (boardId) => axios.get(`${baseUrl}/boards/${boardId}.json`);

const deleteSingleBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

const createBoard = (newBoard) => axios.post(`${baseUrl}/boards.json`, newBoard);

const updateBoard = (boardId, updatedBoard) => axios.put(`${baseUrl}/boards/${boardId}.json`, updatedBoard);

export default {
  getBoardsByUid,
  getSingleBoardById,
  deleteSingleBoard,
  createBoard,
  updateBoard,
};
