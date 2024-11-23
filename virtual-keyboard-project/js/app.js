import { handleKeyPress, updateDisplay, highlightKey, removeHighlight } from './keyHandler.js';

const keys = document.querySelectorAll('.key');
const inputDisplay = document.querySelector('.input-display');
keys.forEach((key) => {
    key.addEventListener('click', () => {
        const keyText = key.innerText;
        console.log(keyText)
        handleKeyPress(keyText, inputDisplay);
        updateDisplay(keyText, inputDisplay);
        highlightKey(keyText);
    });
});

document.addEventListener('keydown', (event) => {
    const physicalKey = event.key;
    const mappedKey = keyMapping(physicalKey);
    handleKeyPress(mappedKey, inputDisplay);
    updateDisplay(mappedKey, inputDisplay);
    highlightKey(mappedKey);
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
        "Escape": "Esc",
        "ContextMenu": "Menu"
    };

    return keyMap[physicalKey] || physicalKey;
}
