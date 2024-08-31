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
                                <NavLink to={`/`} className={linkState ? linkState : "active"} onClick={toggleMenu}>Invitation</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/theme`} className={linkState} onClick={toggleMenu}>Thème et dress code</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/programme`} className={linkState} onClick={toggleMenu}>Programme et lieux</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/hebergement`} className={linkState} onClick={toggleMenu}>Hébergement</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/cadeaux-mariage`} className={linkState} onClick={toggleMenu}>Cadeaux de mariage</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/confirmation-presence`} className={linkState} onClick={toggleMenu} id="confirmation">Confirmation de présence</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div id="logos"><a href="https://github.com/LSarribouette/mariage-iris-adrien"><img src="github-mark.svg" alt="Logo Github" height="30" /></a></div>
                </nav>
            </div >
        </>
    )
}
