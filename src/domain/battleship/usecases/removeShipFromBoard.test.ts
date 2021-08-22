import Board from 'domain/battleship/types/Board';
import Ship from 'domain/battleship/types/Ship';
import ShipNotInBoard from 'domain/battleship/errors/ShipNotInBoard';

import removeShipFromBoard from 'domain/battleship/usecases/removeShipFromBoard';

describe('removeShipFromBoard', () => {
  const board: Board = {
    columns: 10,
    rows: 10,
    ships: [
      {
        id: '1',
        name: '1',
        size: 5,
      },
      {
        id: '2',
        name: '2',
        size: 4,
      },
    ],
  };

  test('it should remove ship from board', () => {
    const shipToBeRemoved = board.ships[0];
    const updatedBoard = removeShipFromBoard(shipToBeRemoved, board);

    expect(updatedBoard.ships).toEqual([
      {
        id: '2',
        name: '2',
        size: 4,
      },
    ]);
  });

  test('it should throw ShipNotInBoard if ship is not in board', () => {
    const shipToBeRemoved: Ship = {
      id: '3',
      name: '3',
      size: 4,
    };

    const t = () => {
      removeShipFromBoard(shipToBeRemoved, board);
    };

    expect(t).toThrowError(ShipNotInBoard);
  });
});
