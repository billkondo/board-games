import Board from 'domain/battleship/types/Board';
import Ship from 'domain/battleship/types/Ship';
import ShipNotInBoard from 'domain/battleship/errors/ShipNotInBoard';

const removeShipFromBoard = (shipToBeRemoved: Ship, board: Board): Board => {
  const filteredShips = board.ships.filter(
    (ship) => ship.id !== shipToBeRemoved.id
  );

  if (filteredShips.length === board.ships.length) throw new ShipNotInBoard();

  return {
    ...board,
    ships: filteredShips,
  };
};

export default removeShipFromBoard;
