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
  import { IconFlame, IconFileCode } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      marginTop: - 50,
      position: 'relative',
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
      background: theme.primaryColor
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
      icon: IconFileCode,
      title: 'Grafikdesign',
      description: 'Hier steht was über Grafikdesign, vielleicht was ich schon gemacht hab oder was ich eben so anbiete. bin noch unsicher okay Bluni.',
    },
    {
      icon: IconFlame,
      title: 'Webentwicklung',
      description:
        'Hier steht was über Webentwickling, vielleicht was ich schon gemacht hab oder was ich eben so anbiete. bin noch unsicher okay Bluni.',
    },
  ];
  
  export function FeaturesTitle() {
    const { classes } = useStyles();
  
    const items = features.map((feature) => (
      <div key={feature.title}>
        <ThemeIcon
          size={44}
          radius="md"
          variant="filled"
          color= '#64EBC4'
        >
          <feature.icon size={rem(26)} stroke={1.5} color='#0A0E2D'/>
        </ThemeIcon>
        <Text fz="lg" mt="sm" fw={500}>
          {feature.title}
        </Text>
        <Text fz="sm">
          {feature.description}
        </Text>
      </div>
    ));
  
    return (
      <Container size="xl" >
        <Grid gutter={80} className={classes.wrapper}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
              Hier steht ein wichtiger Einleitungstext
            </Title>
            <Text>
              Hier steht was über die zwei Dinge die ich anbieten werde.
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