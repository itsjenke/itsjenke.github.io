import React from 'react';
import { Image } from '@mantine/core';

function Logo() {
  return (
    <a href="/">
    <Image width={100} height={40} fit="contain" src="./logo.svg" />
    </a>
  );
}

export default Logo;