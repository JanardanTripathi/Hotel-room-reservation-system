# 🏨 Hotel Room Reservation System

A **Hotel Room Reservation System** built using **React (Vite)** that allows users to book rooms efficiently based on the **assessment rules**.

---

## 📌 Project Overview

This application helps guests book up to **5 rooms** at a time.  
It follows **same-floor priority booking** and if booking on the same floor is not possible, it chooses rooms that result in the **minimum travel time**.

The system also supports:
- ✅ Random room occupancy generation  
- ✅ Reset functionality  
- ✅ Travel time calculation display  
- ✅ Clean and user-friendly UI  

---

## ✅ Features

### 🏢 Room Layout
- Total rooms: **97**
- Floors **1 to 9** → **10 rooms each**
- Floor **10** → **7 rooms**

### 🛏️ Booking
- User can book **1 to 5 rooms** at a time
- Only **available** rooms can be booked
- Booked rooms are highlighted on the UI

### ⏱️ Travel Time Logic
Travel time between rooms is calculated using:
- **Horizontal travel:** 1 minute per room difference
- **Vertical travel:** 2 minutes per floor difference

✅ Total travel time is shown for the booked room set.

### 🎲 Random Occupancy
- Generates random occupied rooms (to simulate real hotel scenario)
- Occupied rooms cannot be booked

### 🔄 Reset
- Resets the system back to default state (all rooms available)

---

## 🧠 Booking Algorithm (Logic)

### ✅ Step 1: Same Floor Priority
If a floor has enough available rooms for the request:
- Rooms are booked from the same floor
- Chooses the consecutive room block with minimum travel time

### ✅ Step 2: Minimum Travel Time Across Floors
If no single floor has enough rooms:
- The system generates combinations of rooms (up to 5)
- Selects the combination with the **minimum travel time**

---

## 🎨 Room Status Legend
- **Available** → Gray  
- **Booked** → Green  
- **Occupied** → Red  

---

## 🛠️ Tech Stack
- **React (Vite)**
- **JavaScript**
- **Tailwind CSS** (for UI styling)
- **Git + GitHub**

---

## 📂 Folder Structure

```txt
src/
 ├── components/
 │   ├── Controls.jsx
 │   ├── RoomBox.jsx
 │   └── RoomGrid.jsx
 │
 ├── utils/
 │   ├── bookingLogic.js
 │   ├── calculateTravelTime.js
 │   └── generateRooms.js
 │
 ├── data/
 │   └── constants.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```
## 🚀 How to Run Locally
### 1️⃣ Clone the repository
- git clone <https://github.com/JanardanTripathi/Hotel-room-reservation-system.git>
- cd hotel-room-reservation-system

### 2️⃣ Install dependencies
npm install

### 3️⃣ Start the development server
npm run dev

## 🌍 Deployment

This project can be deployed easily on Vercel or Netlify.

✅ Live Link: <https://hotel-booking-system-eta-ivory.vercel.app/>

## ✅ Future Improvements

- Add floor filter dropdown

- Add room search

- Improve booking combination optimization for larger constraints

- Add toast notifications

## 👤 Author

Janardan Tripathi
