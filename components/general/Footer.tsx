import { createStyles, Container, Group, ActionIcon, rem, Text, NavLink } from '@mantine/core';
import { IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';
import Logo from "../graphic/Logo"; 
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },

  link: {
    textDecoration: 'none',
    color: theme.white
  }
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container size="xl" className={classes.inner}>
      <Logo />
        <Text>
          <Link className={classes.link} href="/impressum">Impressum</Link>
        </Text>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Link href="https://www.linkedin.com/in/j%C3%B6rg-jenke-5a01b4189/">
            <ActionIcon size="lg">
              <IconBrandLinkedin size="2.05rem" stroke={1} />
            </ActionIcon>
          </Link>
          <Link href="https://www.instagram.com/itsjenke/">
            <ActionIcon size="lg">
              <IconBrandInstagram size="2.05rem" stroke={1} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </div>
  );
}