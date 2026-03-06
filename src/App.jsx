import Signin from "./Components/Signin";
import CreateAcct from "./Components/CreateAcct";
import { BrowserRouter, Route, Routes } from "react-router";
import Onboarding from "./Components/Onboarding";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#212121]">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/create-account" element={<CreateAcct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
