import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Login from "./Login";
//import AuthenticatedRoute from "../components/Auth";
import { NotFound } from "./404";
import { LPRManagment, EventsManagment, ListManagement, Users, FaceManagment,  AgentsManagment } from "../components";
const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />}>
        </Route> */}
        <Route path="/lpr" element={<LPRManagment />}></Route>
        <Route path="/" element={<EventsManagment />}></Route>
        <Route path="/users"  element={<Users />}></Route>
        <Route path="/list" element={<ListManagement />}></Route>
        <Route path="/face" element={<FaceManagment  />}></Route>
        <Route path="/agent" element={<AgentsManagment />}></Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;

