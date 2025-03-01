import { useState } from 'react'

const useInputHook = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const bindInput = {
        value,
        onChange: (event) => setValue(event.target.value)
    }
    const resetForm = () => setValue(initialValue);

    return [value, bindInput, resetForm];
}

export default useInputHook
