document.querySelectorAll('.destination img').forEach(img => {
    img.onclick = () => {
        let container = img.closest('.destination');
        let title = container.querySelector('h2');

        let previewOverlay = document.createElement('div');
        previewOverlay.classList.add('preview-overlay');

        let previewContent = document.createElement('div');
        previewContent.classList.add('preview-content');

        let previewImage = document.createElement('img');
        previewImage.src = img.src;

        let previewTitle= document.createElement('h2');
        previewTitle.innerText = title.innerText;

        let closeButton = document.createElement('span');
        closeButton.innerHTML = "&times;";
        closeButton.classList.add('close-preview');


        previewContent.appendChild(closeButton);
        previewContent.appendChild(previewImage);
        previewContent.appendChild(previewTitle);
        previewOverlay.appendChild(previewContent);

        document.body.appendChild(previewOverlay);

        closeButton.onclick = () => {
            document.body.removeChild(previewOverlay);
        };
    };
});

