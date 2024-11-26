import React ,{useEffect, useState} from "react"
import axios from 'axios'
import Spinner from "../components/Spinner"
import { Link } from "react-router-dom"
import {AiOutlineEdit} from 'react-icons/ai'
import { BsInfoCircle} from 'react-icons/bs'
import { MdOutlineAddBox ,MdOutlineDelete} from 'react-icons/md'
import { FcUndo } from "react-icons/fc"
import BooksTable from "../components/home/BooksTable"
import BooksCard from "../components/home/BooksCard"



export default function Home(){

	const [loading , setLoading] = useState(false);
	const [books , setBooks] = useState([])
	const [showtype , setShowType] = useState("table");


	async function fetchBooks(){
		setLoading(true);
            try {
				const res = await axios.get('http://localhost:5000/books')
				setBooks(res.data);
				setLoading(false);
				
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
	}

	useEffect(()=>{
	    
		fetchBooks()
	},[])

	return (
		<div className="p-4">
			<div className="flex justify-center gap-x-4">
			<button  className="px-4 py-1 bg-sky-300  hover:bg-sky-500 rounded-lg" onClick={()=>{
				setShowType("table")
			}}>
					Table

				</button>
				<button className=" bg-sky-300 hover:bg-sky-500 px-4 py-1 rounded-lg" onClick={()=>setShowType("card")}>
                   Card
				</button>

			</div>
			<div className="flex justify-between items-center">
				<h1 className="text-3xl my-8"> Books List</h1>
				<Link to='/books/create'>
				<MdOutlineAddBox className="text-sky-300  text-4xl" />
				</Link>

			</div>
			{loading? (<Spinner />):showtype=="table"?(
				<BooksTable books= {books} />

			):(
				<BooksCard books={books} />
			)}

		</div>
	)
}