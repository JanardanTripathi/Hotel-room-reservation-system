export function generateRooms() {
  const rooms = [];

  // Floors 1 to 9 => 10 rooms each (101-110, 201-210, ...)
  for (let floor = 1; floor <= 9; floor++) {
    for (let pos = 1; pos <= 10; pos++) {
      rooms.push({
        roomNumber: floor * 100 + pos,
        floor,
        pos,
        status: "available", // available | booked | occupied
      });
    }
  }

  // Floor 10 => 7 rooms (1001-1007)
  for (let pos = 1; pos <= 7; pos++) {
    rooms.push({
      roomNumber: 1000 + pos,
      floor: 10,
      pos,
      status: "available",
    });
  }

  return rooms;
}
