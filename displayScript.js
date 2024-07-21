// displayScript.js
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve data from local storage
    
    let userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        let userDataElement = document.getElementById('userData');
        userDataElement.innerHTML = `
            <td>${userData.fullName}</td>
            <td>${userData.collegeName}</td>
            <td>${userData.dob}</td>
            <td>${userData.address}</td>
            <td>${userData.email}</td>
        `;
    }
});
