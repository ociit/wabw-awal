
// BUAT FITUR TABLE YANG BISA DIGESER"
document.addEventListener('DOMContentLoaded', function () {
    let next = document.querySelector('.nexti');
    let prev = document.querySelector('.previ');

    next.addEventListener('click', function() {
        let slide = document.querySelector('.slider');
        let items = document.querySelectorAll('.itema');
        if (items.length > 1) {
            slide.appendChild(items[0]); // Pindahkan item pertama ke akhir
        }
    });

    prev.addEventListener('click', function() {
        let slide = document.querySelector('.slider');
        let items = document.querySelectorAll('.itema');
        if (items.length > 1) {
            slide.insertBefore(items[items.length - 1], items[0]); // Pindahkan item terakhir ke awal
        }
    });
});


//BUAT FITUR VIDEO YANG CONNECTED KE YOUTUBE\
const container = document.querySelector(".video-preview"),
  video = container.querySelector("video"),
  background = container.querySelector("img"),
  modal = document.querySelector(".video-modal"),
  closeBtn = modal.querySelector(".close-btn");

container.onmouseover = () => {
  video.classList.add("is-animated");
  video.play();
  setTimeout(() => {
    background.classList.remove("is-animated");
  }, 500);
}

container.onmouseout = () => {
  background.classList.add("is-animated");
  setTimeout(() => {
    video.classList.remove("is-animated");
    video.pause();
  }, 500);
}

let iframeCreated = false;
let videoIframe;

container.onclick = () => {
  modal.classList.replace('none', 'show');

  setTimeout(() => {
    const youtubeContainer = modal.querySelector(".video");
    modal.classList.replace("inactive", "active");

    if(!iframeCreated){
      videoIframe = document.createElement("iframe");
      videoIframe.src = 'https://www.youtube.com/embed/QyhwSYhX09s?si=b02luGQN-9kN9pJR'
      videoIframe.title = 'YouTube video player'
      videoIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-meida; gyroscope; picture-in-picture; web-share';
      videoIframe.allowFullscreen = true;
      videoIframe.frameBorder = '0';
      youtubeContainer.appendChild(videoIframe);

      iframeCreated = true;
    }

    else {
      videoIframe.src = 'https://www.youtube.com/embed/QyhwSYhX09s?si=b02luGQN-9kN9pJR'
    }
  }, 100);
}

closeBtn.onclick = () => {
  modal.classList.replace('active', 'inactive');

  if(videoIframe) {
    videoIframe.src = 'https://www.youtube.com/embed/QyhwSYhX09s?si=b02luGQN-9kN9pJR'
  }

  setTimeout(() => {
    modal.classList.replace('show', 'none')
  }, 500);
}