import Ship from './Ship';

type Board = {
  rows: number;
  columns: number;

  ships: Array<Ship>;
};

export default Board;
