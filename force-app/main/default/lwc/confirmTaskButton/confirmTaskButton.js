import { LightningElement } from 'lwc';

export default class ConfirmTaskButton extends LightningElement {

    /**
     * Handles the button click event.
     * Dispatches a 'taskcomplete' custom event to notify parent components.
     */
    handleClick() {
        const completeEvent = new CustomEvent('taskcomplete', {
            bubbles: true, // Allows the event to bubble up the DOM
            composed: true // Allows the event to cross the Shadow DOM boundary
        });
        this.dispatchEvent(completeEvent);
    }
}