import ConfirmationForm from "../confirmation-form/confirmation-form";

export default function PresenceConfirmation() {
    return (
        <div id="zero-state" className="presence-confirmation">
            <h2>Confirmation de présence</h2>
            <div id="limit-date">Date limite : 15 janvier 2025</div>
            <ConfirmationForm />
        </div>
    );
}