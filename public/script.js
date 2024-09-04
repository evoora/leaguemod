document.getElementsByClassName('explore')[0].addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Scroll to the section
    document.getElementsByClassName('features-section')[0].scrollIntoView({ behavior: 'smooth' });

    // Smoothly adjust scroll position slightly after scrolling
    setTimeout(function() {
        let targetScroll = window.scrollY - 80; // Adjust target scroll position
        let intervalId = setInterval(function() {
            if (window.scrollY <= targetScroll || window.scrollY === 0) {
                clearInterval(intervalId); // Stop scrolling when the target position is reached
            } else {
                window.scrollBy(0, -1); // Scroll up in small steps
            }
        }, 10); // Adjust the interval speed as needed
    }, 500); // Adjust the delay if necessary
});
        // Add 'active' class to the clicked image
        this.classList.add('active');

        // Update the video source
        const videoSrc = this.getAttribute('data-video');
        const videoElement = document.querySelector('.interactive-functions #function-video');
        videoElement.querySelector('source').src = videoSrc;
        videoElement.load(); // Reload video to reflect new source

        // Update the description
        const description = this.getAttribute('data-description');
        document.querySelector('.interactive-functions #description p').textContent = description;
    


function openTab(evt, tabName) {
    // Hide all tab content
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Remove "active" class from all tab buttons
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    // Show the current tab and add "active" class to the clicked button
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.classList.add("active");
}

function showVideo(videoId) {
    // Hide all video containers
    var videos = document.getElementsByClassName("video-container2");
    for (var i = 0; i < videos.length; i++) {
        videos[i].classList.remove('active');
    }

    // Show the clicked video
    var videoToShow = document.getElementById(videoId);
    if (videoToShow) {
        videoToShow.classList.add('active');
    }
}

