import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginLogic } from "../../helpers/loginLogic";
import LoginTemplate from "../templates/LoginTemplate";

export default function Login() {
  const navigate = useNavigate();
  const { user, handleChange, handleSubmit, error } = loginLogic(
    useState,
    navigate
  );

  return (
    <LoginTemplate>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-center border p-2">
          <input
            className="lg:w-full"
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            value={user.email}
            required
          />
        </div>
        <div className="mb-4 text-center border p-2">
          <input
            className="lg:w-full"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            value={user.password}
            required
          />
        </div>
        <div className="text-center pt-1 mb-12 pb-1 lg:w-12/12">
          <button className="bg-gradient w-full h-8" type="submit">
            Ingresar
          </button>
          <Link className="text-gray-500" to="/registro">
            ¿Deseas registrarte?
          </Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 text-red-800">
            {error?.response?.data?.data}
          </p>
        )}
      </form>
    </LoginTemplate>
  );
}
