import {motion} from "framer-motion"
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
	return (
		<div className="navbar">

			<Sidebar/>

			<div className="wrapper">

				<motion.span
					initial={{opacity: 0, scale: 0.5}}
					animate={{opacity: 1, scale: 1}}
					transition={{duration: 0.7}}
				>
					OPDhaker.Codes
				</motion.span>

				<motion.div className="social"
					initial={{opacity: 0, scale: 0.5}}
					animate={{opacity: 1, scale: 1}}
					transition={{duration: 0.7}}
				>
					<a href="#"><img src="/facebook.png" alt="facebook" /></a>
					<a href="#"><img src="/dribbble.png" alt="dribble" /></a>
					<a href="#"><img src="/youtube.png" alt="youtube" /></a>
					<a href="#"><img src="/instagram.png" alt="instagram" /></a>
				</motion.div>

			</div>

		</div>
	)
}

export default Navbar