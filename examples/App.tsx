import React, { Suspense, useState } from 'react';
import GoogleMap from './GoogleMapViaHook';
import AppWithGoogleMap from './GoogleMapsViaWrapper';

function App() {
    const [show, setShow] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <button
                    onClick={() => {
                        setShow(true);
                    }}
                >
                    Show map
                </button>

                <Suspense fallback={'loading'}>
                    {show && <GoogleMap />}
                    {show && <AppWithGoogleMap />}
                </Suspense>
            </header>
        </div>
    );
}

export default App;
