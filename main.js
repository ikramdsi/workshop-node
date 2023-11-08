const fs = require('fs');

//fonction pour lire le fichier 
const read = () => {
    try {
        const noteData = fs.readFileSync("note.json");
        return JSON.parse(noteData)

    } catch (error) {
        return [];

    }


};
//fonction pour ecrire
const write = (note) => {
    fs.writeFileSync("note.json", JSON.stringify(note));
};
//fonction liste
const listeNote = () => {
    const list = read();
    list.length === 0 ?
        console.log('Not found')

        : list.forEach((note) => {
            console.log('Your list :');
            console.log(`name:${note.name}`);
            console.log(`note:${note.note}`);
            console.log('---------------------------------');
        });



};

//fonction addliste
const addNote = (name, note) => {
    const addData = read();
    const newNote = {
        name: name,
        note: note,

    }
    addData.push(newNote);
    write(addData);
    console.log("add seccsesfully");

};

//fonction remove
const removeNote = (name) => {
    const removeData = read();
    const updateNote = removeData.filter((note) => note.name !== name);
    removeData.length === updateNote.length ?
        console.log('name not found')
        : write(updateNote);
    console.log('remove succsessfully');

};
// fonction read single
const readSingleNote = (name) => {
    const notes = read();
    const noteSingle = notes.find((note) => note.name === name);
    if (noteSingle) {
        console.log(`name:${noteSingle.name}`);
        console.log(`note:${noteSingle.note}`);
    } else {
        console.log('Not found');
    }

};
//les commandes 
const commande = process.argv[2];
if (commande === 'list') {
    listeNote();


} else if (commande === 'add') {
    const name = process.argv[3];
    const note = process.argv[4];
    addNote(name, note);

} else if (commande === 'remove') {
    const name = process.argv[3];
    removeNote(name);

} else if (commande === 'single') {
    const name = process.argv[3];

    readSingleNote(name);

}



