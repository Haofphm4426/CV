import Portfolio from '@/screens/Portfolio';
import '@/styles/plugins.scss';
import '@/styles/style.scss';
import { IconContext } from 'react-icons';

function App() {
    return (
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <Portfolio />
        </IconContext.Provider>
    );
}

export default App;
