import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, useMantineTheme, rem, Container, MediaQuery } from '@mantine/core';

const useStyles = createStyles((theme) => ({

  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[6],
  },

  card: {
    height: rem(580),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: theme.spacing.xl,
    boxShadow: theme.shadows.md
  },

  category: {
    color: theme.white,
    opacity: 0,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <MediaQuery
      query="(max-width: 768px)"
      styles={{ height: rem(490) }}
    >
    <Paper
      shadow="lg"
      p="lg"
      radius="lg"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
      </div>
    </Paper>
    </MediaQuery>
  );
}

const data = [
  {
    image:
      'semesterflyer.webp',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'aufbruch.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'b-side.webp',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'long-movie.webp',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'phase_the_future.webp',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
];

export default function CardsCarousel() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="xl" className={classes.wrapper}>
    <Title order={4}>
            PORTFOLIO
    </Title>
    <Title order={2}>Grafikdesign</Title>
    <Carousel
      slideSize="33.333333%"
      breakpoints={[{ maxWidth: 'md', slideSize: '100%'}]}
      slideGap={mobile ? "xl" : "md"}
      align="start"
      slidesToScroll={mobile ? 1 : 1}
      loop
      dragFree
      controlsOffset="xs"
    >
      {slides}
    </Carousel>
    </Container>
  );
}