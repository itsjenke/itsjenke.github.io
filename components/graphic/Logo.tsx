import React from 'react';
import { Image } from '@mantine/core';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
    <Image width={100} height={40} fit="contain" src="./logo.svg" alt="Jenke Logo" />
    </Link>
  );
}

export default Logo;