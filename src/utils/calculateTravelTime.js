export function calculateTravelTime(roomA, roomB) {
  const floorDiff = Math.abs(roomA.floor - roomB.floor);
  const posDiff = Math.abs(roomA.pos - roomB.pos);

  // Vertical = 2 min per floor, Horizontal = 1 min per room
  return floorDiff * 2 + posDiff * 1;
}
