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
  <ul className="notes">
    {(notes || []).map(({ id, editing, task }) => (
      <li key={id}>
        <Note className="note" onClick={onNoteClick.bind(null, id)}>
          <Editable
            className="editable"
            editing={editing}
            value={task}
            onEdit={onEdit.bind(null, id)} />
          <button className="delete" onClick={onDelete.bind(null, id)}>x</button>
        </Note>
      </li>
    ))}
  </ul>
);
