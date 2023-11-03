import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
	initial: {x: -500, opacity: 0},
	animate: {x: 0, opacity: 1, transition:{duration: 1, staggerChildren: 0.1}},

	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity
		}
	}
}

const sliderVariants = {
	initial: {x: 0},
	animate: {x: "-350%", transition:{repeat:Infinity, repeatType:"mirror", duration: 20}},
}

const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
					<motion.h2 variants={textVariants}>OM PRATAP</motion.h2>
					<motion.h1 variants={textVariants}>Web Developer and UI/UX</motion.h1>
					<motion.div className="buttons" variants={textVariants}>
						<motion.button variants={textVariants}>See the latest works</motion.button>
						<motion.button variants={textVariants}>Contact Me</motion.button>
					</motion.div>
					<motion.img src="/scroll.png" alt="scroll" variants={textVariants} animate="scrollButton" />
				</motion.div>
			</div>

			<motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate='animate'>
				Student Carguy Developer
			</motion.div>

			<div className="imageContainer">
				<img src="/hero.png" alt="my_image" />
			</div>

		</div>
	)
}

export default Hero