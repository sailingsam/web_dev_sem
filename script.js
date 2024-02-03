
    document.addEventListener('DOMContentLoaded', function () {
        const textarea = document.querySelector('.thoughts-input textarea');
        const postButton = document.querySelector('.post-button button');
        const commentsContainer = document.querySelector('.comments');

        postButton.addEventListener('click', function () {
            const thoughts = textarea.value.trim();
            if (thoughts !== '') {
                addComment(thoughts);
                textarea.value = ''; // Clear the textarea after posting
            }
        });

        function addComment(thoughts) {
            const commentItem = document.createElement('div');
            commentItem.classList.add('tweet-card');

            const topContainer = document.createElement('div');
            topContainer.classList.add('top-container');

            const userPhoto = document.createElement('div');
            userPhoto.classList.add('user-photo');
            userPhoto.innerHTML = '<img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="User Photo">';

            const content = document.createElement('div');
            content.classList.add('thoughts-input');
            content.innerHTML = '<p>' + thoughts + '</p>';

            topContainer.appendChild(userPhoto);
            topContainer.appendChild(content);
            commentItem.appendChild(topContainer);

            commentsContainer.appendChild(commentItem);
        }
    });
