import React from "react";
import "./services.scss"
import { motion, useInView } from "framer-motion";

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0
	},

	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1
		}
	}
}

const Services = () => {

	const ref = React.useRef()

	const isInView = useInView(ref, {margin: "-100px"})

	return (
		<motion.div
			className="services"
			variants={variants} 
			initial="initial" 
			// animate="animate"
			// whileInView="animate"
			ref={ref}
			animate={isInView && "animate"}
			// animate={"animate"}

		>

			<motion.div className="textContainer" variants={variants}>
				<p>I gotta focus on<br/>my studies!</p>
				<hr />
			</motion.div>

			<motion.div className="titleContainer" variants={variants}>
				<div className="title">
					<img src="/people.jpg" alt="bizz_meeting" />
					{/* Elevate Your Experience and Embrace Excellence */}
					<h1><motion.b whileHover={{color:"#00ff00"}}>Elevate</motion.b> Your <motion.b whileHover={{color:"#00ff00"}}>Experience</motion.b> &</h1>
				</div>
				<div className="title">
					<h1>Embrace <motion.b whileHover={{color:"#00ff00"}}>Excellence</motion.b></h1>
					<button>GET STARTED TODAY!</button>
				</div>
			</motion.div>

			<motion.div className="listContainer" variants={variants}>
				<motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
					<h2>Tailored Solutions</h2>
					<p>We provide tailor-made solutions to suit your unique needs. We believe in personalization to ensure you get the best experience.</p>
					<motion.button whileHover={{backgroundColor: "#000", color:"#00ff00", textShadow: "0 0 10px #00ff00"}}>Tailored Synergy Spectra</motion.button>
				</motion.div>
				<motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
					<h2>Expert Guidance</h2>
					<p>With a team of seasoned professionals, We offer expert guidance and support, ensuring you're on the right path to success.</p>
					<motion.button whileHover={{backgroundColor: "#000", color:"#00ff00", textShadow: "0 0 10px #00ff00"}}>Proficient Navigator Array</motion.button>
				</motion.div>
				<motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
					<h2>Innovative Technology</h2>
					<p>We use the latest in technological advancements to bring you efficient and innovative solutions. Stay ahead with our cutting-edge tools.</p>
					<motion.button whileHover={{backgroundColor: "#000", color:"#00ff00", textShadow: "0 0 10px #00ff00"}}>Innovative Quantum Mesh</motion.button>
				</motion.div>
			</motion.div>

		</motion.div>
	)
}

export default Services