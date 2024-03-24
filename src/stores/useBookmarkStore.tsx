import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Station } from '@/types/common';

interface BookmarkState {
  bookmarks: Station[];
  addBookmark: (bookmark: Station) => void;
  deleteBookmark: (id: string) => void;
}

const useBookmarksStore = create(
  persist<BookmarkState>(
    (set) => ({
      bookmarks: [
        {
          stationId: '1',
          name: '경기도인재개발원.연구원.평생교육진흥원.여성가족재단',
          direction: '용산우체국',
          stationNumber: ['00001'],
        },
        {
          stationId: '2',
          name: '역명2',
          direction: '종로2가사거리',
          stationNumber: ['00002', '4213'],
        },
        { stationId: '3', name: '역명3', direction: '광화문역', stationNumber: ['00003'] },
      ],

      addBookmark: (bookmark) => set((state) => ({ bookmarks: [...state.bookmarks, bookmark] })),

      deleteBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((bookmark) => bookmark.stationId !== id),
        })),
    }),
    {
      name: 'bookmarks-storage',
    },
  ),
);

export default useBookmarksStore;