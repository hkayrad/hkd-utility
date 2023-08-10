import { NavLink } from "react-router-dom";

export default function Home() {
	return (
		<div className="pages homePage">
			<header>
				<h1 className="title">Home</h1>
			</header>

			<div className="utilityBtns">
				<NavLink className="utilityBtn l post" to={"/utility/sendPost"}></NavLink>
{/* 				<NavLink className="utilityBtn r" to={"/"}></NavLink>
 */}			</div>
		</div>
	);
}
