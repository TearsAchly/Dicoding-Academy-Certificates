# Pengenalan Fundamental JavaScript

https://www.youtube.com/watch?v=t3xYf5KpIfs

Dalam modul ini, Anda akan mempelajari fundamental-fundamental dasar JavaScript. Anda akan memahami cara menulis kode JavaScript pertama, menggunakan komentar, mendeklarasikan variabel, mengenal tipe data, memahami operator, dan bekerja dengan struktur kendali seperti pernyataan if/else, switch case statement, dan loop.

## 1. Menulis Kode JavaScript Pertama
Anda bisa menulis kode JavaScript langsung di dalam tag `<script>` dalam halaman HTML Anda, atau dalam file JavaScript terpisah dengan ekstensi `.js`. Berikut adalah contoh sintaks dasar dan contoh kode JavaScript pertama:

**Sintaks:**
```javascript
<script>
    // Kode JavaScript Anda di sini
</script>
```

Contoh Kode JavaScript Pertama:
```javascript
<script>
    console.log("Hello, world!");
</script>
```

## 2. Comments (Komentar)
Komentar digunakan untuk memberikan penjelasan atau dokumentasi dalam kode Anda. Dua jenis komentar yang umum digunakan adalah komentar satu baris (`//`) dan komentar multi-baris (`/* */`).

**Sintaks:**
```javascript
// Ini adalah komentar satu baris

/* Ini adalah komentar
   multi-baris */
```

Contoh Komentar:
```javascript
// Ini adalah contoh komentar satu baris

/*
Ini adalah contoh komentar multi-baris.
Komentar ini bisa memiliki beberapa baris.
*/
```

## 3. Variable (Variabel)
Variabel digunakan untuk menyimpan data. Anda dapat mendeklarasikan variabel menggunakan kata kunci `var`, `let`, atau `const`.

**Sintaks:**
```javascript
var namaVariabel = nilai;
let namaVariabel = nilai;
const namaVariabel = nilai;
```

Contoh Deklarasi Variabel:
```javascript
var angka = 10;
let teks = "Halo, dunia!";
const PI = 3.14;
```

## 4. Tipe Data
JavaScript memiliki beberapa tipe data, termasuk:

- String: Teks
- Number: Angka
- Boolean: True atau False
- Array: Kumpulan nilai
- Object: Kumpulan properti

**Contoh Tipe Data:**
```javascript
var teks = "Halo";
var angka = 42;
var benar = true;
var array = [1, 2, 3];
var objek = { nama: "John", usia: 30 };
```

## 5. Operator
JavaScript memiliki berbagai jenis operator, termasuk operator aritmetika, perbandingan, dan logika. Berikut beberapa contoh:

**Sintaks:**
```javascript
// Operator Aritmetika
var hasil = angka1 + angka2;

// Operator Perbandingan
var hasil = nilai1 === nilai2;

// Operator Logika
var hasil = kondisi1 && kondisi2;
```

Contoh Penggunaan Operator:
```javascript
var x = 5;
var y = 10;
var z = x + y; // Operator aritmetika penambahan
var sama = x === y; // Operator perbandingan
var logika = x > 3 && y < 15; // Operator logika
```

## 6. If/Else Statement
Pernyataan if/else digunakan untuk mengontrol alur eksekusi kode berdasarkan kondisi tertentu.

**Sintaks:**
```javascript
if (kondisi) {
    // Eksekusi jika kondisi benar (true)
} else {
    // Eksekusi jika kondisi salah (false)
}
```

Contoh If/Else Statement:
```javascript
var nilai = 75;

if (nilai >= 70) {
    console.log("Anda lulus!");
} else {
    console.log("Anda tidak lulus.");
}
```

## 7. Switch Case Statement
Switch case statement digunakan untuk membuat cabang eksekusi kode berdasarkan nilai ekspresi.

**Sintaks:**
```javascript
switch (nilai) {
    case nilai1:
        // Eksekusi jika nilai sama dengan nilai1
        break;
    case nilai2:
        // Eksekusi jika nilai sama dengan nilai2
        break;
    default:
        // Eksekusi jika tidak ada nilai yang cocok
}
```

Contoh Switch Case Statement:
```javascript
var hari = "Senin";

switch (hari) {
    case "Senin":
        console.log("Hari kerja.");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Hari libur.");
        break;
    default:
        console.log("Hari tidak valid.");
}
```

## 8. Loop
Loop memungkinkan Anda untuk melakukan iterasi atau perulangan pada kode. Ada beberapa jenis loop yang umum digunakan di JavaScript, seperti for, while, dan do-while.

**Contoh For Loop:**
```javascript
for (var i = 0; i < 5; i++) {
    console.log("Perulangan ke-" + i);
}
```

**Contoh While Loop:**
```javascript
var i = 0;
while (i < 5) {
    console.log("Perulangan ke-" + i);
    i++;
}
```

**Contoh Do-While Loop:**
```javascript
var i = 0;
do {
    console.log("Perulangan ke-" + i);
    i++;
} while (i < 5);
```

Dengan pemahaman tentang sintaks dan contoh kode di atas, Anda akan memiliki dasar yang kuat untuk memulai pemrograman JavaScript. Selamat belajar!
