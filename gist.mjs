import fetch from 'node-fetch';

// Get the URL from command-line arguments
const gistUrl = process.argv[2];

if (!gistUrl) {
    console.error('Please provide a URL as an argument.');
    process.exit(1);
}

fetch(`${gistUrl}/raw`)
    .then(response => response.text())
    .then(data => {
        console.log('Gist content:', data);
    })
    .catch(error => {
        console.error('Error fetching Gist:', error);
    });