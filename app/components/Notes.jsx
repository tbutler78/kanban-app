import React from 'react';

import Note from './Note';

/**
 * {}'s allow us to mix JavaScript syntax within JSX.
 *  map returns a list of li elements for React to render.
 * key tells React which items have been changed/added/deleted
 */
export default ({ notes, onDelete = () => {} }) => (
  <ul>
    {notes.map(({id, task}) => 
      <li key={id}>
        <Note>
            <span>{task}</span>
            <button onClick={onDelete.bind(null, id)}>x</button>
        </Note>  
      </li>
    )}
  </ul>
);
