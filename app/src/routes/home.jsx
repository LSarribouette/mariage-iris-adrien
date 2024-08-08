import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div id="zero-state">
      <h1>Iris et Adrien</h1>
      <p>21 au 22 juin 2025</p>
      <p>Domaine de l'Archey</p>
      <p>Saint Médard d'Eyrans</p>
      <br />
      <NavLink to={`/todo`}>TODO</NavLink>
    </div>
  );
}