const express = require('express');
const data = require('./movies.json');
const app = express();

const port = 5000;

const welcome=(req, res)=>{
    res.send("Welcome to my favourite movie list");
};
app.get("/", welcome);

 const movies =(req, res)=>{
    res.json(data.movies);
  };
  app.get("/api/movies", movies);

  const MovieId = (req, res)=>{
  const id= parseInt(req.params.id);
    const result = data.movies.find((m)=>m.id===id)

    if(result){
        res.status(200);
        res.json(result)
    } else{
        res.status(404).json({message: 'Not found'})
    }
}
  app.get(`/api/movies/:id`, MovieId);


app
.listen(port, ()=>{
    console.info(`Server is listening on port ${port}`);
})
.on("error", (err)=>{
    console.error("Error:", err.message);
});