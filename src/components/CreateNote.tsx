import { useState, useRef, useEffect } from "react";
import { NoteType } from "../types/notes";

interface ModalCreateProps {
    onClose: () => void;
    onSubmit: (note: NoteType) => void;
    isOpen: boolean;
}

const CreateNote = ({ onClose, onSubmit, isOpen }: ModalCreateProps) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newNote: NoteType = {
            id: Date.now(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
        };
        onSubmit(newNote);
        setTitle("");
        setBody("");
        onClose();
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <dialog
            ref={dialogRef}
            className="rounded-lg shadow-lg p-6 w-1/2 backdrop:backdrop-blur-sm backdrop:backdrop-brightness-50"
            onClick={(e) => {
                if (e.target === dialogRef.current) {
                    handleClose();
                }
            }}
        >
            <h2 className="text-xl font-bold mb-4">Create New Note</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        className="w-full border rounded p-2"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="body">
                        Body
                    </label>
                    <textarea
                        id="body"
                        className="w-full border rounded p-2"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">
                        Save
                    </button>
                </div>
            </form>
        </dialog>
    );
};

export default CreateNote;
