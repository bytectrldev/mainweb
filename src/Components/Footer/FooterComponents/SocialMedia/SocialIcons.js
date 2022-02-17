import React from 'react';
import socialmediadata from './socialmediadata';
import { IconContext } from 'react-icons';
import '../SocialMedia/SocialMediaIcons.css';

function SocialIcons() {
  return (
    <>
      {socialmediadata.map((data) => {
        return (
          <>
            <IconContext.Provider
              value={{
                color: 'white',
                size: '2.8em',
                className: 'global-class-name socialicons',
              }}
            >
              <a href={data.href}>{data.elements}</a>
            </IconContext.Provider>
          </>
        );
      })}
    </>
  );
}

export default SocialIcons;
