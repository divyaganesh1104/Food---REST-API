
const express= require("express")
const app = express()
app.use(express.json())
const FoodDB = require("F:\\Divya\\prepinsta\\FoodAPI\\schema")
require("F:\\Divya\\prepinsta\\FoodAPI\\conn")
app.listen(3090, ()=>{
    console.log("registered");
})
app.get("/all", async (req,res)=>{
    try{
        const food = await FoodDB.find({})
        console.log(food)
        res.send(food)
    }
    catch(error){
        console.log(error)
        res.send("internet error")
    }
})
app.post("/new",async (req,res)=>{
    try{
    const SaveData = new FoodDB(req.body)
    const savedd=await SaveData.save()
    console.log(savedd)
    res.send(savedd)
    }
    catch(s){
        res.status(500).send("Internal Server Error")
    }
})
app.get("/getSpecific/:title", async (req,res)=>{
    try{
        console.log(req.params.title)
        try{
        const getSpecific = await FoodDB.findById(req.params.title)
        console.log(getSpecific)
        res.status(200).send(getSpecific)
        }
        catch(e){
            console.log("erea")
        }
    }
    catch(er){
        console.log(er)
        res.status(500).send("inter")
    
    }
})
app.put("/updateAllColumn/:id", async(req,res)=>{
    try {
        const FilterId = await req.params.id
        
    console.log(FilterId)
    console.log(req.body) 
        const Data = await FoodDB.findByIdAndUpdate(
            {_id:FilterId},
            req.body,
            {new:true}
        )
        res.send(Data)
    }
    catch(e){
        console.log("error",e)
    }

})
app.patch("/updateOneColumn/:id", async(req,res)=>{
    try {
        const FilterId = await req.params.id
        
    console.log(FilterId)
    console.log(req.body) 
        const Data = await FoodDB.findByIdAndUpdate(
            {_id:FilterId},
        {$set:{Food_Item_Name:req.body.Food_Item_Name}},
            {new:true}
        )
        res.send(Data)
    }
    catch(e){
        console.log("error",e)
    }

})

app.delete("/deleteOne/:id", async(req,res)=>{

    try {
        const FilterId = req.params.id
        const f = await FoodDB.findByIdAndDelete({_id:FilterId})
        console.log(f)
    res.send(f)
    console.log("deleted Successfully")
}
    catch(e){
        console.log("error",e)
    }

})
app.delete("/deleteMany", async(req,res)=>{

    try {
        const f= await FoodDB.deleteMany({})
        console.log(f)
    res.send(f)
    console.log("deleted Successfully")
}
    catch(e){
        console.log("error",e)
    }

})