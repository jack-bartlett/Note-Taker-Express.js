const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');



router.get("/notes", (req, res) => {
    let allSavedNotes = fs.readFileSync(path.join(__dirname, "./db/db.json"));
    allSavedNotes = JSON.parse(allSavedNotes);
    res.json(allSavedNotes);
 })

 router.post("/notes", (req, res) => {
    let allSavedNotes = fs.readFileSync(path.join(__dirname, "./db/db.json"));
    let newNote = req.body;
    console.log(newNote);
    req.body.id = uuidv4();
    allSavedNotes = JSON.parse(allSavedNotes);
    allSavedNotes.push(newNote);
    fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(allSavedNotes));
    allSavedNotes = JSON.parse(allSavedNotes);
    res.json(allSavedNotes);
    
 })

router.delete("/notes/:id", (req, res) =>{
   // let noteId = req.params.id;
   const allSavedNotes = fs.readFileSync(path.join(__dirname, "./db/db.json"));
   allSavedNotes = JSON.parse(allSavedNotes);

   for (let i = 0; i < allSavedNotes.length; i++){
      if(req.params.id === allSavedNotes[i].id){
         allSavedNotes.splice(i, 1);
      }
   }

   fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(allSavedNotes));
   allSavedNotes = JSON.parse(allSavedNotes);
   res.json(allSavedNotes);
})

module.exports = router;