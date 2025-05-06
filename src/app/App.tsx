import { Contact, Home, Reservations } from "@/features";
import Login from "@/features/auth/pages/log-in/Login";
import Signup from "@/features/auth/pages/sign-up/Signup";
import { useAuth } from "@/features/auth/store";
import Destinations from "@/features/destinations/pages/Destinations";
import {
  Confirmation,
  Fares,
  FlightsReservation,
  Passengers,
  Payment,
  Seats,
  Services,
} from "@/features/reservations/pages/flights-reservation";
import Profile from "@/features/user/pages/profile/Profile";
import Layout from "@/shared/layout/Layout";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const { loadToken } = useAuth();

  useEffect(() => {
    loadToken();
  }, [loadToken]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="reservations/flights" element={<FlightsReservation />} />
          <Route path="reservations/flights/:flightId/fares" element={<Fares />} />
          <Route
            path="reservations/flights/:flightId/passengers"
            element={<Passengers />}
          />
          <Route path="reservations/flights/:flightId/seats" element={<Seats />} />
          <Route
            path="reservations/flights/:flightId/services"
            element={<Services />}
          />
          <Route
            path="reservations/flights/:flightId/payment"
            element={<Payment />}
          />
          <Route
            path="reservations/flights/:flightId/confirmation"
            element={<Confirmation />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/destinations" element={<Destinations />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
