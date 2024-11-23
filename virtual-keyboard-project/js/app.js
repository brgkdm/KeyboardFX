import { handleKeyPress, updateDisplay, highlightKey, removeHighlight } from './keyHandler.js';

const keys = document.querySelectorAll('.key');
const inputDisplay = document.querySelector('.input-display');
keys.forEach((key) => {
    key.addEventListener('click', () => {
        const keyText = key.innerText;
        if (keyText === "Backspace" || keyText === "Enter" || keyText === "Space") {
            handleKeyPress(keyText, inputDisplay);
        } else {
            updateDisplay(keyText, inputDisplay);
        }
        keys.forEach((k) => k.classList.remove("active"))
        highlightKey(keyText);
    });
});

document.addEventListener('keydown', (event) => {
    const physicalKey = event.key;
    const mappedKey = keyMapping(physicalKey);
    if (mappedKey === "Backspace" || mappedKey=== "Enter" || mappedKey === "Space") {
        handleKeyPress(mappedKey, inputDisplay);
    } else {
        updateDisplay(mappedKey, inputDisplay);
    }    highlightKey(mappedKey);
});

document.addEventListener('keyup', (event) => {
    const physicalKey = event.key;
    const mappedKey = keyMapping(physicalKey);
    keys.forEach((k) => k.classList.remove("active"))
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
