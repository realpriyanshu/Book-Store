import { useState ,useEffect, useImperativeHandle} from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import axios from "axios"
import { useNavigate ,useParams} from "react-router-dom"

export default function EditBook(){
	
	
	const [title ,setTitle] = useState("");
	const [author , setAuthor] = useState("");
	const [publishYear , setPublishYear] = useState("");
	const [loading ,setLoading ] = useState(false);
	const navigate = useNavigate();
	const {id} = useParams();
 
	useEffect(()=>{
      setLoading(true);
	  axios.get(`http://localhost:5000/books/${id}`)
	  .then((resp)=>{
		setAuthor(resp.data.author);
		setTitle(resp.data.title);
		setPublishYear(resp.data.publishYear)
		setLoading(false);

	  }).catch((err)=>{
		console.log(err);
		setLoading(false);

	  })
	},[])

	const handleEditBook = ()=>{
		const data = {
			title,
			author,
			publishYear
		};
		setLoading(true);

		axios.put(`http://localhost:5000/books/${id}`,data)
		.then(()=>{
			setLoading(false);
			console.log("Edited");
			navigate('/');
		}).catch((err)=>{
			setLoading(false);
      console.log("cannot create new card");
		})

	}
	

	return <>

	<div className="p-4">
		<h1 className="text-3xl ">Edit Book</h1>
		{loading ? <Spinner />:''}
		<div className="">
			<div className="my-4">
				<label className="text-xl mr-4 text-gray-500 ">Title</label>

				<input type="text" value={title} onChange={(e)=>IoSettingsOutline(e.target.value)} 
				className="border-2 border-grey-500 px-4 py-2 w-full"
				/>
			</div>
			<div className='my-4'>
		<label className='text-xl mr-4 text-gray-500'>Author</label>
		<input
		  type='text'
		  value={author}
		  onChange={(e) => setAuthor(e.target.value)}
		  className='border-2 border-gray-500 px-4 py-2  w-full '
		/>
	  </div>
	  <div className='my-4'>
		<label className='text-xl mr-4 text-gray-500'>Publish Year</label>
		<input
		  type='number'
		  value={publishYear}
		  onChange={(e) => setPublishYear(e.target.value)}
		  className='border-2 border-gray-500 px-4 py-2  w-full '
		/>
	  </div>
	  <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
		Save
	  </button>
	</div>
	</div>
	
	</>
}
