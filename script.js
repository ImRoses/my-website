let likeCount = 0;

function toggleHeart() {
    const heartButton = document.querySelector('.heart-button');
    const likeCountElement = document.getElementById('likeCount');
    const kadoMessage = document.getElementById('kadoMessage');

    // 'active' sınıfını ekleyerek animasyonu başlat
    heartButton.classList.add('active');

    // Beğeni sayısını artır
    likeCount++;
    likeCountElement.textContent = likeCount;

    // Kado mesajını göster
    kadoMessage.classList.remove('hidden');
    kadoMessage.style.opacity = 1; // Görünür hale getir

    // Kado mesajını 1 saniye sonra gizle
    setTimeout(() => {
        kadoMessage.style.opacity = 0; // Kaybolmasını sağla
        setTimeout(() => {
            kadoMessage.classList.add('hidden'); // Gizle
        }, 300); // 300ms bekleyerek gizle
    }, 1000); // 1 saniye (1000 ms)

    // Belirli bir süre sonra (1 saniye) animasyonu geri al (parlama efektini kaldır)
    setTimeout(() => {
        heartButton.classList.remove('active');
    }, 1000); // 1 saniye (1000 ms)
}

// Kalp butonuna tıklama olayını dinle
const heartButton = document.querySelector('.heart-button');
heartButton.addEventListener('click', toggleHeart);