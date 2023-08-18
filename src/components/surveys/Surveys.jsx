import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Surveys = () => {
  const navigate = useNavigate();
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    loadSurveys();
  }, []);

  const loadSurveys = async () => {
    try {
      const response = await axios.get("survey");
      setSurveys(response.data);
    } catch (error) {
      console.log("Error al cargar las encuentas:", error);
      toast.error("Error al cargar las encuentas");
    }
  };

  const handleEdit = (surveyId) => {
    // Redirigir a la página de edición con el ID de la encuesta
    navigate(`/edit/${surveyId}`);
  };

  const handleDelete = async (surveyId) => {
    try {
      // Eliminar la encuesta con el ID dado
      await axios.delete(`survey/${surveyId}`);
      // Recargar las encuestas después de eliminar
      loadSurveys();
      toast.success("Encuesta eliminada exitosamente");
    } catch (error) {
      console.log("Error al eliminar la encuesta:", error);
      toast.error("Error al eliminar la encuesta");
    }
  };

  return (
    <div className="w-screen h-auto bg-gray font-pharagrap text-xs p-1">
      <button
        className="w-10 bg-red text-white reounded my-2 py-1 "
        onClick={() => navigate("/")}
      >
        Atras
      </button>
      <h1 className="text-center text-xl font-title bg-gray-dark py-2">
        Tabla de Encuestas
      </h1>
      <div className="table-responsive overflow-x-auto">
        <table className="w-full" style={{ tableLayout: "fixed" }}>
          <thead className="bg-gray-medium">
            <tr className="h-10">
              <th>Nombre</th>
              <th>Email</th>
              <th>F.N.</th>
              <th>País</th>
              <th className="w-8 text-center">TyC</th>
              <th>Modif.</th>
            </tr>
          </thead>
          <tbody>
            {surveys.map((survey) => (
              <tr key={survey.id} className="h-8">
                <td className="max-w-xs overflow-hidden truncate text-center">
                  {survey.full_name}
                </td>
                <td className="max-w-xs overflow-hidden truncate text-center">
                  {survey.email}
                </td>
                <td className="max-w-xs overflow-hidden truncate text-center">
                  {survey.birth_date}
                </td>
                <td className="max-w-xs overflow-hidden truncate text-center">
                  {survey.country_of_origin}
                </td>
                <td className="max-w-xs overflow-hidden truncate text-center">
                  {survey.terms_and_conditions ? "Sí" : "No"}
                </td>
                <td>
                  {" "}
                  <div className="flex flex-col text-xs items-center justify-center">
                    <button
                      className="font-bold py-1 rounded"
                      onClick={() => handleEdit(survey.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </button>
                    <button
                      className="font-bold py-1 rounded"
                      onClick={() => handleDelete(survey.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Surveys;
