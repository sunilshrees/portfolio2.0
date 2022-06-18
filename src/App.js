import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const App = () => {
    const [loading, setLoading] = useState(true);

    const loaded = () => {
        setLoading(false);
    };
    useEffect(() => loaded(), []);

    if (!loading)
        return (
            <>
                <Content />
                <Sidebar />
            </>
        );
};

export default App;
