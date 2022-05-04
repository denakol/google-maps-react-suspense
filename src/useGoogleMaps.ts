import { LoaderOptions } from '@googlemaps/js-api-loader';
import GoogleMapsLoader from './GoogleMapsLoader';

const useGoogleMaps = (options: LoaderOptions) => {
    if (GoogleMapsLoader.isLoaded) {
        return;
    }
    GoogleMapsLoader.load(options)
};

export default useGoogleMaps;
