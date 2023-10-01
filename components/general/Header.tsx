import {
  createStyles,
  Header,
  Container,
  Group,
  rem,
  useMantineColorScheme, 
  Switch,
  useMantineTheme,
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

import Logo from "../graphic/Logo"; 

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 9999,
    background: 'none',
    border: 'none',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

}));

export default function HeaderResponsive() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const dark = colorScheme === 'dark';


  return (
    <Header height={HEADER_HEIGHT} mb={-60} className={classes.root}>
      <Container className={classes.header} size="xl" px="lg">
        <Logo />
        <Group spacing={5}>
        <Switch
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        size="md"
        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
        offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
      />
        </Group>

      </Container>
    </Header>
  );
}