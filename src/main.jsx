import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonList } from "./pages/PokemonList";
import { PokemonDetails } from "./pages/PokemonDetails";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/pokemonlist" Component={PokemonList} />
          <Route path="/register" Component={Register} />
          <Route path="/pokemondetails/:name" Component={PokemonDetails} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
