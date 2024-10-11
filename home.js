// // Function to handle music upload form submission
// document.getElementById('upload-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get form data
//     const musicName = document.getElementById('music-name').value;
//     const author = document.getElementById('author').value;
//     const musicFile = document.getElementById('music-file').files[0];

//     // Create a URL for the uploaded file
//     const musicFileURL = URL.createObjectURL(musicFile);

//     // Create a new music object
//     const musicItem = {
//         title: musicName,
//         artist: author,
//         file: musicFileURL,
//     };

//     // Retrieve existing music list from local storage or initialize an empty array
//     const musicList = JSON.parse(localStorage.getItem('musicList')) || [];

//     // Add the new music item to the music list
//     musicList.push(musicItem);

//     // Save the updated music list back to local storage
//     localStorage.setItem('musicList', JSON.stringify(musicList));

//     // Clear the form
//     document.getElementById('upload-form').reset();

//     // Display success message
//     document.getElementById('upload-message').innerText = "Music uploaded successfully!";

//     // Update the displayed music cards
//     displayMusicCards();
// });

// // Function to display music cards from local storage
// function displayMusicCards() {
//     // Clear the existing music cards
//     const musicListDiv = document.getElementById('music-card');
//     musicListDiv.innerHTML = '';

//     // Retrieve music list from local storage
//     const musicList = JSON.parse(localStorage.getItem('musicList')) || [];

//     // Create a card for each music item
//     musicList.forEach(musicItem => {
//         const musicCard = document.createElement('div');
//         musicCard.classList.add('music-card');
//         musicCard.innerHTML = `
           
//              <div class="music-card">
//                 <div class="music-info">
//                     <h3>${musicItem.title}</h3>
//                     <p>Author: ${musicItem.artist}</p>
//                 </div>
//                 <audio controls>
//                     <source src="${musicItem.file}" type="audio/mpeg">
//                     Your browser does not support the audio element.
//                 </audio>
//             </div>
//         `;
//         musicListDiv.appendChild(musicCard);
//     });

//     // If no music is found, display a message
//     if (musicList.length === 0) {
//         musicListDiv.innerHTML = '<p>No music uploaded yet.</p>';
//     }
// }

// // Display music cards when the page loads
// window.onload = displayMusicCards;
function loadMusicItems() {
    const musicList = JSON.parse(localStorage.getItem('musicList')) || [];
    const musicItemsDiv = document.getElementById('music-list');
        console.log(musicList);
        
        musicList.forEach(musicItem => {
            const musicItemDiv = document.createElement('div');
            musicItemDiv.classList.add('music-item');
            musicItemDiv.innerHTML = `
               <div class="music-card">
                 <div class="music-info">
                     <h3>${musicItem.title}</h3>
                     <p>Author: ${musicItem.artist}</p>
                 </div>
                 <audio controls>
                     <source src="${musicItem.file}" type="audio/mpeg">
                     Your browser does not support the audio element.
                 </audio>
             </div>
            `;
            musicItemsDiv.appendChild(musicItemDiv);
        });
    }
    window.onload = loadMusicItems;
