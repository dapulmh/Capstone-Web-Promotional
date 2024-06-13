# Capstone-Web-Promotional

This repository is for developing website for Momee promotional and marketing

Instruksi Instalasi untuk Proyek React
Untuk menjalankan proyek React ini secara lokal, ikuti langkah-langkah berikut:

1. Clone Repositori
   Clone repositori ke mesin lokal Anda menggunakan Git:

bash
Salin kode
git clone https://github.com/dapulmh/Capstone-Web-Promotional.git
Ganti nama-anda dan nama-repositori dengan username GitHub Anda dan nama repositori Anda.

2. Instal Dependensi
   Masuk ke direktori proyek dan instal dependensi yang diperlukan menggunakan npm:

bash
Salin kode
cd nama-repositori
npm install
npm install react-bootstrap bootstrap 3. Setel Variabel Lingkungan
Buat file .env di root proyek dan tambahkan variabel lingkungan berikut:

plaintext
Salin kode
REACT_APP_BASE_URL=http://localhost:5173/
Ganti http://localhost:5173/ dengan URL dasar dari server pengembangan lokal Anda jika berbeda.

4. Jalankan Server Pengembangan
   Mulai server pengembangan untuk melihat proyek di browser Anda:

bash
Salin kode
npm run dev
Perintah ini akan mengompilasi aplikasi React dan membukanya di browser web default Anda. Jika tidak terbuka secara otomatis, Anda dapat membuka http://localhost:3000 di browser Anda atau sesuai dengan port localhost anda.

Catatan Tambahan
Pastikan Node.js dan npm terinstal di mesin Anda. Anda dapat mengunduhnya dari nodejs.org.
Sesuaikan REACT_APP_BASE_URL di file .env dengan URL server backend atau endpoint API Anda jika diperlukan.
Untuk build produksi, gunakan npm run build dan deploy isi direktori build ke platform hosting Anda.
Dengan langkah-langkah ini selesai, proyek React seharusnya sudah berjalan dengan baik secara lokal di mesin Anda. Selamat mengoding!
