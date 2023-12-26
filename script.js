//your JS code here. If required.
document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate input
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Add book to the table
    addBookToTable(title, author, isbn);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});

function addBookToTable(title, author, isbn) {
    const tableBody = document.getElementById('book-list');
    
    // Create a new row
    const row = tableBody.insertRow();

    // Insert data into cells
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const isbnCell = row.insertCell(2);
    const actionCell = row.insertCell(3);

    titleCell.textContent = title;
    authorCell.textContent = author;
    isbnCell.textContent = isbn;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        tableBody.removeChild(row);
    });

    // Append delete button to the action cell
    actionCell.appendChild(deleteButton);
}
