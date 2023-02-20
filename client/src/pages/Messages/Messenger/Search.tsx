import React from 'react';
import styled from "styled-components";

const Display = styled.div`
  padding: 20px 15px;
  width: 100%;
`
const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  font-size: 1rem;
  outline: none;
  border: none;
`

const Search = () => {
    return (
        <Display>
            <Input type="text" placeholder='Chat..'/>
        </Display>
    );
};

export default Search;