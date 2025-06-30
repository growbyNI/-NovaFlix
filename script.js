function loaderremover () {
    setTimeout (() => {
        document.getElementById('Starting-loader').style.display='none';
        document.getElementById('main-container').style.display='';
    },2500)
};


  const shortCards = document.querySelectorAll('.short-card');
  const shortViewer = document.getElementById('shortViewer');
  const shortViewerVideo = document.getElementById('shortViewerVideo');

  shortCards.forEach(card => {
    card.addEventListener('click', () => {
      const video = card.querySelector('video');
      const src = video.getAttribute('src'); // ✅ Get clicked video's src

      shortViewerVideo.src = src;
      shortViewer.style.display = 'flex';
      shortViewerVideo.play(); // optional
    });
  });

  function closeShortViewer() {
    shortViewer.style.display = 'none';
    shortViewerVideo.pause();
    shortViewerVideo.src = ''; // clear video source
  }


loaderremover ();