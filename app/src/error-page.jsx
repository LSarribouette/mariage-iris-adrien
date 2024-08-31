import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oups</h1>
            <p>Désolée, une erreur est survenue.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p><a href="/">Reviens à l'accueil !</a></p>
        </div>
    );
}