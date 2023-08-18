import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { validate } from "../form/validate";
import dataEncuesta from "../api/dataEncuesta";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState({});
  const [form, setForm] = useState({});

  useEffect(() => {
    // Fetch existing survey data using the provided ID
    const fetchSurvey = async () => {
      try {
        const response = await axios.get(`survey/${id}`);
        setForm(response.data);
      } catch (error) {
        console.log("Error fetching survey data:", error);
      }
    };
    fetchSurvey();
  }, [id]);

  const handleInputChange = (event, name) => {
    const { value, type, checked } = event.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Realiza la validación para el campo específico
    setError(
      validate({ ...form, [name]: type === "checkbox" ? checked : value })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    // Realiza la validación antes de enviar
    const validationErrors = validate(form);
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Aquí puedes enviar el formulario

      let response = await axios.put(`survey/${id}`, form);
      if(response) {
        toast.success("Encuesta editada!");
        setTimeout(() => {
          setProcessing(false);
          setForm({
            name: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
          window.location.href = 'https://greydive-frontend.vercel.app/surveys'
        }, 4000);
      } else {
        toast.error("Error al editar encuesta.!");
      }

      return response;
    }
  };

  return (
    <div className="w-11/12 flex flex-col h-auto bg-gray opacity-100 font-pharagrap mb-8 p-0">
      <h1 className='font-title text-center font-bold text-xl mt-7 text-black'>Completa el formulario:</h1>
      <form onSubmit={handleSubmit} className="mt-5 lg:mt-14 mx-3 lg:mx-20">
        {dataEncuesta.items.map((item, index) => (
          <div key={index}>
            {item.type !== "submit" && (
              <>
                <label
                  htmlFor={item.name}
                  className="w-10/12 lg:w-367 text-sm text-left font-pharagrap tracking-normal text-label opacity-100"
                >
                  {item.label}
                </label>
                {item.type === "select" ? (
                  <select
                    name={item.name}
                    value={form[item.name] || ""}
                    onChange={(event) => handleInputChange(event, item.name)}
                    className="w-full h-8 lg:h-16 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text:lg lg:text-2xl pl-2 lg:pl-11"
                  >
                    <option value="" className="text-sm">Seleccione una opción</option>
                    {item.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option.value} className="w-16 text-sm">
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : item.type === "checkbox" ? (
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={form[item.name] || false}
                    onChange={(event) => handleInputChange(event, item.name)}
                    className="w-full h-5 mt-2 lg:h-10 lg:mb-8 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text:lg lg:text-2xl pl-2 lg:pl-11"
                  />
                ) : (
                  <input
                    type={item.type}
                    name={item.name}
                    value={form[item.name] || ""}
                    required={item.required}
                    onChange={(event) => handleInputChange(event, item.name)}
                    className="w-full h-8 lg:h-16 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text:md lg:text-2xl pl-2 lg:pl-11"
                  />
                )}
                <div
                  className={`w-full h-6 text pt-1 mb-4 transition-all duration-200 ease-in-out ${
                    error[item.name] ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {error[item.name] && (
                    <span className="text-red text-sm w-full">
                      {error[item.name]}
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
        <div className="flex flex-row justify-center">
          <button
            type="submit"
            disabled={
              processing ||
              Object.keys(error).length > 0 ||
              !form.full_name ||
              !form.email ||
              !form.birth_date ||
              !form.country_of_origin ||
              !form.terms_and_conditions
            }
            className={`w-20 h-10 lg:w-52 lg:h-20 bg-red rounded-lg text-md lg:text-2xl my-4 text-white font-pharagrap ${
              Object.keys(error).length > 0 ||
              !form.full_name ||
              !form.email ||
              !form.birth_date ||
              !form.country_of_origin ||
              !form.terms_and_conditions
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
          >
            {processing ? (
              <>
                <svg
                  className="animate-spin w-6 ml-7 lg:w-10 lg:ml-20 lg:mt-1"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-3.647z"
                  />
                </svg>
              </>
            ) : (
              "Enviar"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
