function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteContainer = document.getElementById('noteContainer');
    
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.textContent = noteText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function() {
            noteContainer.removeChild(noteElement);
        };

        noteElement.appendChild(deleteButton);

        noteContainer.appendChild(noteElement);
        noteInput.value = '';
    }
}

