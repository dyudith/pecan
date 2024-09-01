document.querySelectorAll('.flag').forEach(function(flag) {
    flag.addEventListener('click', function() {
        var selectedLanguage = this.getAttribute('data-lang');
        var elementsToTranslate = document.querySelectorAll('[data-en]');

        elementsToTranslate.forEach(function(element) {
            var translation = element.getAttribute('data-' + selectedLanguage);
            if (translation) {
                element.textContent = translation;
            }
        });
    });
});

const video = document.getElementById('video-banner');
video.playbackRate = 0.5;