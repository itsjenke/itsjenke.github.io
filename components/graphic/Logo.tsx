import React from 'react';
import { Image } from '@mantine/core';

function Logo() {
  return (
    <Image width={100} height={40} fit="contain" src="./logo.svg" />
  );
}

export default Logo;