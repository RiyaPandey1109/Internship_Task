
document.getElementById('submitBtn').addEventListener('click', function(event) {
    
    let fullName = document.getElementById('fullName').value;
    let collegeName = document.getElementById('collegeName').value;
    let dob = document.getElementById('dob').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;

    
    let userData = {
        fullName: fullName,
        collegeName: collegeName,
        dob: dob,
        address: address,
        email: email
    };

   
    localStorage.setItem('userData', JSON.stringify(userData));
});

document.getElementById('dataBtn').addEventListener('click', function() {
    
    window.location.href = 'display_page.html';
});
