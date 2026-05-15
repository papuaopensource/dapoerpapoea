# Panduan Kontribusi

Terima kasih telah tertarik untuk berkontribusi pada Dapoer Papoea. Dokumen ini menjelaskan cara menyiapkan lingkungan pengembangan dan alur kerja kontribusi.

## Tech Stack

- [AstroJS](https://astro.build) — framework untuk membangun website statis yang cepat
- [TailwindCSS](https://tailwindcss.com) — utility-first CSS framework
- [Preline UI](https://preline.co) — komponen UI berbasis Tailwind

## Memulai

### 1. Clone Repository

```
git clone https://github.com/papuaopensource/dapoer-papoea.git
cd dapoer-papoea
```

### 2. Install Dependencies

```
pnpm install
```

### 3. Jalankan Mode Development

```
pnpm dev
```

Akses di `http://localhost:4321`.

### 4. Build untuk Produksi

```
pnpm build
```

## Struktur Proyek

```
├── public/               # Asset statis (gambar, favicon)
├── src/
│   ├── components/       # Komponen reusable (Navbar, Footer, dll.)
│   ├── data/             # Data resep dalam format JSON
│   ├── layouts/          # Layout dasar halaman
│   └── pages/            # Halaman website
├── astro.config.mjs      # Konfigurasi AstroJS
├── tailwind.config.mjs   # Konfigurasi TailwindCSS
└── tsconfig.json         # Konfigurasi TypeScript
```

## Alur Kontribusi

1. Fork repository ini ke akun GitHub Anda.

2. Clone hasil fork:
   ```
   git clone https://github.com/<username>/dapoer-papoea.git
   ```

3. Buat branch baru:
   ```
   git checkout -b nama-branch-anda
   ```

4. Lakukan perubahan, lalu commit:
   ```
   git commit -m "feat: deskripsi singkat perubahan"
   ```

5. Push ke fork Anda:
   ```
   git push origin nama-branch-anda
   ```

6. Buat Pull Request ke repository utama.

## Panduan Penulisan Commit

Gunakan format [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

- `feat:` untuk fitur baru
- `fix:` untuk perbaikan bug
- `docs:` untuk perubahan dokumentasi atau konten resep
- `style:` untuk perubahan tampilan tanpa mengubah logika

## Menambahkan Resep Baru

Data resep tersimpan di `src/data/recipes.json`. Setiap resep mengikuti struktur berikut:

```json
{
    "title": "Nama Resep",
    "slug": "nama-resep",
    "category": "nama-kategori",
    "description": "Deskripsi singkat resep.",
    "ingredients": [
        { "name": "Bahan", "quantity": "Takaran" }
    ],
    "instructions": [
        { "step": 1, "text": "Langkah pertama." }
    ]
}
```

Pastikan `slug` dan `category` menggunakan huruf kecil dengan tanda hubung (`-`), dan `slug` bersifat unik.
