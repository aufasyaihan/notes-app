import { useState } from "react";
import NoteList from "./components/NoteList";
import { NoteType } from "./types/notes";
import Navbar from "./components/Navbar";
import Archived from "./components/Archived";
import Button from "./UI/Button";
import CreateNote from "./components/CreateNote";
import SearchBar from "./components/Search";
import { getInitialData } from "./utils";


function App() {
    const [notes, setNotes] = useState<NoteType[]>(getInitialData());
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
            <Navbar>
                <SearchBar handleSubmit={handleSearch} />
            </Navbar>
            <main className="mx-5 my-2">
                <Button
                    className="bg-indigo-500 text-white hover:bg-indigo-600"
                    onClick={() => setModalOpen(true)}
                >
                    Create New
                </Button>
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
