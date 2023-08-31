import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';
import '../styles/app.css';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence wait>
      <motion.div
        key={Component.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;