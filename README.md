# Website Momee.id

This repository is for developing website for Momee promotional and marketing

Instruksi Instalasi untuk Proyek React
Untuk menjalankan proyek React ini secara lokal, ikuti langkah-langkah berikut:

## 1. Clone Repositori
```bash
git clone https://github.com/Bangkit-Capstone-2024/Capstone-Web-Promotional.git
Ganti nama-anda dan nama-repositori dengan username GitHub Anda dan nama repositori Anda.
```
## 2. Instal Dependensi
 Masuk ke direktori proyek dan instal dependensi yang diperlukan menggunakan npm:

```bash
cd Capstone-Web-Promotional
npm install
npm install react-bootstrap bootstrap 
```
3. Setel Variabel Lingkungan
Buat file .env di root proyek dan tambahkan variabel lingkungan berikut:
```bash
nano .env
REACT_APP_BASE_URL=http://localhost:5173/
```
> Ganti http://localhost:5173/ dengan URL dasar dari server lokal Anda jika berbeda.

4. Running on Server Development
   
Mulai server pengembangan untuk melihat proyek di browser Anda:

```bash
npm run dev
```
> Perintah ini akan mengompilasi aplikasi React dan membukanya di browser web default Anda. Jika tidak terbuka secara otomatis, Anda dapat membuka http://localhost:5173 di browser Anda atau sesuai dengan port localhost anda.

5. Running on Server Production

```bash
npm run build
npm run start:pm2
```
### Catatan Tambahan
- Pastikan Node.js dan npm terinstal di mesin Anda. Anda dapat mengunduhnya dari nodejs.org.
- Sesuaikan `REACT_APP_BASE_URL` di file `.env` dengan URL server backend atau endpoint API Anda jika diperlukan.
- Untuk build production, gunakan `npm run build` dan `npm run deploy` isi direktori build ke platform hosting Anda.
`
