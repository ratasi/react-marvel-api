import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      <p>ERROR! Página no encontrada</p>
      <Link to="/">
        <button>Volver a la web</button>
      </Link>
    </div>
  );
}
