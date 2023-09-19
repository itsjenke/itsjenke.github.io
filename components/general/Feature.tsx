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
      background: "#1971C2",
      marginBottom: theme.spacing.xl,
      borderRadius: 7
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
      description: 'Hier steht was über Grafikdesign, vielleicht was ich schon gemacht hab oder was ich eben so anbiete. bin noch unsicher okay Bluni.',
    },
    {
      icon: IconWorldUpload,
      title: 'Webentwicklung',
      description:
        'Hier steht was über Webentwickling, vielleicht was ich schon gemacht hab oder was ich eben so anbiete. bin noch unsicher okay Bluni.',
    },
  ];
  
  export function FeaturesTitle() {
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