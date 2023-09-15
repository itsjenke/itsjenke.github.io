import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Title, Grid, ThemeIcon, rem } from '@mantine/core';
import { IconBrandWordpress } from '@tabler/icons-react';

const mockdata = [
  {
    title: 'Best forests to visit in North America. Best forests to visit in North America. Best forests to visit in North America. Best forests to visit in North America. Best forests to visit in North America. Best forests to visit in North America. Best forests to visit in North America',
    image:
      'kulturloge.webp',
    date: 'August 18, 2022',
    icon: IconBrandWordpress,
  },
  {
    title: 'Best forests to visit in North America. Best forests to visit in North America. Best forests to visit in North America. Best forests to visit in North America',
    image:
      'eintrittfrei.webp',
    date: 'August 27, 2022',
    icon: IconBrandWordpress,
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
    fontWeight: 300,
  },

  icon: {
      marginTop: 15
  }
}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <Grid gutter={20}>  
        <Grid.Col md={6} lg={4}>
          <AspectRatio ratio={1342 / 995}>
            <Image src={article.image} className={classes.image} />
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
            <ThemeIcon
            size={50}
            radius="md"
            color="gray"
            variant='default'
          >
            <article.icon size={rem(36)} stroke={1.5}/>
          </ThemeIcon>
            </Grid.Col>
          </Grid>
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