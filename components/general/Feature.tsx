import {
    createStyles,
    Title,
    SimpleGrid,
    Text,
    ThemeIcon,
    Grid,
    Col,
    rem,
    Container,
  } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
  import { IconPalette, IconWorldUpload } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      marginTop: - 50,
      position: 'relative',
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
      marginBottom: theme.spacing.xl,
      borderRadius: 7,
      background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(36),
      fontWeight: 900,
      lineHeight: 1.1,
      marginBottom: theme.spacing.md,
      color: '#64EBC4',
    },
  }));
  
  const features = [
    {
      icon: IconPalette,
      title: 'Grafikdesign',
      description: 'Flyer, Plakate, Poster, Visitenkarten. Lass deiner Kreativität freien Lauf. Auf was hast du Lust?',
    },
    {
      icon: IconWorldUpload,
      title: 'Webentwicklung',
      description: 'Onepager, Multipager, Online-Shop. Individuelle Lösungen für deinen Internetauftritt. Womit fangen wir an?',
    },
  ];
  
  export default function FeaturesTitle() {
    const { classes } = useStyles();
    const isMobile = useMediaQuery('(max-width: 768px)');
  
    const items = features.map((feature) => (
      <div key={feature.title}>
        <Grid gutter="xl" align="flex-end">
          <Grid.Col span="content">
          <ThemeIcon
            size={50}
            radius="md"
            variant="filled"
            color= '#64EBC4'
          >
            <feature.icon size={rem(36)} stroke={1.5} color='#0A0E2D'/>
          </ThemeIcon>
          </Grid.Col>
          <Grid.Col span="content">
          <Text fz="xl" mt="sm" fw={500}>
            {feature.title}
          </Text>
          </Grid.Col>
        
          <Grid.Col>  
          <Text fz="sm">
            {feature.description}
          </Text>
          </Grid.Col>
        </Grid> 
      </div>
    ));
  
    return (
      <Container size="xl" >
        <Grid gutter={isMobile ? 30 : 80} className={classes.wrapper}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
              Let&apos;s go!
            </Title>
            <Text>
              Egal ob Grafikdesign oder individuelle Wordpress-Lösungen. Ich steh an Deiner Seite um deine Ideen lösungsorientiert und kreativ umzusetzen.
            </Text>
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </Container>
    );
  }