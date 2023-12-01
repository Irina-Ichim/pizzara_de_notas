function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteContainer = document.getElementById('noteContainer');
    
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.textContent = noteText;

        noteContainer.appendChild(noteElement);
        noteInput.value = '';
    }
}
