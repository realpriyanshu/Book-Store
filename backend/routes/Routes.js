import express from 'express';
import { Book } from '../models/models.js';



const router = express.Router()

//Route for creaing a new Book
router.post('/' , async(req,res)=>{

    try{
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        const book = await Book.create(newBook);
        res.status(201).json(book);

        

    }catch(e){
        console.log(e);
        res.status(404);
    }
    
} )

//Route for getting all the books available 
router.get('/',async(req,res)=>{

    try {
        const books = await Book.find();
        res.json(books);
        
    } catch (error) {
        res.status(404).json({
            msg:"error ocurred"
        })
    }

})
router.get('/:id',async(req,res)=>{
    const {id}= req.params;
    try {
        const books = await Book.findById(id);
        res.status(200).json(books);
        
    } catch (error) {
        console.log(error);
        res.status(404);
    }
})

//Route for updating book
router.put('/:id' , async(req , res)=>{
    const {id} = req.params;

  const result =  await Book.findByIdAndUpdate(id , req.body);
    
  if(result){
    res.status(200).json({
        msg:"ok"
    });
  }else{
    res.status(404).json({message : "Book not found"})
  }
})

//Route for deleting book
router.delete('/:id',async(req,res)=>{
    const {id} = req.params;

    const result = await Book.findByIdAndDelete(id);

    if(result){
        res.json({
            msg:"data deleted successfully"
        })
    }else{
        res.status(404).json({message : "Book not found"})
    }
})

export default router