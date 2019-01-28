import React from 'react';
import styled from 'styled-components';
import { ellipsis } from 'polished';

const Styled = styled.div`
  ${ellipsis('100px')};
`;

export default () => (
  <div>
    <Styled>
      Lorem ipsum dolor sit amet
    </Styled>
  </div>
);
