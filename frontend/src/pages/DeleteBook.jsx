import React ,{useState} from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useNavigate , useParams} from "react-router-dom"; 
import Spinner from "../components/Spinner";



export default function DeleteBook(){
 const [loading , setLoading]  = useState();
 const navigate = useNavigate();
 const {id} = useParams();

 const handleDelete = ()=>{

	setLoading(true);
	axios.delete(`http://localhost:5000/books/${id}`)
	.then(()=>{
          setLoading(false);
		  console.log("book Deleted");
		  navigate('/');
	}).catch((err)=>{
		console.log(err);
		setLoading(false);
	})
 }
	return <>
	 <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDelete}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
	</>
}