function loaderremover () {
    setTimeout (() => {
        document.getElementById('Starting-loader').style.display='none';
        document.getElementById('main-container').style.display='';
    },2500)
};


  const shortCards = document.querySelectorAll('.short-card');

  shortCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoUrl = card.querySelector('video').src;
      openShortViewer(videoUrl); // this function is already defined
    });
  });



 function openShortViewer(videoUrl) {
  const viewer = document.getElementById('shortViewer');
  const video = document.getElementById('shortViewerVideo');
  video.src = videoUrl;
  viewer.style.display = 'flex';
  video.play();
}

function closeShortViewer() {
  const viewer = document.getElementById('shortViewer');
  const video = document.getElementById('shortViewerVideo');
  viewer.style.display = 'none';
  video.pause();
  video.src = '';
}



loaderremover ();