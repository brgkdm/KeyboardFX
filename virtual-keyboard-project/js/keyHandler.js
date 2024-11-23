export function handleKeyPress(keyText, displayElement) {
    if (keyText === "Backspace") {
        displayElement.innerText = displayElement.innerText.slice(0, -1);
    } else if (keyText === "Enter") {
        console.log("Enter tuşuna basıldı");
    } else if (keyText.length === 1) {
        displayElement.innerText += keyText;
    }
}

export function updateDisplay(keyText, displayElement) {
    displayElement.innerText += keyText;
}

export function highlightKey(keyText, keyAttr) {
    const key = Array.from(document.querySelectorAll('.key')).find(k => {
        // return k.innerText.trim().toLowerCase() === keyText.trim().toLowerCase();
        return k.getAttribute("data-key") === keyAttr
    });
    if (key) {
        key.classList.add('active');
    }
}

export function removeHighlight(keyText) {
    const key = Array.from(document.querySelectorAll('.key')).find(k => {
        return k.innerText.trim().toLowerCase() === keyText.trim().toLowerCase();
    });
    if (key) {
        key.classList.remove('active');
    }
}
