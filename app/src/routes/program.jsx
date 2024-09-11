export default function Programme() {
    return (
        <div id="program">
            <div id="reminder">
                <p id="reminder__weekend">UN WEEK-END DE MARIAGE&nbsp;!</p>
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
            <h1>Le programme</h1>
            <div id="saturday">
                <p>Samedi 21 juin 2025</p>
                <div className="timeline">
                    <img src="./civil-ceremony.svg" alt="Cérémonie civile à 13h" />
                    <img src="./secular-ceremony.svg" alt="Cérémonie laïque à 15h" />
                    <img src="./photo-shoot.svg" alt="Séance photo à 16h" />
                    <img src="./cocktail.svg" alt="Cocktail à 18h30" />
                    <img src="./dinner.svg" alt="Dîner à 20h30" />
                    <img src="./dancing-party.svg" alt="Soirée dansante à 23h" />
                    <img src="./lights-out.svg" alt="Extinction des feux à 4h" />
                </div>
            </div>
            <div id="sunday">
                <p>Dimanche 22 juin 2025</p>
                <div className="timeline">
                    <img src="./brunch.svg" alt="Brunch à 12h" />
                    <img src="./time-to-go.svg" alt="Grand départ à 17h" />
                </div>
            </div>
        </div>
    )
}