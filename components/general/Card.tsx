import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Title } from '@mantine/core';

const mockdata = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    image:
      'kulturloge.webp',
    date: 'August 18, 2022',
  },
  {
    title: 'Best forests to visit in North America',
    image:
      'eintrittfrei.webp',
    date: 'August 27, 2022',
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },

  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    marginTop: theme.spacing.xl,
    '&:hover': {
      transform: 'scale(1.0)',
      boxShadow: theme.shadows.md,
    },
  },

  image: {
    borderRadius: 7,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1342 / 995}>
        <Image src={article.image} className={classes.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl" size="xl" className={classes.wrapper}>
      <Title order={2}>Webentwicklung</Title>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}