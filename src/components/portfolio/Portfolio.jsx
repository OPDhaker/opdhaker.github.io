/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Cosmic Portal Integration",
    img: "https://images.pexels.com/photos/6498990/pexels-photo-6498990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A seamless convergence of aesthetics and functionality, Cosmic Portal Integration voyages beyond traditional boundaries. It merges advanced web architecture with a visual symphony, sculpting a portal that transports users to an immersive digital cosmos.",
    keyw: "Quantum Harmonization",
  },
  {
    id: 2,
    title: "QuantumCanvas Framework",
    img: "https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "QuantumCanvas Framework redefines the digital palette, blending innovative coding techniques with artistic brilliance. It paints a canvas of interactivity, where pixels become brushstrokes, and code orchestrates a masterpiece of user engagement.",
    keyw: "Geometric Symphony Integration"
  },
  {
    id: 3,
    title: "EchoScape Connectivity",
    img: "https://images.pexels.com/photos/3715428/pexels-photo-3715428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "EchoScape Connectivity harmonizes the landscapes of interconnectedness. It designs a labyrinth of pathways, where users traverse a seamless ecosystem. It interlaces complexities into simplicity, creating an experience that resonates with each echo.",
    keyw: "Harmonic Labyrinth Fusion"
  },
  {
    id: 4,
    title: "Elemental Code Fusion",
    img: "https://images.pexels.com/photos/225769/pexels-photo-225769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Elemental Code Fusion refines the essence of digital alchemy. It fuses the elemental aspects of web development, sculpting an experience where the code transmutes into an elemental force, driving a harmonious blend of design and functionality.",
    keyw: "Harmonized Elementality"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <motion.img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <motion.button whileHover={{backgroundColor:"#000", color:"#00ff00", boxShadow:"0 0 10px #00ff00"}} >See Demo</motion.button> */}
            <motion.button whileHover={{backgroundColor:"#000", color:"#00ff00", boxShadow:"0 0 10px #00ff00"}} >{item.keyw}</motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;