import React, {useState} from 'react';

const UseInput = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue)
    const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    return {onChange: ChangeHandler, value}
};

export default UseInput;