import React from 'react';

const ListItem = (props) => {
    return (
        <div style={{border:'1px solid red'}}>
          <div>
              <div>{props.title}</div>
              <div>{props.description}</div>
          </div>
            <div>{props.button}</div>
        </div>
    );
};

export default ListItem;