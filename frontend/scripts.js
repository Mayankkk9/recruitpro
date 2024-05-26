document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Perform login API call
    console.log('Logging in', email, password);
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    // Perform registration API call
    console.log('Registering', company, email, password, confirmPassword);
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const role = document.getElementById('role').value;
    const location = document.getElementById('location').value;
    // Perform search API call and display results
    console.log('Searching for candidates', role, location);
    const candidateList = document.getElementById('candidate-list');
    candidateList.innerHTML = ''; // Clear previous results
    // Dummy candidate data
    const candidates = [
        { name: 'Alice', role: 'Software Engineer', location: 'New York' },
        { name: 'Bob', role: 'Product Manager', location: 'San Francisco' },
    ];
    candidates.forEach(candidate => {
        const card = document.createElement('div');
        card.className = 'candidate-card';
        card.innerHTML = `
            <h3>${candidate.name}</h3>
            <p>Role: ${candidate.role}</p>
            <p>Location: ${candidate.location}</p>
            <button>Save for Later</button>
        `;
        candidateList.appendChild(card);
    });
});
