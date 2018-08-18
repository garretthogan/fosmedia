import React from 'react';
import { Box, Heading, Subhead, Text } from 'rebass';

export default ({ title, subTitle, description }) => (
  <Box w={[1, 1/3]} p={[4, 3]}>
    <Heading textAlign="left" color="black" fontWeight="normal" fontSize={[2, 3]}>
      {title}
    </Heading>
    <Subhead py={4} textAlign="left" color="black" fontWeight="small" fontSize={[1, 2]}>
      {subTitle}
    </Subhead>
    <Text fontWeight="small">
      {description}
    </Text>
  </Box>
);
