// Get the textarea element
const editor = document.getElementById('editor');

// Get the save button
const saveButton = document.getElementById('saveButton');

// Event listener for save button click
saveButton.addEventListener('click', () => {
    // Get the text from the textarea
    const text = editor.value;

    // Create a new Blob with the text content
    const blob = new Blob([text], { type: 'text/plain' });

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.txt';

    // Programmatically click the link to trigger the download
    link.click();
});
