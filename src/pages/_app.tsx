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
        <title>Jörg Jenke - Webentwicklung und Grafikdesign</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
        <meta name="robots" content="all" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withCSSVariables withNormalizeCSS withGlobalStyles theme={{
          colorScheme,
          colors: {
            // Add your color
            dark: [
              "#eef0fb",
              "#d9dcf1",
              "#b0b5e5",
              "#848ddb",
              "#313995",
              "#4954cc",
              "#070c3a",
              "#232859",
              "#0A0E2D",
              "#0A0E2D"
            ],
            // or replace default theme color
            light: [
              "#f5f5f5",
              "#e7e7e7",
              "#cdcdcd",
              "#b2b2b2",
              "#9a9a9a",
              "#8b8b8b",
              "#848484",
              "#717171",
              "#656565",
              "#575757"
            ],

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