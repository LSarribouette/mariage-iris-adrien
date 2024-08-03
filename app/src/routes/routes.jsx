import { NavLink, Outlet, useNavigation } from "react-router-dom";

export default function Root() {
    const linkState = ({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : "";
    const navigation = useNavigation();

    return (
        <>
            <div id="sidebar">
                <div id="title">Iris et Adrien</div>
                <nav>
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
                            <li>
                                <NavLink to={`/todo`} className={linkState}>TODO</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to={`/confirmation-presence`} className={linkState} id="confirmation">Confirmation de présence</NavLink>
                </nav>
                <div id="logos"><a href="https://github.com/LSarribouette/mariage-iris-adrien"><img src="github-mark.svg" alt="Logo Github" height="30" /></a></div>
            </div >
            <div id="detail" className={navigation.state === "loading" ? "loading" : ""}><Outlet /></div>
        </>
    );
}