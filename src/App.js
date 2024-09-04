import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Resume from './Resume';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return <Resume />;
}

export default App;
