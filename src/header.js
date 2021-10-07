import React from 'react'

const header = (props) => {
  const {text} = props
  
  return (
      <div>
        {text}
      </div>
  );
};

export default header;