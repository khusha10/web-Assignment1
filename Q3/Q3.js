document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        const formData = new FormData(this);
        displaySubmittedData(formData);
    }
});

document.getElementById('viewApplications').addEventListener('click', function() {
    document.getElementById('tableContainer').style.display = 'block';
});

function validateForm() {
    return true;
}

function displaySubmittedData(formData) {
    let tableHTML = '';
    for (const [key, value] of formData.entries()) {
        tableHTML += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }
    document.getElementById('dataTable').innerHTML = tableHTML;
}