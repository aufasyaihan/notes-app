import { useState } from "react";
import NoteList from "./components/NoteList";
import { NoteType } from "./types/notes";
import Navbar from "./components/Navbar";
import Archived from "./components/Archived";

const initialData: NoteType[] = [
    {
        id: 1,
        title: "Babel",
        body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z",
    },
    {
        id: 2,
        title: "Webpack",
        body: "Webpack merupakan tools open-source yang digunakan untuk mengelola asset dan dependency pada proyek-proyek JavaScript. Webpack akan membaca semua file JavaScript dan asset lainnya, lalu menggabungkannya menjadi satu file atau beberapa file sesuai dengan konfigurasi yang kita buat.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z",
    },
    {
        id: 3,
        title: "ESLint",
        body: "ESLint merupakan tools open-source yang digunakan untuk menganalisis kode JavaScript agar sesuai dengan standar yang telah ditentukan. ESLint akan memeriksa kode JavaScript yang kita tulis dan memberikan peringatan jika menemukan kode yang tidak sesuai dengan standar yang telah ditentukan.",
        archived: true,
        createdAt: "2022-04-14T04:27:34.572Z",
    },
];

function App() {
    const [notes, setNotes] = useState<NoteType[]>(initialData);

    const availableNotes : NoteType[] = notes.filter((note) => note.archived == false);
    return (
        <>
            <Navbar />
            <div className="flex gap-4 p-4 justify-between">
                <NoteList notes={availableNotes} />
            </div>
        </>
    );
}

export default App;
