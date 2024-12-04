import axios from "axios"
import { useEffect, useState } from "react"
import BackButton from '../components/BackButton.jsx'
import Spinner from'../components/Spinner.jsx'
import { useParams } from "react-router-dom"
import { FcReading } from "react-icons/fc";
import { darkMode } from "./atoms.js"
import { useRecoilState } from "recoil";

export default function ShowBook(){
	const [loading , setLoading ] = useState(false);
	const [ book , setBook] = useState({});
	const [dark , setdark] = useRecoilState(darkMode);
	const { id } = useParams();


async function fetchData(){
	setLoading(true);

	try {
		const res = await axios.get(`http://localhost:5000/books/${id}`);
		
				setBook(res.data);
				setLoading(false)
	
		
	} catch (error) {
		console.log(error);
	}
}
useEffect(()=>{
	fetchData();
},[id])

	return (
		<div className={dark}>
		<div className='p-4 h-screen dark:bg-neutral-900 dark:text-white'>
			<BackButton />
			<div className=" flex">			<h1 className="text-3xl my-4">Show Book </h1><h1 className="text-3xl mt-5 ml-1">{<FcReading />}</h1></div>
			
			{loading ? (
				<Spinner />) : book._id ? (
					<div className="border-2 "						>
						<div>
							<span> ID :</span>
							<span className="text-blue-600">{book._id}</span>
						</div>

						<div><span>Title :- </span>
						<span>{book.title}</span>
						</div>
						<div><span>Author :- </span>
						<span>{book.author}</span>
						</div>
						<div><span>Publish Year :- </span>
						<span>{book.publishYear}</span>
						</div>
						<div><span>Created Time :- </span>
						<span>{new Date(book.createdAt).toString() }</span>
						</div>
						<div><span>Updated time :- </span>
						<span>{new Date(book.updatedAt).toString() }</span>
						</div>
						
					</div>
				): (
					<p className="text-red-500">Failed to load book data. Please try again later.</p>
				  )}
			

		</div>
		</div>
	);
}