import { NoteType } from "../types/notes";
import Button from "../UI/Button";

const Archived = ({
    notes,
    archive,
    onDelete
}: {
    notes: NoteType[];
    archive: (id: number | string) => void;
    onDelete: (id: number | string) => void;
}) => {
    return (
        <div className="flex flex-col gap-2 m-3 w-1/2">
            <h2 className="text-xl font-bold">Archived</h2>
            {notes.length == 0 ? (
                <p className="text-center p-4 text-gray-500">
                    No archived notes.
                </p>
            ) : (
                notes.map((note) => {
                    const date = new Date(note.createdAt).toLocaleDateString(
                        "en-ID",
                        { day: "numeric", month: "long", year: "numeric" }
                    );
                    return (
                        <div
                            key={note.id}
                            className="bg-white p-4 shadow-md rounded"
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold text-lg">
                                    {note.title}
                                </h2>
                                <div className="flex">
                                    <Button className="bg-red-500 text-white hover:bg-red-600" onClick={() => onDelete(note.id)}>
                                        Delete
                                    </Button>
                                    <Button
                                        className="bg-orange-400 text-white hover:bg-orange-500"
                                        onClick={() => archive(note.id)}
                                    >
                                        {note.archived
                                            ? "Unarchive"
                                            : "Archive"}
                                    </Button>
                                </div>
                            </div>
                            <p className="text-justify">{note.body}</p>
                            <p className="text-gray-400 text-right">{date}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Archived;
