// Mengambil elemen kartu dari DOM
const card = document.getElementById('card');

// Deteksi pergerakan kursor di seluruh jendela browser
window.addEventListener('mousemove', (e) => {
    // Hitung titik tengah layar dan selisih posisi kursor
    const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    // Terapkan rotasi sumbu X dan Y pada kartu secara real-time
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Kembalikan posisi kartu ke rata saat kursor keluar layar
window.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    card.style.transition = 'transform 0.5s ease';
});

// Hilangkan transisi saat kursor masuk kembali agar responsif
window.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});