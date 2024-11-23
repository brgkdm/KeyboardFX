import { handleKeyPress, updateDisplay, highlightKey, removeHighlight } from './keyHandler.js';

const keys = document.querySelectorAll('.key');
const inputDisplay = document.querySelector('.input-display');
let keyAttr = null;

keys.forEach((key) => {
    key.addEventListener('click', (event) => {
        const keyText = key.innerText;
        const keyAttr = event.target.getAttribute("data-key")
        handleKeyPress(keyText, inputDisplay);
        updateDisplay(keyText, inputDisplay);
        highlightKey(keyText, keyAttr);
    });
});

const getTargetElement = (key, code) => {
    const target = document.querySelector(`[data-key='${key.toLocaleUpperCase()}']`)
    if (target) {
        target.focus()
        keyAttr = target.getAttribute('data-key')
    } else {
        const specialKeyAttr = document.querySelector(`[data-key=${code}]`)
        specialKeyAttr.focus()
        keyAttr = specialKeyAttr.getAttribute('data-key')
    }
}
document.addEventListener('keydown', (event) => {
    getTargetElement(event.key,event.code)
    const physicalKey = event.key;
    const mappedKey = keyMapping(physicalKey);
    handleKeyPress(mappedKey, inputDisplay);
    updateDisplay(mappedKey, inputDisplay);
    highlightKey(mappedKey, keyAttr);
});

document.addEventListener('keyup', (event) => {
    getTargetElement(event.key,event.code)

    const physicalKey = event.key;
    const mappedKey = keyMapping(physicalKey);
    removeHighlight(mappedKey, keyAttr);
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
