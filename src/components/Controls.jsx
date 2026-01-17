export default function Controls({
  roomsCount,
  setRoomsCount,
  onRandom,
  onReset,
  onBook,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-6">
      <input
        type="number"
        value={roomsCount}
        onChange={(e) => setRoomsCount(e.target.value)}
        placeholder="No of Rooms"
        className="border px-3 py-2 rounded-md w-full sm:w-48"
        min="1"
        max="5"
      />

      <button
        onClick={onBook}
        className="px-4 py-2 rounded-md bg-blue-600 text-white"
      >
        Book
      </button>

      <button
        onClick={onRandom}
        className="px-4 py-2 rounded-md bg-orange-600 text-white"
      >
        Random
      </button>

      <button
        onClick={onReset}
        className="px-4 py-2 rounded-md bg-gray-800 text-white"
      >
        Reset
      </button>
    </div>
  );
}
