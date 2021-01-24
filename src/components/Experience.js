import React, { useState } from 'react';
import ListItem from './ListItem';
import Button from 'react-bootstrap/Button';

const Experience = (props) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div>
            {
                props.experience &&
                props.experience.map((experience, index) => {
                    return (
                        <>
                            <ListItem 
                                key={index} 
                                value={experience}
                            />
                            {edit ? 
                            <Button onClick={() => {
                                props.handleDeleteExperience(index)
                            }}>Delete</Button>
                            : null }
                        </>
                    )
                })
            }
            <Button onClick={handleEdit}>{edit ? 'Done' : 'Add Experience'}</Button>
            {edit ? 
            <>
                <Button onClick={props.handleAddExperience}>Save</Button>
                <input
                    name="add-experience"
                    type="text"
                    value={props.newInput}
                    onChange={props.handleGeneralInput}
                    placeholder="Add a new role"
                /> 
            </>
            : null}
        </div>
    )
};

export default Experience;