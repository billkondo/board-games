import Position from './Position';
import Ship from './Ship';

type PositionedShip = {
  startPosition: Position;
  endPosition: Position;
  ship: Ship;
};

export default PositionedShip;
