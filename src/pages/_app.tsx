import { FC } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles/theme';
import { store } from 'store';

const App: FC<AppProps> = (props) => {
    const { Component, pageProps } = props;

    return (
        <Provider store={store}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <main>
                    <Component {...pageProps} />
                </main>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
