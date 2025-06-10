import { motion } from 'framer-motion'
const Transportation = () =>{
    return (
       <motion.div
            className="container mx-auto px-4 py-16"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="transportation"
            >
            <h2 className="text-3xl font-bold mb-4">Our Vehicles</h2>
            <p>Explore beautiful destinations with us...</p>
        </motion.div>
    )
}
export default Transportation