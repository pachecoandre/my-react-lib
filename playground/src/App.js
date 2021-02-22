import React from 'react';
import { HelloWorld, CustomButton } from 'my-react-lib';

const App = () => {

    return (
        <>
            <HelloWorld />
            <CustomButton text={'Enviar'} />
        </>
    );
}

export default App;