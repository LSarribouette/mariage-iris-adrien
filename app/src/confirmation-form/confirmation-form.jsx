import { Form } from "react-router-dom";
import './confirmation-form.css';

export default function EditContact() {
    return (
        <>
            <Form action="">
                <div className="first-last-name">
                    <label for="first-name" required>Prénom</label>
                    <input type="text" aria-label="Prénom de l'invité·e" />
                </div>
                <div className="first-last-name">
                    <label for="last-name" required>Nom</label>
                    <input type="text" aria-label="Nom de famille de l'invité·e" />
                </div>
                <div className="age">que pour les invités supp
                    <div>
                        <label for="adult">Adulte</label>
                        <input type="radio" id="adult" name="age" value="adult" checked />
                    </div>
                    <div>
                        <label for="child">Enfant (moins de 12 ans)</label>
                        <input type="radio" id="child" name="age" value="child" />
                    </div>
                </div>
                <div className="meal">
                    <div id="meal-text">Préférence pour le plat principal :</div>
                    <div id="meal-options">
                        <div className="meal-option">
                            <input type="radio" id="classical" name="meal" value="classical" checked />
                            <label for="classical">Classique</label>
                        </div>
                        <div className="meal-option">
                            <input type="radio" id="vegeterian" name="meal" value="vegeterian" />
                            <label for="vegeterian">Végétarien</label>
                        </div>
                    </div>
                </div>
                <button id="add-participant">Ajouter un·e invité·e</button>
                <fieldset>
                    <legend>Dates de présence</legend>
                    <div id="dates">
                        <div className="dates-option">
                            <input type="radio" id="saturday-sunday" name="dates" value="saturday-sunday" checked />
                            <label for="saturday-sunday">Le samedi et le dimanche</label>
                        </div>
                        <div className="dates-option">
                            <input type="radio" id="saturday" name="dates" value="saturday" />
                            <label for="child">Uniquement le samedi</label>
                        </div>
                    </div>
                </fieldset>
                <div id="comment">
                    <label for="comment">Un petit mot ? Un commentaire ?</label>
                    <textarea name="comment" placeholder="Coucou Iris et Adrien..."></textarea>
                </div>
                <div id="send">
                    <input type="submit" value="Envoyer" onclick="return true" />
                </div>
            </Form>
        </>
    );
}