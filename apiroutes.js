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
    req.body.id = uuidv4();
    let newNote = req.body;
    console.log(newNote);
    allSavedNotes = JSON.parse(allSavedNotes);
    allSavedNotes.push(newNote);
    fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(allSavedNotes));
    res.json(newNote);
    
 })

router.delete("/notes/:id", (req, res) =>{
   // let noteId = req.params.id;
   let allSavedNotes = fs.readFileSync(path.join(__dirname, "./db/db.json"));
   allSavedNotes = JSON.parse(allSavedNotes);

   for (let i = 0; i < allSavedNotes.length; i++){
      if(req.params.id === allSavedNotes[i].id){
         allSavedNotes.splice(i, 1);
      }
   }

   fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(allSavedNotes));
   res.sendStatus(200);
})

module.exports = router;