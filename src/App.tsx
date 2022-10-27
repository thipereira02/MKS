import { useState } from 'react';
import { Provider } from 'react-redux';
import ActiveCartContext from './contexts/ActiveCartContext';
import GlobalStyle from './layouts/GlobalStyle';
import Home from './pages/Home';
import store from './store/store';

function App() {
    const [isActive, setIsActive] = useState(false)

    return (
        <ActiveCartContext.Provider value={{ isActive, setIsActive }}>
            <Provider store={store}>
                    <GlobalStyle />
                    <Home />
            </Provider>
        </ActiveCartContext.Provider>
    );
};

export default App;