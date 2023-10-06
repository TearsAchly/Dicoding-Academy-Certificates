// Objek untuk menyimpan data buku
const books = {
  unfinished: [],
  finished: []
};

// Ambil elemen-elemen HTML yang diperlukan
const inputBookForm = document.getElementById("inputBook");
const inputBookTitle = document.getElementById("inputBookTitle");
const inputBookAuthor = document.getElementById("inputBookAuthor");
const inputBookYear = document.getElementById("inputBookYear");
const inputBookIsComplete = document.getElementById("inputBookIsComplete");
const incompleteBookshelfList = document.getElementById("incompleteBookshelfList");
const completeBookshelfList = document.getElementById("completeBookshelfList");

// Fungsi untuk membuat elemen daftar buku
function createBookListItem(book) {
    const bookItem = document.createElement("article");
    bookItem.classList.add("book_item");
    bookItem.innerHTML = `
        <h3>${book.title}</h3>
        <p>Penulis: ${book.author}</p>
        <p>Tahun: ${book.year}</p>
        <div class="action">
            <button class="green" onclick="moveToComplete(${book.id})">Selesai dibaca</button>
            <button class="red" onclick="deleteBook(${book.id})">Hapus buku</button>
        </div>
    `;
    return bookItem;
}


// Fungsi untuk menampilkan buku pada rak "Belum selesai dibaca"
function displayIncompleteBooks() {
    incompleteBookshelfList.innerHTML = "";
    for (const book of books.unfinished) {
        const listItem = createBookListItem(book);
        incompleteBookshelfList.appendChild(listItem);
    }
}

// Fungsi untuk menampilkan buku pada rak "Selesai dibaca"
function displayCompleteBooks() {
    completeBookshelfList.innerHTML = "";
    for (const book of books.finished) {
        const listItem = createBookListItem(book);
        completeBookshelfList.appendChild(listItem);
    }
}

// ...
// Fungsi untuk membuat elemen daftar buku
function createBookListItem(book) {
    const bookItem = document.createElement("article");
    bookItem.classList.add("book_item");
    bookItem.innerHTML = `
        <h3>${book.title}</h3>
        <p>Penulis: ${book.author}</p>
        <p>Tahun: ${book.year}</p>
        <div class="action">
            <button class="green" onclick="toggleCompleteStatus(${book.id})">
                ${book.isComplete ? "Belum selesai di Baca" : "Selesai dibaca"}
            </button>
            <button class="red" onclick="deleteBook(${book.id})">Hapus buku</button>
        </div>
    `;
    return bookItem;
}

// Fungsi untuk memindahkan buku antara rak "Selesai dibaca" dan "Belum selesai dibaca"
function toggleCompleteStatus(id) {
    const unfinishedIndex = books.unfinished.findIndex((book) => book.id === id);
    const finishedIndex = books.finished.findIndex((book) => book.id === id);

    if (unfinishedIndex !== -1) {
        // Pindahkan dari "Belum selesai dibaca" ke "Selesai dibaca"
        const bookToMove = books.unfinished.splice(unfinishedIndex, 1)[0];
        bookToMove.isComplete = true;
        books.finished.push(bookToMove);
    } else if (finishedIndex !== -1) {
        // Pindahkan dari "Selesai dibaca" ke "Belum selesai dibaca"
        const bookToMove = books.finished.splice(finishedIndex, 1)[0];
        bookToMove.isComplete = false;
        books.unfinished.push(bookToMove);
    }

    localStorage.setItem("books", JSON.stringify(books));
    displayIncompleteBooks();
    displayCompleteBooks();
}
// ...


// Fungsi untuk menambahkan buku baru
function addBook(title, author, year, isComplete) {
    const newBook = {
        id: +new Date(),
        title,
        author,
        year,
        isComplete,
    };
    if (isComplete) {
        books.finished.push(newBook);
    } else {
        books.unfinished.push(newBook);
    }
    localStorage.setItem("books", JSON.stringify(books));
    displayIncompleteBooks();
    displayCompleteBooks();
}

// Fungsi untuk memindahkan buku ke rak "Selesai dibaca"
function moveToComplete(id) {
    const index = books.unfinished.findIndex((book) => book.id === id);
    if (index !== -1) {
        const bookToMove = books.unfinished.splice(index, 1)[0];
        bookToMove.isComplete = true;
        books.finished.push(bookToMove);
        localStorage.setItem("books", JSON.stringify(books));
        displayIncompleteBooks();
        displayCompleteBooks();
    }
}

// Fungsi untuk menghapus buku dari rak
function deleteBook(id) {
    const indexUnfinished = books.unfinished.findIndex((book) => book.id === id);
    const indexFinished = books.finished.findIndex((book) => book.id === id);

    if (indexUnfinished !== -1) {
        books.unfinished.splice(indexUnfinished, 1);
    } else if (indexFinished !== -1) {
        books.finished.splice(indexFinished, 1);
    }

    localStorage.setItem("books", JSON.stringify(books));
    displayIncompleteBooks();
    displayCompleteBooks();
}

// Event listener untuk penambahan buku
inputBookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = inputBookTitle.value;
    const author = inputBookAuthor.value;
    const year = inputBookYear.value;
    const isComplete = inputBookIsComplete.checked;

    addBook(title, author, year, isComplete);

    // Reset form setelah penambahan buku
    inputBookForm.reset();
});

// Panggil fungsi untuk menampilkan buku saat halaman dimuat
displayIncompleteBooks();
displayCompleteBooks();

// Fungsi untuk mengubah teks tombol berdasarkan status checkbox
function updateSubmitButtonLabel() {
    if (inputBookIsComplete.checked) {
        bookSubmitButton.textContent = "Selesai dibaca";
    } else {
        bookSubmitButton.textContent = "Masukkan Buku ke rak Belum selesai dibaca";
    }
}

// Event listener untuk perubahan status checkbox
inputBookIsComplete.addEventListener("change", updateSubmitButtonLabel);

// Event listener untuk penelusuran buku
document.getElementById("searchBook").addEventListener("submit", function (e) {
    e.preventDefault(); // Ini akan mencegah tindakan default formulir (pembaruan halaman)

    // Dapatkan nilai yang dicari dari input
    const searchTitle = document.getElementById("searchBookTitle").value;

    // Sekarang Anda dapat menggunakan nilai ini untuk melakukan pencarian buku.
    // Misalnya, Anda dapat mencari buku berdasarkan judul di dalam objek "books".

    // Contoh pencarian berdasarkan judul buku
    const searchResults = searchBooksByTitle(searchTitle);

    // Kemudian, tampilkan hasil pencarian di dalam elemen dengan ID "searchResults".
    displaySearchResults(searchResults);
});

// Fungsi untuk mencari buku berdasarkan judul
function searchBooksByTitle(title) {
    const results = {
        unfinished: [],
        finished: []
    };

    // Lakukan pencarian dalam objek "books" berdasarkan judul dan tambahkan ke "results".
    for (const book of books.unfinished) {
        if (book.title.toLowerCase().includes(title.toLowerCase())) {
            results.unfinished.push(book);
        }
    }

    for (const book of books.finished) {
        if (book.title.toLowerCase().includes(title.toLowerCase())) {
            results.finished.push(book);
        }
    }

    return results;
}

// Fungsi untuk menampilkan hasil pencarian
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = "";

    // Tampilkan hasil pencarian dalam elemen HTML
    for (const category in results) {
        for (const book of results[category]) {
            const listItem = createBookListItem(book, true);
            searchResultsContainer.appendChild(listItem);
        }
    }
}

// Fungsi untuk memeriksa apakah localStorage tersedia di browser
function isLocalStorageAvailable() {
    try {
        const testKey = "test";
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

// Fungsi untuk memuat data buku dari localStorage saat halaman dimuat
function loadBooksFromLocalStorage() {
    if (isLocalStorageAvailable()) {
        const storedBooks = localStorage.getItem("books");
        if (storedBooks) {
            try {
                const parsedBooks = JSON.parse(storedBooks);
                if (parsedBooks && typeof parsedBooks === "object") {
                    // Pastikan data yang dimuat sesuai dengan format yang diharapkan
                    if ("unfinished" in parsedBooks && "finished" in parsedBooks) {
                        books.unfinished = parsedBooks.unfinished;
                        books.finished = parsedBooks.finished;
                    }
                }
            } catch (error) {
                console.error("Gagal memuat data buku dari localStorage:", error);
            }
        }
    }
}

// Fungsi untuk menyimpan data buku ke localStorage
function saveBooksToLocalStorage() {
    if (isLocalStorageAvailable()) {
        const booksToSave = {
            unfinished: books.unfinished,
            finished: books.finished
        };
        localStorage.setItem("books", JSON.stringify(booksToSave));
    }
}

// Panggil fungsi untuk memuat data buku dari localStorage saat halaman dimuat
loadBooksFromLocalStorage();

// Fungsi untuk menambahkan buku baru
function addBook(title, author, year, isComplete) {
    const newBook = {
        id: +new Date(),
        title,
        author,
        year,
        isComplete,
    };
    if (isComplete) {
        books.finished.push(newBook);
    } else {
        books.unfinished.push(newBook);
    }
    // Simpan data buku ke localStorage setiap kali ada perubahan
    saveBooksToLocalStorage();
    displayIncompleteBooks();
    displayCompleteBooks();
}

// Fungsi untuk memindahkan buku ke rak "Selesai dibaca"
function moveToComplete(id) {
    const index = books.unfinished.findIndex((book) => book.id === id);
    if (index !== -1) {
        const bookToMove = books.unfinished.splice(index, 1)[0];
        bookToMove.isComplete = true;
        books.finished.push(bookToMove);
        // Simpan data buku ke localStorage setiap kali ada perubahan
        saveBooksToLocalStorage();
        displayIncompleteBooks();
        displayCompleteBooks();
    }
}

// Fungsi untuk menghapus buku dari rak
function deleteBook(id) {
    const indexUnfinished = books.unfinished.findIndex((book) => book.id === id);
    const indexFinished = books.finished.findIndex((book) => book.id === id);

    if (indexUnfinished !== -1) {
        books.unfinished.splice(indexUnfinished, 1);
    } else if (indexFinished !== -1) {
        books.finished.splice(indexFinished, 1);
    }
    // Simpan data buku ke localStorage setiap kali ada perubahan
    saveBooksToLocalStorage();
    displayIncompleteBooks();
    displayCompleteBooks();
}

//

// Panggil fungsi untuk memuat data buku dari localStorage saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    loadBooksFromLocalStorage();
    displayIncompleteBooks();
    displayCompleteBooks();
});


// Fungsi untuk mengubah teks tombol berdasarkan status checkbox
function updateSubmitButtonLabel() {
    const bookSubmitButton = document.getElementById("bookSubmit");
    if (inputBookIsComplete.checked) {
        bookSubmitButton.textContent = "Masukkan Buku ke rak Selesai dibaca";
    } else {
        bookSubmitButton.textContent = "Masukkan Buku ke rak Belum selesai dibaca";
    }
}

// ...

// Panggil fungsi untuk memuat data buku dari localStorage saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    loadBooksFromLocalStorage();
    displayIncompleteBooks();
    displayCompleteBooks();

    // Event listener untuk perubahan status checkbox
    inputBookIsComplete.addEventListener("change", updateSubmitButtonLabel);

    // Panggil fungsi untuk mengatur teks tombol berdasarkan status awal checkbox
    updateSubmitButtonLabel();
});
