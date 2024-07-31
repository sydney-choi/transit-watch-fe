'use client';

import { useCallback, useState } from 'react';
import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { Box } from '@chakra-ui/react';

interface CollapseProps {
  /** [필수] collapse 안 컨텐츠 */
  children: React.ReactNode;
}

export const Collapse = ({ children }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <Box position="relative" zIndex="99999">
      <Button
        onClick={toggleOpen}
        style={{
          position: 'absolute',
          top: '50%',
          right: '-20px',
          width: '20px',
          height: '48px',
          borderRadius: '0 5px 5px 0',
          backgroundColor: '#fff',
          boxShadow: '3px 3px 3px 0 rgb(0 0 0 / 20%)',
        }}
      >
        <Box transform={isOpen ? 'rotate(0deg)' : 'rotate(180deg)'}>
          <Icon icon="Fold" color="#5F5F5F" />
        </Box>
      </Button>
      {isOpen && (
        <div
          style={{
            width: '20rem',
            minWidth: '384px',
            height: '100%',
            boxShadow: '0 -6px 10px rgb(0 0 0 / 30%)',
            zIndex: '999',
            transition: '0.2s',
          }}
        >
          {children}
        </div>
      )}
    </Box>
  );
};
