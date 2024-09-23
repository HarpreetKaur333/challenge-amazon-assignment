
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); 
  
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const errorDiv = document.getElementById('error');
  
  
    if (name === '' || mobile === '' || email === '') {
        showError('All fields are required.');
        return;
    }
    
    if (!isValidName(name)) {
        showError('The Name should contain only letters and spaces, with a maximum length of 20 characters.');
        return;
    }
  
    if (!isValidMobile(mobile)) {
        showError('The Mobile number shouuld be exactly 10 digits long.');
        return;
    }
  
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address.');
        return;
    }
  
    hideError();
    addContactToTable(name, mobile, email);
  
  
    document.getElementById('name').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('email').value = '';
  });
  
  
  function isValidName(name) {
    return /^[a-zA-Z\s]{1,20}$/.test(name);
  }
  
  function isValidMobile(mobile) {
    return /^\d{10}$/.test(mobile);
  }
  
  
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z][a-zA-Z0-9.]{1,9}@[a-zA-Z]{2,20}\.[a-zA-Z]{2,10}$/;
    return emailPattern.test(email);
  }
  
  
  function addContactToTable(name, mobile, email) {
    const table = document.querySelector('table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${name}</td><td>${mobile}</td><td>${email}</td>`;
    table.appendChild(newRow);
  }
  
  
  function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.style.display = 'block';
    errorDiv.textContent = message;
  }
  
  
  function hideError() {
    const errorDiv = document.getElementById('error');
    errorDiv.style.display = 'none';
  }
  
  
  document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.trim();
    const rows = document.querySelectorAll('tbody tr');
  
    rows.forEach(row => {
        const mobile = row.children[1].textContent;
        if (mobile.includes(searchValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
  });
  
  