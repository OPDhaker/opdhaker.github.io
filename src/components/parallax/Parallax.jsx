import React from 'react'
import './parallax.scss'
import{ motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({type}) => {

	const ref = React.useRef()

	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	})

	const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
	const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

	return (
		<div
			className="parallax"
			ref={ref}
			style={{
				background:
					type==="services"
						? "linear-gradient(180deg, #2a2a2a, #1a1a1a)" 
						: "linear-gradient(180deg, #2a2a2a, #3a3a3a)"
			}}
		>
			<motion.h1 style={{y: yText}}>{type==="services" ? "What Do I Do?" : "What I Did?"}</motion.h1>
			<motion.div className="mountains"></motion.div>
			<motion.div
				className="planets"
				style={{
					y: yBg,
					backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`
				}}
			></motion.div>
			<motion.div style={{x: yBg}} className="stars"></motion.div>
		</div>
	)
}

export default Parallax