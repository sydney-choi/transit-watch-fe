import { Suspense } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Main } from '@/components/main';
import { MapContainer } from '@/components/map';
import { Collapse } from '@/components/common/collapse';

const Page = () => (
  <Flex>
    <Collapse>
      <Main />
    </Collapse>
    <Box flex="1">
      <Suspense fallback={<p>로딩중..</p>}>
        <MapContainer />
      </Suspense>
    </Box>
  </Flex>
);

export default Page;
