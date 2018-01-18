import React from 'react';


/**
 * {}'s allow us to mix JavaScript syntax within JSX.
 *  map returns a list of li elements for React to render.
 * key tells React which items have been changed/added/deleted
 */
export default ({notes}) => (
  <ul>{notes.map((note) => <li key={note.id}>{note.task}</li>)}</ul>
)
