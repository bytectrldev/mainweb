import React from 'react';
import socialmediadata from './socialmediadata';
import { IconContext } from 'react-icons';
import './SocialMediaIcons.css';

function SocialIcons(props) {
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
          color: props.color, 
          size: props.size,
          className: 'global-class-name socialicons',
        }}

        style={{borderColor: props.color  }}
      >
        <Icons />
      </IconContext.Provider>
    </>
  );
}

export default SocialIcons;
