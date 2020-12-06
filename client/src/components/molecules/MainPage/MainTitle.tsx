import React from 'react';
import styled from 'styled-components';

import LogoWithText from '../../atoms/logos/LogoWithText';
import Text from '../../atoms/texts/Text';
import Palette from '../../../@types/Palette';

const MainTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;

  img {
    margin-bottom: 16px;
  }
`;

export const MainTitle = () => {
  return (
    <MainTitleWrapper>
      <LogoWithText />
      <Text size={24} weight={'bold'} color={Palette.PUPAGO_BLUE}>
        실시간 번역 채팅 푸파고!
      </Text>
      <Text size={18} color={Palette.DARK_GREY}>
        글로벌 채팅을 즐겨보세요!
      </Text>
    </MainTitleWrapper>
  );
};

export default MainTitle;
