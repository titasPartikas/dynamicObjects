const keyInput = document.querySelector('#key');
const valueInput = document.querySelector('#value');
const existingKeysSelect = document.querySelector('#existing-keys');
const updateBtn = document.querySelector('#update-btn');
const textareaInput = document.querySelector('.object-displayer');
const obj = {};
textareaInput.value = JSON.stringify(obj);
updateBtn.addEventListener('click', onClick)

function onClick() {
    if (valueInput.value) {
        if (keyInput.value) {
            if (!obj[keyInput.value]) {
                obj[keyInput.value] = valueInput.value;
                addExistingKeyToDropdown(keyInput.value);
            }
        }
        if (existingKeysSelect.value) {
            obj[existingKeysSelect.value] = valueInput.value;
        }
        textareaInput.value = JSON.stringify(obj)
    }
}

function addExistingKeyToDropdown(key) {
    const optionElement = document.createElement('option');
    optionElement.textContent = key;
    optionElement.value = key;

    existingKeysSelect.append(optionElement)
    existingKeysSelect.removeAttribute('disabled')
}