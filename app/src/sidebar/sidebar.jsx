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
                    <div onClick={toggleMenu} id={isClosed ? "burger-plus" : "burger-cross"} className={linkState}>✕</div>
                    <div id="title">Iris et Adrien</div>
                </div>
                <nav className={isClosed ? "closed" : "open"} id="nav-displayed">
                    <div>
                        <ul>
                            <li>
                                <NavLink to={`/`} className={linkState} onClick={toggleMenu}>En bref</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/lieu`} className={linkState} onClick={toggleMenu}>Lieu</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/hebergement`} className={linkState} onClick={toggleMenu}>Hébergement</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/cadeau-mariage`} className={linkState} onClick={toggleMenu}>Cadeau de mariage</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/participation`} className={linkState} onClick={toggleMenu}>Envie de participer ?</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/inspirations-tenues`} className={linkState} onClick={toggleMenu}>Inspirations pour les tenues</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to={`/confirmation-presence`} className={linkState} onClick={toggleMenu} id="confirmation">Confirmation de présence</NavLink>
                    <div id="logos"><a href="https://github.com/LSarribouette/mariage-iris-adrien"><img src="github-mark.svg" alt="Logo Github" height="30" /></a></div>
                </nav>
            </div >
        </>
    )
}
