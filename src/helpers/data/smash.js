import pinData from './pinData';
import boardsData from './boardsData';

const deleteBoardAndPins = (boardId) => new Promise((resolve, reject) => {
  boardsData.getSingleBoardById(boardId)
    .then((response) => {
      pinData.getPinsbyBoardId(boardId)
        .then((boardPins) => {
          boardPins.forEach((boardPin) => {
            const pinId = boardPin.id;
            pinData.deletePin(pinId)
              .catch((err) => console.error(err));
          });
          boardsData.deleteSingleBoard(boardId)
            .then(() => resolve());
        });
    })
    .catch((err) => reject(err));
});

export default { deleteBoardAndPins };
