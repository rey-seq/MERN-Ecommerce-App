import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/home-page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
