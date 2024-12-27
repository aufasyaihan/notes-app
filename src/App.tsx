import { useState } from "react";
import NoteList from "./components/NoteList";
import { NoteType } from "./types/notes";
import Navbar from "./components/Navbar";
import Archived from "./components/Archived";
import Button from "./UI/Button";
import CreateNote from "./components/CreateNote";
import SearchBar from "./components/Search";

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
    const [isModalOpen, setModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const createNote = (note: NoteType) => {
        setNotes([...notes, note]);
    };

    const archiveNote = (id: number | string) => {
        const noteToArchive = notes.find((note) => note.id === id);
        if (noteToArchive) {
            noteToArchive.archived = !noteToArchive.archived;
            setNotes([...notes]);
        }
    };

    const deleteNote = (id: number | string) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    const handleSearch = (keyword: string) => {
        setSearchTerm(keyword.toLowerCase());
    };

    const filteredNotes = notes.filter(
        (note) =>
            note.title.toLowerCase().includes(searchTerm) ||
            note.body.toLowerCase().includes(searchTerm)
    );

    const archivedNotes: NoteType[] = filteredNotes.filter(
        (note) => note.archived
    );
    const availableNotes: NoteType[] = filteredNotes.filter(
        (note) => !note.archived
    );
    return (
        <>
            <Navbar />
            <main className="mx-5 my-2">
                <div className="flex justify-between items-center">
                    <Button
                        className="bg-indigo-500 text-white hover:bg-indigo-600"
                        onClick={() => setModalOpen(true)}
                    >
                        Create New
                    </Button>
                    <SearchBar handleSubmit={handleSearch}/>
                </div>
                <CreateNote
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={createNote}
                />
                <div className="flex gap-4 p-4 justify-between">
                    <NoteList
                        onDelete={deleteNote}
                        archive={archiveNote}
                        notes={availableNotes}
                    />
                    <Archived
                        onDelete={deleteNote}
                        archive={archiveNote}
                        notes={archivedNotes}
                    />
                </div>
            </main>
        </>
    );
}

export default App;
