import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Title, Grid, ThemeIcon, rem, Badge, Group } from '@mantine/core';
import { IconExternalLink, IconBrandWordpress } from '@tabler/icons-react';
import Link from 'next/link';
import { useMediaQuery } from '@mantine/hooks';

const mockdata = [
  {
    title: 'Die KulturLoge Dresden vermittelt freie Plätze in Kultur- und Sportveranstaltungen an Menschen, die sonst keinen oder nur einen eingeschränkten Zugang zu Kunst und Kultur haben. Mit einer individuellen Wordpress-Lösung konnte eine Online-Anmeldung sowie eine Kalender-Übersicht realisiert werden.',
    image:
      'kulturloge.webp',
    date: 'KULTURLOGE DRESDEN',
    alt: 'KulturLoge Dresden Screenshot',
    link: 'https://kulturloge-dresden.de',
  },
  {
    title: 'Potsdam glänzt mit Vielfalt an Kultur-, Sport- und Freizeitangeboten. Sehr viele davon sind auch ohne Eintritt zugänglich. Der EintrittFrei Kalender sammelt übersichtlich diese Termine und ermöglicht es ebenso via Formular neue Veranstaltungen dem Kalender hinzuzufügen.',
    image:
      'eintrittfrei.webp',
    date: 'EINTRITTFREI POTSDAM',
    alt: 'EintrittFrei Kalender Screenshot',
    link: 'https://eintrittfrei-potsdam.de',
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },

  card: {
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    marginTop: theme.spacing.xl,
  },

  image: {
    borderRadius: 7,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 300,
  },

  icon: {
      marginTop: 15
  }
}));

export default function ArticlesCardsGrid() {
  const { classes } = useStyles();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const icon = <IconExternalLink style={{ width: rem(12), height: rem(12) }} />;


  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" className={classes.card}>
      <Grid gutter={isMobile ? 20 : 80}>  
        <Grid.Col md={6} lg={4}>
          <AspectRatio ratio={1342 / 995}>
            <Image src={article.image} className={classes.image} alt={article.alt} />
          </AspectRatio>
        </Grid.Col>  
        <Grid.Col md={6} lg={4}>
          <Text color="dimmed" size="md" transform="uppercase" weight={700} mt="md">
            {article.date}
          </Text>
          <Text className={classes.title} mt={5}>
            {article.title}
          </Text>
          <Grid className={classes.icon}>
            <Grid.Col span={4}>
              <Link
              href={article.link}
              target= "_blank">
                <Badge leftSection={icon} size="lg">Live</Badge>
              </Link>
            </Grid.Col>
          </Grid>
          {/* <Grid align="flex-end" mt="xl">
          <ThemeIcon variant="light" size={40} color="gray" >
            <IconBrandWordpress size={30} stroke={1.5} />
          </ThemeIcon>
          </Grid> */}
        </Grid.Col>
      </Grid>  
    </Card>
  ));

  return (
    <Container py="xl" size="xl" className={classes.wrapper}>
      <Title order={2}>Webentwicklung</Title>
      <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}