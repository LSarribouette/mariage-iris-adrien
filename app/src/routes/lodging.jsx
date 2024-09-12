export default function Lodging() {
    return (
        <div id="lodging-container">
            <div id="lodging">
                <img src="./lodging.svg" alt="Hébergement" />
                <p>En dehors de la cérémonie civile qui se déroulera à Martillac, tous les autres événements prévus pour ce week-end de mariage prendront place au Domaine de l’archey à Saint-Médard-d’Eyrans. </p>
                <p>Afin de pouvoir profiter sereinement des festivités jusqu’au bout de la nuit, nous vous recommandons de prévoir à l’ avance votre lieu d’hébergement pour la nuit du samedi 21 au dimanche 22 juin. </p>
                <p>Veuillez noter que nous avons déjà procédé à la réservation de toutes les chambres disponibles du Domaine de l’archey pour les mariés et les participants à l’organisation de ce week-end, il ne vous sera donc pas possible d’y réserver votre nuit. </p>
                <p>Afin de vous aider dans vos recherches, nous avons rassemblés quelques adresses autour du domaine.</p>
                <div id="menu">
                    <h1>Chambres d'hôtes</h1>
                    <div className="places">
                        <a className="place" href="https://www.leniddanslavigne33.fr/" target="_blank" rel="noopener noreferrer">
                            <p className="place-name">Le nid de la vigne</p>
                            <p>à 2,1 km (1 chambre)</p>
                            <p>6 Chemin de la Borderie, 33650 La Brède</p>
                            <p>Tel : 06 03 15 41 19</p>
                        </a>
                        <a className="place" href="https://maps.app.goo.gl/nFc5aco8AtwNnLfXA" target="_blank" rel="noopener noreferrer">
                            <p className="place-name">Vignoble océan NOPE</p>
                            <p>à 4 km (2 chambres)</p>
                            <p>11 Avenue du Moulin, 33650 La Brède</p>
                            <p>Tel : 05 56 78 48 06</p>
                        </a>
                    </div>
                    <img src="./lodging-arrow.svg" alt="Flèche dorée en décoration" id="arrow" />
                    <div className="places">
                        <a className="place" href="https://maps.app.goo.gl/ScL7ZsKFTFuwfmsXA" target="_blank" rel="noopener noreferrer">
                            <p className="place-name">Domaine de Malleprat NOPE</p>
                            <p>à 3,7 km (4 chambres)</p>
                            <p>Chemin des Marguerites, 33650 Martillac</p>
                            <p>Tel : 06 12 06 38 24</p>
                        </a>
                        <a className="place" href="https://maps.app.goo.gl/2iHnuuprND4mvAzU8" target="_blank" rel="noopener noreferrer">
                            <p className="place-name">Chateau Galibert</p>
                            <p>à 5 km (5 chambres)</p>
                            <p>780 Chemin Port des places, 33140 Cadaujac</p>
                            <p>Tel : 05 56 30 73 78</p>
                        </a>
                    </div>
                    <h1>Hôtels</h1>
                    <div className="places">
                        <a className="place" href="https://residence-hoteliere-alizes.fr/" target="_blank" rel="noopener noreferrer">
                            <p className="place-name">Résidence hôtelière Alizes</p>
                            <p>à 3,9 km</p>
                            <p>50 Avenue Charles de Gaulle, 33650 La Brède</p>
                            <p>Tel : 05 57 71 32 65</p>
                        </a>
                        <a className="place" href="https://www.hotels-akena.com/hotel/hotel-akena-bordeaux-la-brede" target="_blank" rel="noopener noreferrer">
                            <p className="place-name">Relais Akéna***</p>
                            <p>à 4 km</p>
                            <p>1 Avenue de Viana, 33650 La Brède</p>
                            <p>Tel : 05 57 71 32 65</p>
                        </a>
                    </div>
                    <img src="./lodging-arrow.svg" alt="Flèche dorée en décoration" id="arrow" />
                    <div className="places">
                        <a className="place" href="https://sources-caudalie.com/" target="_blank" rel="noopener noreferrer">
                            <p className="place-name">Les sources de Caudalie*****</p>
                            <p>à 5 km</p>
                            <p>Smith Haut-Lafitte, 33650 Martillac</p>
                            <p>Tel : 05 57 83 83 83</p>
                        </a>
                        <a className="place" href="https://all.accor.com/hotel/1996/index.fr.shtml" target="_blank" rel="noopener noreferrer">
                            <p className="place-name">Ibis styles***</p>
                            <p>à 11 km</p>
                            <p>10 Avenue du Maréchal Leclerc, 33140 Villenave d’Ornon</p>
                            <p>Tel : 05 56 87 82 86</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}