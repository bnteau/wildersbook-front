import Skill from './Skill';
import Proptypes from "prop-types";
import styled from '@emotion/styled';

const StyledWilder = styled.div`
    width: 50%;
    .wilder {
        list-style: none;
        margin: 5px;
        padding: 0;
        &__card {
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 1px 1px 5px #ddd;
            text-align: center;
        }
        &__title {
            color: #FF5467;
            padding: 5px 0;
            margin: 0;
        }
        &__city {
            color: #FF5467;
            font-weight: bold;
            padding: 5px 0;
            margin: 0;
        }
    }
`;

export default function Wilder({ wilder }) {
    return (
        <StyledWilder>
            <ul className="wilder">
                <li key={wilder.name} className="wilder__card">
                    <h2 className="wilder__title">{wilder.name}</h2>
                    <p className="wilder__city">{wilder.city}</p>
                    <Skill skills={wilder.skills} />
                </li>
            </ul>
        </StyledWilder>
    );
}

Wilder.propTypes = {
    wilder: Proptypes.object.isRequired
};