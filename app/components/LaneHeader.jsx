import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable';

export default connect(() => ({}), {
    NoteActions,
    LaneActions
})(({lane, LaneActions, NoteActions, ...props}) => {
    const addNote = e => {
        e.stopPropagation();

        const noteId = uuid.v4();

        NoteActions.create({
            id: noteId,
            task: 'New task'
        });
        LaneActions.attachToLane({
            laneId: lane.id,
            noteId
        });
    };

    const activateLaneEdit = () => {
        LaneActions.update({
            id: lane.id,
            editing: true
        });
    };

    const editName = name => {
        LaneActions.update({
            id: lane.id,
            name,
            editing: false
        });
    };

    return (
        <div className="lane-header" onClick={activateLaneEdit} {...props}>
            <div className="lane-add-note">
                <buton onClick={addNote}>+</buton>
            </div>
            <Editable className="lane-name" editing={lane.editing} value={lane.name} onEdit={editName} />
        </div>
    );
})