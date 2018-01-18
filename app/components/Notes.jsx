import React from 'react';

import Note from './Note';
import Editable from './Editable';

/**
 * {}'s allow us to mix JavaScript syntax within JSX.
 *  map returns a list of li elements for React to render.
 * key tells React which items have been changed/added/deleted
 */
export default ({
  notes,
  onNoteClick = () => {},
  onEdit = () => {},
  onDelete = () => {}
}) => (
  <ul>
    {notes.map(({ id, editing, task }) => (
      <li key={id}>
        <Note onClick={onNoteClick.bind(null, id)}>
          <Editable
            editing={editing}
            value={task}
            onEdit={onEdit.bind(null, id)} />
          <button onClick={onDelete.bind(null, id)}>x</button>
        </Note>
      </li>
    ))}
  </ul>
);
