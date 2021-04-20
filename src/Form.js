import { useState } from 'react';
import { createWilder } from './data/database';
import styled from "@emotion/styled";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 50%;
    margin: auto;

    .form {
        &__div {
            display: flex;
            margin: 10px 0;
            & label {
                width: 30%;
            }
            & input {
                width: 70%;
            }
        }
        &__button {
            width: 25%;
            margin: auto;
            padding: 5px;
        }
    }
`;

export default function Form() {

    const [wilder, setWilder] = useState({
        name: "",
        city: "",
        skills: [{
            title: "",
            votes: null
        }]
    });

    function handleChange(event) {
        const target = event.target.name;
        const value = event.target.value;
        setWilder({
            ...wilder,
            [target]: value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submitted');
        createWilder(wilder).then((res) => console.log("res", res));
        setWilder({
            name: "",
            city: ""
        })
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <div className="form__div">
                <label htmlFor="name">Name : </label>
                <input type="text" id="name" name="name" value={wilder.name} onChange={handleChange} />
            </div>
            <div className="form__div">
                <label htmlFor="city">City : </label>
                <input type="text" id="city" name="city" value={wilder.city} onChange={handleChange} />
            </div>
            <button className="form__button">Ajouter</button>
        </StyledForm>
    );
}