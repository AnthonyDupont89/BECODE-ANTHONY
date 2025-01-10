const fs = require('fs');
const path = require('path');

// Chemins pour le dossier et le fichier
const folderPath = path.join(__dirname, 'test');
const filePath = path.join(folderPath, 'notes.txt');

// Vérifier si le dossier existe
if (!fs.existsSync(folderPath)) {
    // Créer le dossier
    fs.mkdirSync(folderPath);
    console.log('Dossier "test" créé.');

    // Écrire dans le fichier notes.txt
    const content = 'I am a BeCode warrior';
    fs.writeFileSync(filePath, content);
    console.log('Fichier "notes.txt" créé avec le contenu :', content);
} else {
    // Vérifier si le fichier existe
    if (fs.existsSync(filePath)) {
        // Lire le fichier 
        const content = fs.readFileSync(filePath, 'utf-8'); // renvoie une chaîne de caractères car c'est une interprétation lisible du buffer grâce à l'encodage UTF-8
        console.log('Contenu du fichier "notes.txt" :', content);

        // Supprimer le fichier
        fs.unlinkSync(filePath);
        console.log('Fichier "notes.txt" supprimé.');
    } else {
        console.log('Fichier "notes.txt" n\'existe pas.');
    }

    // Supprimer le dossier uniquement s'il est vide
    try {
        fs.rmdirSync(folderPath);
        console.log('Dossier "test" supprimé (car il était vide).');
    } catch (err) {
        console.log('Le dossier "test" contient d\'autres fichiers ou dossiers, il n\'a pas été supprimé.');
    }
}

