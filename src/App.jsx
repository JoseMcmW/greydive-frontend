import React from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Form from "./components/form/Form";
import Surveys from "./components/surveys/Surveys";
import UpdateSurvey from "./components/updateForm/UpdateSurvey";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

/* axios.defaults.baseURL = "http://localhost:3001/"; */
axios.defaults.baseURL = "https://greydive-backend-production.up.railway.app/";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <h1 className="font-title font-bold text-3xl mt-7 mb-5 text-red">
        Challenge Greydive
      </h1>
      {location.pathname !== "/surveys" ? (
        <button
          onClick={() => navigate("/surveys")}
          className="w-40 h-10 text-white bg-red font-pharagrap rounded mb-3"
        >
          Mostrar Encuentas
        </button>
      ) : null}

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/surveys" element={<Surveys/>} />
        <Route path="/edit/:id" element={<UpdateSurvey/>} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
