import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkAux1 = styled(Link)`
    color: var(--white);
    background-color: var(--primary);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 16px 24px;
    margin-bottom: 16px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    display: inline-block;
    text-decoration:none;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }

`

export default LinkAux1;