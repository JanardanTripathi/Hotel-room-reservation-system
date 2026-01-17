export default function RoomBox({ room }) {
  const getStyles = () => {
    if (room.status === "booked")
      return "bg-green-600 text-white border-green-700";
    if (room.status === "occupied")
      return "bg-red-600 text-white border-red-700";
    return "bg-gray-100 text-black border-gray-300";
  };

  return (
    <div
      className={`p-2 rounded-md text-center font-semibold shadow-sm border ${getStyles()}`}
      title={`Room ${room.roomNumber} (${room.status})`}
    >
      {room.roomNumber}
    </div>
  );
}
