import { NoteType } from "../types/notes";

const Archived = ({notes}: {notes : NoteType[]}) => {
    return (
      <div className="flex flex-col gap-2 m-3 w-1/2"> 
        <h2 className="text-xl font-bold">Archived</h2>
        {notes.length == 0 ? (
          <p className="text-center p-4 text-gray-500">No archived notes</p>
        ) : notes.map((note) => (
          <div key={note.id} className="bg-white p-4 shadow-md rounded">
            <h2 className="font-semibold text-lg">{note.title}</h2>
            <p className="text-justify">{note.body}</p>
            <p>{note.createdAt}</p>
          </div>
        ))}
      </div>
    )
  }

export default Archived;