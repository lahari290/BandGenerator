import express from "express";


const app=express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
let num = (Math.random()*7) ;
console.log(num);
num = Math.floor(num);
res.locals.num=num;
console.log(num);
next();
})

app.get("/", (req, res)=>{
res.render("AdvanceBandGenerator.ejs",{ 
    firstBand:null,
    randomBand:null
});
});

app.post("/generate", (req, res)=>{
console.log(req.body);
    const firstBand=[
        "Shottee",
      "Voniza",
     "Monteca",
      "Marintz",
       "Poppe",
       "Daren",
      "Arogale"
    ]
    const lastBand=[
        "Matted",
        "Spooky",
        "Furry",
        "Nailed",
        "Tarzan",
        "Madder",
        "Washer"

]

// const fbandlength = firstBand.length;
// console.log(fbandlength);

const randomBand= firstBand[res.locals.num]+" "+lastBand[res.locals.num];
console.log(randomBand);

    res.render("AdvanceBandGenerator.ejs",{randomBand});
})



app.listen(8000, ()=>{
    console.log("This is the server application")
});



