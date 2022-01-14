import React, {useMemo, useRef} from 'react';
import {StyleSheet} from 'react-native';
import BottomSheetContainer, {
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

type BottomSheetProps = {
  children?: React.ReactNode | null;
};

export const BottomSheet = ({children}: BottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheetContainer>(null);

  const snapPoints = useMemo(() => [32, 250], []);

  return (
    <BottomSheetContainer
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={styles.backgroundStyle}
      handleIndicatorStyle={styles.handleIndicatorStyle}>
      <BottomSheetScrollView style={styles.contentContainer}>
        {children}
      </BottomSheetScrollView>
    </BottomSheetContainer>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#1F1F1F',
  },
  handleIndicatorStyle: {
    backgroundColor: '#EFF0F3',
    width: 64,
    height: 4,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flex: 1,
  },
});
