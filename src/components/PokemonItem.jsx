export function PokemonItem(params) {
  const handleClick = () => {
    window.location.href = "/pokemondetails/" + params.name;
  };

  return (
    <div className="col-md-4 mt-2">
      <div className="card card-body btn btn-primary" onClick={handleClick}>
        <h2 className="card-title"> {params.name}</h2>
      </div>
    </div>
  );
}
