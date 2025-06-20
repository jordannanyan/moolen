import { useState } from "react";

const entries = [
  {
    id: 1,
    title: "Malam Mingguan",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fermentum elit. Quisque vitae blandit libero. Nullam id sapien nec ligula mattis pretium ullamcorper. Justo nisi egestas risus vel commodo nisi tellus vitae magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fermentum elit. Quisque vitae blandit libero. Nullam id sapien nec ligula mattis pretium ullamcorper. Justo nisi egestas risus vel commodo nisi tellus vitae magna.",
    time: "13:30",
    color: "bg-yellow-200",
  },
  {
    id: 2,
    title: "Malam Mingguan",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fermentum elit. Quisque vitae blandit libero. Nullam id sapien nec ligula mattis pretium ullamcorper. Justo nisi egestas risus vel commodo nisi tellus vitae magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fermentum elit. Quisque vitae blandit libero. Nullam id sapien nec ligula mattis pretium ullamcorper. Justo nisi egestas risus vel commodo nisi tellus vitae magna.",
    time: "14:30",
    color: "bg-red-300",
  },
  {
    id: 3,
    title: "Malam Mingguan",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fermentum elit. Quisque vitae blandit libero. Nullam id sapien nec ligula mattis pretium ullamcorper. Justo nisi egestas risus vel commodo nisi tellus vitae magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fermentum elit. Quisque vitae blandit libero. Nullam id sapien nec ligula mattis pretium ullamcorper. Justo nisi egestas risus vel commodo nisi tellus vitae magna.",
    time: "15:30",
    color: "bg-sky-200",
  },
  {
    id: 4,
    title: "Malam Mingguan",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fermentum elit. Quisque vitae blandit libero. Nullam id sapien nec ligula mattis pretium ullamcorper. Justo nisi egestas risus vel commodo nisi tellus vitae magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fermentum elit. Quisque vitae blandit libero. Nullam id sapien nec ligula mattis pretium ullamcorper. Justo nisi egestas risus vel commodo nisi tellus vitae magna.",
    time: "16:30",
    color: "bg-green-300",
  },
  {
    id: 5,
    title: "Malam Mingguan",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fermentum elit. Quisque vitae blandit libero. Nullam id sapien nec ligula mattis pretium ullamcorper. Justo nisi egestas risus vel commodo nisi tellus vitae magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fermentum elit. Quisque vitae blandit libero. Nullam id sapien nec ligula mattis pretium ullamcorper. Justo nisi egestas risus vel commodo nisi tellus vitae magna.",
    time: "17:30",
    color: "bg-purple-300",
  },
  {
    id: 6,
    title: "Malam Mingguan",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fermentum elit. Quisque vitae blandit libero. Nullam id sapien nec ligula mattis pretium ullamcorper. Justo nisi egestas risus vel commodo nisi tellus vitae magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fermentum elit. Quisque vitae blandit libero. Nullam id sapien nec ligula mattis pretium ullamcorper. Justo nisi egestas risus vel commodo nisi tellus vitae magna.",
    time: "18:30",
    color: "bg-orange-300",
  },
];

function JournalEntries() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className={`${entry.color} p-4 rounded-lg shadow-sm relative`}
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium">{entry.title}</h3>
            <div className="relative">
              <button
                onClick={() => toggleDropdown(entry.id)}
                className="p-1 hover:bg-black/10 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
              {activeDropdown === entry.id && (
                <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Edit
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Share
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="text-sm line-clamp-6">{entry.content}</p>
          <div className="text-xs text-right mt-4">{entry.time}</div>
        </div>
      ))}
    </div>
  );
}

export default JournalEntries;
