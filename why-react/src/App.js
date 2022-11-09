import React from 'react';
import { useState } from 'react';

import styled from 'styled-components';

import ListItem from './components/ListItem';

import { titles } from './titles';

function App() {
  const [clickedIndex, setClickedIndex] = useState(-1);

  const toggleContents = (index) => {
    index === clickedIndex ? setClickedIndex(-1) : setClickedIndex(index);
  };

  return (
    <>
      <Topic>HTML, CSS, JavaScript, 그리고 React</Topic>
      <h2>목차</h2>
      <ContentsList>
        {titles.map((title, index) => (
          <li style={{ backgroundColor: title.color }} key={title + index}>
            {title.title}
          </li>
        ))}
      </ContentsList>
      <ol>
        {titles.map((title, index) => (
          <React.Fragment key={title + index}>
            <ListItem
              color={title.color}
              toggleContents={() => toggleContents(index)}
            >
              {title.title}
            </ListItem>
            {clickedIndex === index && (
              <Descriptions>
                {title.contents.map((content, index) => (
                  <li key={index}>{content}</li>
                ))}
              </Descriptions>
            )}
          </React.Fragment>
        ))}
      </ol>
    </>
  );
}

export default App;

const Topic = styled.h1`
  color: dodgerblue;
`;

const ContentsList = styled.ul`
  display: inline-flex;
  flex-direction: column;

  li {
    width: max-content;
    margin-bottom: 1em;
  }
`;

const Descriptions = styled.ul`
  li {
    white-space: pre-wrap;
  }
`;
