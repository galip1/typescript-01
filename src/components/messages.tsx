import React from "react";
import { PropTodos } from "./types/type";

type Props = {
  todos: PropTodos[];
  deleteMessage: (id: number) => void;
  updateMessage: (id: number, message: string) => void;
  editMode: number | null;
  editedMessage: string;
  setEditMode: React.Dispatch<React.SetStateAction<number | null>>;
  setEditedMessage: React.Dispatch<React.SetStateAction<string>>;
};

const Messages: React.FC<Props> = ({
  todos,
  deleteMessage,
  updateMessage,
  editMode,
  editedMessage,
  setEditMode,
  setEditedMessage,
}) => {
  const enterEditMode = (id: number, message: string) => {
    setEditMode(id);
    setEditedMessage(message);
  };

  const cancelEditMode = () => {
    setEditMode(null);
    setEditedMessage("");
  };

  const saveEditedMessage = (id: number) => {
    updateMessage(id, editedMessage);
  };

  return (
    <div>
      {todos.map((todo, i) => (
        <div key={i} className="flex items-center mb-4">
          <input
            type="text"
            value={editMode === todo.id ? editedMessage : todo.message}
            onChange={(e) => setEditedMessage(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-64 mr-2"
          />
          <button
            onClick={() => deleteMessage(todo.id)}
            className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2"
            style={{ cursor: "pointer" }}
          >
            delete
          </button>
          {editMode === todo.id ? (
            <>
              <button
                onClick={() => cancelEditMode()}
                className="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2 ml-2"
              >
                cancel
              </button>
              <button
                onClick={() => saveEditedMessage(todo.id)}
                className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 ml-2"
              >
                save
              </button>
            </>
          ) : (
            <button
              onClick={() => enterEditMode(todo.id, todo.message)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 ml-2"
            >
              edit
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Messages;
