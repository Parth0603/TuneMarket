
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const title = document.getElementById('music-title').value;
    const artist = document.getElementById('artist-name').value;
    const file = document.getElementById('music-file').files[0];
    const price = document.getElementById('price').value;

    // Create a new music item object
    const musicItem = {
        title: title,
        artist: artist,
        price: price,
        file: URL.createObjectURL(file) // Create a URL for the uploaded file
    };

    // Save the music item to local storage
    saveMusicItem(musicItem);
    // Display the uploaded music
    displayMusicItem(musicItem);

    // Reset the form
    document.getElementById('upload-form').reset();
});

// Function to save music items to local storage
function saveMusicItem(musicItem) {
    let musicList = JSON.parse(localStorage.getItem('musicList')) || [];
    musicList.push(musicItem);
    localStorage.setItem('musicList', JSON.stringify(musicList));
}

// Function to display music items
function displayMusicItem(musicItem) {
    const musicListDiv = document.getElementById('music-list');
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
    `;
    musicListDiv.appendChild(musicItemDiv);
}

// Function to load music items from local storage on page load
function loadMusicItems() {
    const musicList = JSON.parse(localStorage.getItem('musicList')) || [];
    musicList.forEach(musicItem => {
        displayMusicItem(musicItem);
    });
}

// Function to remove all music items
function removeAllMusic() {
    localStorage.removeItem('musicList'); // Clear local storage
    document.getElementById('music-list').innerHTML = ''; // Clear displayed music
}

// Load music items when the page loads
window.onload = loadMusicItems;

// Add event listener for the Remove All button
document.getElementById('remove-all').addEventListener('click', removeAllMusic);
