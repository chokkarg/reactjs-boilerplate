/**
 *
 * Movies
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

const Title = styled.h1`
  font-size: 1.5em;
  color: aliceblue;
`;

interface Props {}

export const Movies = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      <Title> This is movie component </Title>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
});

const Div = styled.div``;
