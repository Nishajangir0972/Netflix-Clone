import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const FormComponent = forwardRef((props, ref) => {
    const name = useRef();
    const email = useRef();
    useImperativeHandle(ref, () => ({
        getValue: function () {
            return name.current.value
    },
        getEmail: function () {
            return email.current.value
    },
        getFocus: function () {
            return name.current.focus()
        },
        setValues: function (newValue) {
            name.current.value = newValue
        }
    }));
    return <>
        <input type="text" placeholder='Enter a name' ref={name} />
        <input type="email" placeholder='Enter a email' ref={email} />
      
    </>

})

export default FormComponent