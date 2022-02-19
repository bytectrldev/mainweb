import React from 'react';
import socialmediadata from './socialmediadata';
import { IconContext } from 'react-icons';
import './SocialMediaIcons.css';

function SocialIcons() {
  const Icons = () => {
    return socialmediadata.map((data) => {
      return (
        <a key={data.id} href={data.href}>
          {data.elements}
        </a>
      );
    });
  };

  return (
    <>
      <IconContext.Provider
        value={{
          color: 'white',
          size: '2.8em',
          className: 'global-class-name socialicons',
        }}
      >
        <Icons />
      </IconContext.Provider>
    </>
  );
}

export default SocialIcons;
