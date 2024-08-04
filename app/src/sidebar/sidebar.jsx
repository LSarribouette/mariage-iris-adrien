import { NavLink } from "react-router-dom";
import './sidebar.css';
import { useState } from "react";

export default function Sidebar() {
    const [isClosed, setIsClosed] = useState(true);
    const toggleMenu = () => setIsClosed(!isClosed);

    const linkState = ({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : "";

    return (
        <>
            <div id="sidebar">
                <div id="top-banner">
                    <div onClick={toggleMenu} id={isClosed ? "burger-plus" : "burger-cross"}>✕</div>
                    <div id="title">Iris et Adrien</div>
                </div>
                <nav className={isClosed ? "closed" : "open"} id="nav-displayed">
                    <div>
                        <ul>
                            <li>
                                <NavLink to={`/`} className={linkState}>En bref</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/lieu`} className={linkState}>Lieu</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/hebergement`} className={linkState}>Hébergement</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/cadeau-mariage`} className={linkState}>Cadeau de mariage</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/participation`} className={linkState}>Envie de participer ?</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/inspirations-tenues`} className={linkState}>Inspirations pour les tenues</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to={`/confirmation-presence`} className={linkState} id="confirmation">Confirmation de présence</NavLink>
                    <div id="logos"><a href="https://github.com/LSarribouette/mariage-iris-adrien"><img src="github-mark.svg" alt="Logo Github" height="30" /></a></div>
                </nav>
            </div >
        </>
    )
}
