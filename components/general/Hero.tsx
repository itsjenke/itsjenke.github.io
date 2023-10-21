import React, { useRef } from 'react';
import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
  rem,
  AspectRatio,
  Image
} from '@mantine/core';
import { useIntersection, useMediaQuery, useViewportSize } from '@mantine/hooks';
import Link from 'next/link';
import Head from 'next/head';
const Fade = require('react-reveal/Fade');

const useStyles = createStyles((theme) => ({

  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  container: {
    height: rem(700),
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.lg} * 9)`,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(38),
      lineHeight: 1,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 300,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.xl,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    background: theme.colors.dark[6],
    color: '#64EBC4',
    borderRadius: 7,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },

    '&:hover': {
      background: theme.colors.dark[8],
    }
  },

  video: {
    position: 'relative',
  },

  mark: {
    background: '#64EBC4',
    color: theme.colors.dark[6],
  },

  poster: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
}));

export default function HeroContentLeft() {
  const { classes } = useStyles();
  const videoSource = 'video.mp4';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { height } = useViewportSize();
  const poster = 'poster.webp'; 

  // we only show the video when it is in the viewport to unblock the page loading
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0,
  });

  return (
    <>
    {/* preload placeholder image for video to make sure this is shown right away while the video loads */}
    <Head>
      <link
        rel="preload"
        href="poster.webp"
        as="image"
      />
    </Head>
    <div className={classes.video} style={{ height: height - 100 }}>
      <div style={{ position: 'relative', zIndex: 0, height: height - 100 }} ref={ref}>
          <AspectRatio ratio={isMobile ? 9 / 16 : 16 / 9}>
          {entry?.isIntersecting ? (
            <video
              style={{ height: height - 100, background: '#000' }}
              muted
              playsInline
              autoPlay
              loop
              id="video-id"
              className="video"
              poster={poster}
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
           </video>
          ) : null}
            </AspectRatio>
        <Overlay
          style={{ height: height - 100 }}
          gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 30%)"
          opacity={0.85}
          className={classes.overlay}
        />
      </div>
        <Container className={classes.container} size="xl">
          <Fade left>
          <Text className={classes.title}><mark className={classes.mark}>Hi.</mark></Text>
          <Title className={classes.description}  weight={500} size="h3" mt="xl"><mark className={classes.mark}>
          Ich bin Jörg, dein Experte für schnörkellose Webentwicklung und Grafikdesign. </mark>
          </Title>
          <Link href="mailto:hello@jenke.xyz" >
          <Button variant="filled" size="md" className={classes.control} aria-label='Mail Button'>
            Schreib mir
          </Button>
          </Link>
          </Fade>
        </Container>
      <div> 
    </div>
    </div></>
  );
}