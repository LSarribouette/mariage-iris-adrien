import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div id="zero-state">
      <p>
        This is a demo for React Router.
        <br />
        Check out{" "}
        <a href="https://reactrouter.com">
          the docs at reactrouter.com
        </a>
        .
      </p>
      <NavLink to={`/todo`}>TODO</NavLink>
    </div>
  );
}