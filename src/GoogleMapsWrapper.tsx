import React, { ReactNode } from 'react';
import { LoaderOptions } from '@googlemaps/js-api-loader';

import useGoogleMaps from './useGoogleMaps';

const GoogleMapsWrapper = ({
    children,
    ...options
}: { children: ReactNode } & LoaderOptions) => {
    useGoogleMaps(options);
    return <>{children}</>;
};

export default GoogleMapsWrapper;
