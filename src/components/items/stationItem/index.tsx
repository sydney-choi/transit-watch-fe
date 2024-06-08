'use client';

import { CSSProperties } from 'react';
import { Text, HStack, Box } from '@chakra-ui/react';
import { useBookmarksStore } from '@/stores/useBookmarkStore';
import { Station, UIType } from '@/types/common';
import { Icon } from '@/components/common/icon';
import { Button } from '@/components/common/button';

interface StationItemProps {
  item: Station;
  type: UIType;
  style?: CSSProperties;
  onClick?: () => void;
}

export const StationItem = ({ type, style, item, onClick }: StationItemProps) => {
  const { deleteBookmark } = useBookmarksStore();
  const isBookmark = type === 'bookmark';

  const handleBookmarkClick = () => {
    // todo: localstorage -> server optimistic update
    deleteBookmark(item.arsId);
  };

  return (
    <HStack
      style={style}
      boxSizing="border-box"
      p="6px 18px 4px 15px"
      cursor="pointer"
      gap={0}
      w="100%"
      _hover={isBookmark ? { bgColor: 'inherit' } : { bgColor: '#e6e6e6' }}
      onClick={onClick}
    >
      {isBookmark && (
        <Button onClick={handleBookmarkClick}>
          <Icon icon="Bookmark" color="#FFDA19" size="22" />
        </Button>
      )}
      <Box ml="0.5rem">
        <Text fontSize="18px" fontWeight="bold" wordBreak="keep-all">
          {item.stationName}
        </Text>
        <Text fontSize="14px" color="grey">
          ({item.arsId})
        </Text>
      </Box>
    </HStack>
  );
};
