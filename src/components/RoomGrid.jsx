import RoomBox from "./RoomBox";

export default function RoomGrid({ rooms }) {
  const floors = {};

  rooms.forEach((room) => {
    if (!floors[room.floor]) floors[room.floor] = [];
    floors[room.floor].push(room);
  });

  return (
    <div className="space-y-6">
      {Object.keys(floors)
        .sort((a, b) => b - a) // Floor 10 on top
        .map((floor) => (
          <div key={floor}>
            <h2 className="font-bold mb-2">Floor {floor}</h2>

            <div className="grid grid-cols-10 gap-2">
              {floors[floor]
                .sort((a, b) => a.pos - b.pos)
                .map((room) => (
                  <RoomBox key={room.roomNumber} room={room} />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}
