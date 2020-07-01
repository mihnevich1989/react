import React from 'react';
import PostList from '../post-list';
// import './post-add-form.css';
import styled from "styled-components";

const FormPanel = styled.form`
    display: flex;
    margin-top: 20px;
`;
const InputText = styled.input`
    margin-top: 20px;
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`;

const PostAddForm = () => {
    return (
        <FormPanel className="bottom-panel d-flex">
            <InputText
                className="form-control new-post-label"
                type="text"
                placeholder="О чем вы думаете сейчас?"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
            >Добавить</button>
        </FormPanel>
    )
}

export default PostAddForm;