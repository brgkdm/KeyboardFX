import { handleKeyPress, updateDisplay, highlightKey, removeHighlight } from './keyHandler.js';

const keys = document.querySelectorAll('.key');
const inputDisplay = document.querySelector('.input-display');

keys.forEach((key) => {
    key.addEventListener('click', () => {
        const keyText = key.innerText;
        updateDisplay(keyText, inputDisplay);
        highlightKey(keyText);
        handleKeyPress(keyText);
    });
});

document.addEventListener('keydown', (event) => {
    const physicalKey = event.key;
    const mappedKey = keyMapping(physicalKey);
    updateDisplay(mappedKey, inputDisplay);
    highlightKey(mappedKey);
    handleKeyPress(mappedKey);
});

document.addEventListener('keyup', (event) => {
    const physicalKey = event.key;
    const mappedKey = keyMapping(physicalKey);
    removeHighlight(mappedKey);
});

document.addEventListener('DOMContentLoaded', () => {
    inputDisplay.innerText = '';
});

function keyMapping(physicalKey) {
    const keyMap = {
        " ": "Space",
        "Enter": "Enter",
        "Backspace": "Backspace",
        "Shift": "Shift",
        "Control": "Ctrl",
        "Alt": "Alt",
        "Meta": "Win",
        "ArrowUp": "↑",
        "ArrowDown": "↓",
        "ArrowLeft": "←",
        "ArrowRight": "→",
    };
    
    return keyMap[physicalKey] || physicalKey;
}
