import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './layouts/GlobalStyle';
import Home from './pages/Home';
import store from './store/store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
                <GlobalStyle />
                <Home />
        </Provider>
    );
};

export default App;