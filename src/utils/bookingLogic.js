import { calculateTravelTime } from "./calculateTravelTime";

// Generate combinations of size k from array (k <= 5 so safe)
function getCombinations(arr, k) {
  const results = [];
  const temp = [];

  function backtrack(start) {
    if (temp.length === k) {
      results.push([...temp]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      temp.push(arr[i]);
      backtrack(i + 1);
      temp.pop();
    }
  }

  backtrack(0);
  return results;
}

// Travel time of a set = travel between first and last room (sorted)
function getSetTravelTime(selectedRooms) {
  const sorted = [...selectedRooms].sort((a, b) => {
    if (a.floor !== b.floor) return a.floor - b.floor;
    return a.pos - b.pos;
  });

  const first = sorted[0];
  const last = sorted[sorted.length - 1];

  return calculateTravelTime(first, last);
}

export function bookRooms(rooms, count) {
  const availableRooms = rooms.filter((r) => r.status === "available");

  if (availableRooms.length < count) {
    return { success: false, message: "Not enough rooms available!", rooms };
  }

  // ✅ 1) SAME FLOOR PRIORITY FIRST
  const floorsMap = {};
  availableRooms.forEach((r) => {
    if (!floorsMap[r.floor]) floorsMap[r.floor] = [];
    floorsMap[r.floor].push(r);
  });

  let bestSameFloor = null;
  let bestSameFloorTime = Infinity;

  for (const floor in floorsMap) {
    const floorRooms = floorsMap[floor].sort((a, b) => a.pos - b.pos);

    if (floorRooms.length >= count) {
      // Pick best consecutive block for minimal travel time
      for (let i = 0; i <= floorRooms.length - count; i++) {
        const block = floorRooms.slice(i, i + count);
        const time = getSetTravelTime(block);

        if (time < bestSameFloorTime) {
          bestSameFloorTime = time;
          bestSameFloor = block;
        }
      }
    }
  }

  if (bestSameFloor) {
    const updatedRooms = rooms.map((room) => {
      if (bestSameFloor.some((s) => s.roomNumber === room.roomNumber)) {
        return { ...room, status: "booked" };
      }
      return room;
    });

    return {
      success: true,
      rooms: updatedRooms,
      booked: bestSameFloor,
      travelTime: bestSameFloorTime,
    };
  }

  // ✅ 2) ELSE: MINIMUM TRAVEL TIME ACROSS FLOORS
  const combos = getCombinations(availableRooms, count);

  let bestCombo = null;
  let bestTime = Infinity;

  for (const combo of combos) {
    const time = getSetTravelTime(combo);
    if (time < bestTime) {
      bestTime = time;
      bestCombo = combo;
    }
  }

  const updatedRooms = rooms.map((room) => {
    if (bestCombo.some((s) => s.roomNumber === room.roomNumber)) {
      return { ...room, status: "booked" };
    }
    return room;
  });

  return {
    success: true,
    rooms: updatedRooms,
    booked: bestCombo,
    travelTime: bestTime,
  };
}
