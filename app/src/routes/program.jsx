export default function Programme() {
    return (
        <div id="program">
            <div id="reminder">
                <p id="reminder__weekend">UN WEEK-END DE MARIAGE !</p>
                <p id="reminder__dates">Les 21 et 22 juin 2025</p>
            </div>
            <h1>Les Lieux</h1>
            <div id="locations">
                <h2>La mairie</h2>
                <div className="location">
                    <a href="https://maps.app.goo.gl/umuCCswchy2bbQ579" target="_blank" rel="noopener noreferrer">
                        <p>Mairie de Martillac</p>
                        <p>14 avenue Charles de Gaule</p>
                        <p>33650 Martillac</p>
                    </a>
                </div>
                <h2>Le domaine</h2>
                <div className="location">
                    <a href="https://maps.app.goo.gl/oTAzoJqzBzerqQGb6" target="_blank" rel="noopener noreferrer">
                        <p>Le  Domaine de Larchey</p>
                        <p>28 route de Larchey</p>
                        <p>33650 Saint-Médard-d'Eyrans</p>
                    </a>
                </div>
            </div>
        </div>
    )
}