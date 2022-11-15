const notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
  let item = null;
  for (let obj of notes) {
    if (obj.id === id) {
      item = obj;
      break;
    }
  }
  return item;
}

const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
  for (let obj of notes) {
    console.log(
      `The note with id: ${obj.id}, has the following note text: ${obj.content}`
    );
  }
}

logOutNotesFormatted();
