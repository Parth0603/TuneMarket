
// // Function to check if user is logged in
// function checkLogin() {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user) {
//         document.getElementById('login-section').style.display = 'none';
//         document.getElementById('music-list').style.display = 'block';
//         loadMusicItems();
//     } else {
//         document.getElementById('login-section').style.display = 'block';
//         document.getElementById('music-list').style.display = 'none';
//     }
// }

// // Function to handle login form submission
// document.getElementById('login-form')?.addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get user data from form
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Check if the user exists in local storage
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user && user.email === email && user.name === name && user.password === password) {
//         document.getElementById('login-section').style.display = 'none';
//         document.getElementById('music-list').style.display = 'block';
//         loadMusicItems();
//     } else {
//         alert("Invalid name, email, or password. Please try again.");
//     }
// });

// Function to load and display music items from local storage
function loadMusicItems() {
    const musicList = JSON.parse(localStorage.getItem('musicList')) || [];
    const musicItemsDiv = document.getElementById('music-items');


  
    
      
        musicList.forEach(musicItem => {
            const musicItemDiv = document.createElement('div');
            musicItemDiv.classList.add('music-item');
            musicItemDiv.innerHTML = `
                <h3>${musicItem.title}</h3>
                <p>Artist: ${musicItem.artist}</p>
                <p>Price: $${musicItem.price}</p>
                <audio controls>
                    <source src="${musicItem.file}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <button class="buy-button">Buy Now</button>
            `;
            musicItemsDiv.appendChild(musicItemDiv);
        });
    }


// Load login state when the page loads
window.onload = loadMusicItems;
