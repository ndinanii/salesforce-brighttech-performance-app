import { createElement } from 'lwc';
import ConfirmTaskButton from 'c/confirmTaskButton';

describe('c-confirm-task-button', () => {
    
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders the button with the correct label', () => {
        // Arrange
        const element = createElement('c-confirm-task-button', {
            is: ConfirmTaskButton
        });

        // Act
        document.body.appendChild(element);

        // Assert
        const button = element.shadowRoot.querySelector('lightning-button');
        expect(button).not.toBeNull();
        expect(button.label).toBe('Confirm Completion');
    });

    it('fires the "taskcomplete" event when clicked', () => {
        // Arrange
        const element = createElement('c-confirm-task-button', {
            is: ConfirmTaskButton
        });
        document.body.appendChild(element);
        
        // Setup event listener
        const handler = jest.fn();
        element.addEventListener('taskcomplete', handler);

        // Act
        const button = element.shadowRoot.querySelector('lightning-button');
        button.click();

        // Assert
        // Check if the handler was called exactly once
        expect(handler).toHaveBeenCalledTimes(1);
    });
});