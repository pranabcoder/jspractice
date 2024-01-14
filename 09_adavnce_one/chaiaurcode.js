const requestURL = 'https://api.github.com/users/pranabcoder';
const getProfilePicButton = document.querySelector('#myButton');
const profilePic = document.querySelector('#previewImage');
const displayProfileURLId = document.querySelector('#displayUrl');
const xhr = new XMLHttpRequest();
const getProfilePic = () => {
    xhr.open('GET', requestURL);
    xhr.onreadystatechange = function() {
        console.log('ReadyState', xhr.readyState);
        if(xhr.readyState === 4) {
            const data = JSON.parse(this.responseText);
            const imageURl = data.avatar_url;
            displayProfilePic(imageURl);
            displayProfileURL(imageURl);
        }
    }
    xhr.send();
};

const displayProfilePic = (imageURl) => {
    if(imageURl) {
        profilePic.src = imageURl;
    }
};

const displayProfileURL = (imageURl) => {
    if(imageURl) {
        const anchorTag = document.createElement('a');
        anchorTag.setAttribute('href', imageURl);
        anchorTag.textContent = imageURl;
         // Append the anchor tag to the span element
         displayProfileURLId.innerHTML = ''; // Clear existing content
         displayProfileURLId.appendChild(anchorTag);
    }
};
getProfilePicButton.addEventListener('click', getProfilePic);


    

    