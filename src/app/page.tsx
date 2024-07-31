import { Suspense } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Main } from '@/components/main';
import { MapContainer } from '@/components/map';
import { Collapse } from '@/components/common/collapse';

const Page = () => (
  <Flex>
    <Collapse
      style={{
        position: 'relative',
        width: '20rem',
        minWidth: '384px',
        height: '100%',
        boxShadow: '0 -6px 10px rgb(0 0 0 / 30%)',
        zIndex: '999',
        transition: '0.2s',
      }}
    >
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
