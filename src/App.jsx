import { useState } from "react";
import "./App.css";
import { generateRooms } from "./utils/generateRooms";
import Controls from "./components/Controls";
import RoomGrid from "./components/RoomGrid";
import { bookRooms } from "./utils/bookingLogic";

function App() {
  const [rooms, setRooms] = useState(generateRooms());
  const [roomsCount, setRoomsCount] = useState("");
  const [message, setMessage] = useState("");
  const [travelTime, setTravelTime] = useState(null);
  const [bookedRooms, setBookedRooms] = useState([]);

  const handleReset = () => {
    setRooms(generateRooms());
    setRoomsCount("");
    setMessage("");
    setTravelTime(null);
    setBookedRooms([]);
  };

  const handleRandom = () => {
    const updated = rooms.map((room) => {
      // ~30% occupied
      const isOccupied = Math.random() < 0.3;
      return {
        ...room,
        status: isOccupied ? "occupied" : "available",
      };
    });

    setRooms(updated);
    setMessage("Random occupancy generated ✅");
    setTravelTime(null);
    setBookedRooms([]);
  };

  const handleBook = () => {
    const count = parseInt(roomsCount, 10);

    if (isNaN(count) || count < 1 || count > 5) {
      setMessage("Enter valid number of rooms (1 to 5)");
      setTravelTime(null);
      setBookedRooms([]);
      return;
    }

    const result = bookRooms(rooms, count);

    if (!result.success) {
      setMessage(result.message);
      setTravelTime(null);
      setBookedRooms([]);
      return;
    }

    setRooms(result.rooms);
    setTravelTime(result.travelTime);

    const bookedNums = result.booked
      .map((r) => r.roomNumber)
      .sort((a, b) => a - b);

    setBookedRooms(bookedNums);
    setMessage(`Booked ${count} room(s) ✅`);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}>
        Hotel Room Reservation System
      </h1>

      {/* ✅ Legend */}
      <div className="flex gap-4 mb-4 flex-wrap text-sm font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-gray-100 border border-gray-300 inline-block rounded"></span>
          Available
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-600 inline-block rounded"></span>
          Booked
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-600 inline-block rounded"></span>
          Occupied
        </div>
      </div>

      <Controls
        roomsCount={roomsCount}
        setRoomsCount={setRoomsCount}
        onRandom={handleRandom}
        onReset={handleReset}
        onBook={handleBook}
      />

      {/* ✅ Result Panel */}
      {(message || travelTime !== null || bookedRooms.length > 0) && (
        <div className="mb-6 p-4 border rounded-md bg-gray-50">
          {message && <p className="font-semibold">{message}</p>}

          {travelTime !== null && (
            <p className="mt-1 font-semibold">
              Travel Time: <span className="text-blue-700">{travelTime} mins</span> ⏱️
            </p>
          )}

          {bookedRooms.length > 0 && (
            <p className="mt-2">
              <span className="font-semibold">Booked Rooms:</span>{" "}
              {bookedRooms.join(", ")}
            </p>
          )}
        </div>
      )}

      <RoomGrid rooms={rooms} />
    </div>
  );
}

export default App;
