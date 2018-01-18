import React from 'react';
import uuid from 'uuid';
import connect from '../'
export default ({lane, ...props}) => (
    <div {...props}>{lane.name}</div>
)
