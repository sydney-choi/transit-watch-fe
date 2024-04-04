import { useState } from 'react';
import { MapMarker, MapMarkerProps, useMap } from 'react-kakao-maps-sdk';
import { StationCard } from '@/components/map/StationCard';
import { useGetStationDetail } from '@/hooks/useGetQueries';
import { Station } from '@/types/common';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface MapMarkerContainerProps {
  position: MapMarkerProps['position'];
  item: Station;
}

export const MapMarkerContainer = ({ position, item }: MapMarkerContainerProps) => {
  const map = useMap();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetStationDetail(item.arsId);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const handleOnClick = (marker: kakao.maps.Marker) => {
    map.panTo(marker.getPosition());
    if (data) {
      setIsOpen(true);
    }
  };

  return (
    <MapMarker position={position} onClick={handleOnClick}>
      {isOpen && data && <StationCard ref={ref} item={data.result} />}
    </MapMarker>
  );
};
