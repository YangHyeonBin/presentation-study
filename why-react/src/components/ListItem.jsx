import React from 'react';
import styled from 'styled-components';

export default function ListItem({ children, color, toggleContents }) {
  return (
    <ListItemWrapper>
      <ListItemTitle color={color} onClick={toggleContents}>
        {children}
      </ListItemTitle>
    </ListItemWrapper>
  );
}

const ListItemWrapper = styled.li`
  &::marker {
    font-size: 22px;
    font-weight: bold;
  }
`;

const ListItemTitle = styled.h2`
  position: relative;
  cursor: pointer;
  width: max-content;

  &::after {
    content: '';
    height: 8px;
    position: absolute;
    top: 80%;
    left: 0;
    opacity: 50%;
    background-color: ${(props) => props.color};
    width: 100%;
  }
`;
