import { Loader, LoaderOptions } from '@googlemaps/js-api-loader';

let promise: Promise<unknown> | null = null;
let error: Error | null = null;
let isLoaded = false;

const load = (options: LoaderOptions) => {
    if (error) {
        throw error;
    }
    if (!promise) {
        const loader = new Loader(options);
        promise = loader
            .load()
            .then(() => {
                isLoaded = true;
            })
            .catch(() => {
                error = new Error("Failed to load Google Maps script");
            });
    }
    throw promise;
};

const GoogleMapsLoader = {
    load,
    get isLoaded() {
        return isLoaded;
    },
};

export default GoogleMapsLoader;
