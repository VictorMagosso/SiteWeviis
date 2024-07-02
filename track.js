window.addEventListener('load', function() {
    gtag('event', 'page_view', {
        'page_path': window.location.pathname,
        'page_title': document.title,
        'page_location': window.location.href
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('spotify-button').addEventListener('click', () => trackGA('spotify-button'));
    document.getElementById('deezer-button').addEventListener('click', () => trackGA('deezer-button'));
    document.getElementById('amazon-music-button').addEventListener('click', () => trackGA('amazon-music-button'));
    document.getElementById('last-release-button').addEventListener('click', () => trackGA('last-release-button'));
    document.getElementById('tiktok-icon-button').addEventListener('click', () => trackGA('tiktok-icon-button'));
    document.getElementById('ig-icon-button').addEventListener('click', () => trackGA('ig-icon-button'));
    document.getElementById('soundcloud-icon-button').addEventListener('click', () => trackGA('soundcloud-icon-button'));
    document.getElementById('youtube-icon-button').addEventListener('click', () => trackGA('youtube-icon-button'));
});

function trackGA(buttonId) {
    gtag('event', 'click', {
        'event_category': 'button',
        'event_label': buttonId,
        'value': 1
    });
}