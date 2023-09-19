import { AppProps } from 'next/app';
import Head from 'next/head';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <title>Jörg Jenke - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withCSSVariables withNormalizeCSS withGlobalStyles theme={{
          colorScheme,
          colors: {
            // Add your color
            dark: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
            // or replace default theme color
            light: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],

          },
  
          shadows: {
            md: '1px 1px 3px rgba(0, 0, 0, .25)',
            xl: '5px 5px 3px rgba(0, 0, 0, .25)',
          },
  
          headings: {
            fontFamily: 'Roboto, sans-serif',
            sizes: {
              h1: { fontSize: '2rem' },
            },
          },
          }}>
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}