import { Link } from "react-router-dom"

import { BsArrowLeft } from "react-icons/bs"
export default function BackButton(){
	return(
		<>
		<div className="">
			<Link to={'/'} className="bg-sky-800 ">
			<BsArrowLeft className="text-2xl" />
			</Link>

		</div>
		</>
	)
}