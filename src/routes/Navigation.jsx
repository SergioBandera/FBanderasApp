import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ClientsTable from "../pages/ClientsTable";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees/login" element={<Login />} />
      <Route path="/clients/table" element={<ClientsTable />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default Navigation;
