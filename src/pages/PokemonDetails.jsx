import { useParams } from "react-router-dom";
import "../styles/pokemondetails.css";
import { Link } from "react-router-dom";

export function PokemonDetails() {
  const params = useParams();
  console.log(params.name);

  return (
    <div>
      <div className="card card-body ">
        <div className="pokemonimage">
          <img src="" alt="imagePokemon" />
          <h2 className="text">{params.name}</h2>
        </div>
      </div>
      <Link to ="/pokemonlist" className="btn btn-primary">Volver</Link>
    </div>
  );
}
