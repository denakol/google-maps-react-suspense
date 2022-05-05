# Google Maps JavaScript API React Suspense Loader

## Description

Load Google Maps API in large code splitted application(`React.Lazy`) with Suspense. It's very usefull when you have different lazy loaded components with your router (for example: React Router). You have ability to load google maps only when you actually want to render it. 

## Usage

Add `useGoogleMaps` hook to your component and wrap your component with Suspense. 

```
const GoogleMap = () => {
  useGoogleMaps({
    apiKey: "Api Key",
  });
  ...
  return <div></div>
};

const SearchInput = () => {
  useGoogleMaps({
    apiKey: "Api Key",
  });
  ...
  return <div></div>
};

function App() {
    return (
        <div className="App">
                <Suspense fallback={'loading'}>
                     <div>    
                        <SearchInput/>
                     <div/>
                     <div>
                        <GoogleMap/>
                     </div>  
                </Suspense>
            </header>
        </div>
    );
}
```

Usually better to create your own wrapper and wrap all google api components.

```
const MyGoogleMapsWrapper = ({
    children,
}: { children: ReactNode } & LoaderOptions) => {
    useGoogleMaps({
       apiKey: process.env.REACT_APP_NOT_SECRET_CODE,
       libraries: ['places'],
    );
    return <>{children}</>;
};

const GoogleMapWithApi = () => {
  return (
    <MyGoogleMapsWrapper>
      <GoogleMap />
    </MyGoogleMapsWrapper>
  );
};

export GoogleMapWithApi

```

## Examples

See the [examples](https://github.com/Denakol/google-maps-react-suspense/tree/master/examples) folder for additional usage patterns.


## @googlemaps/js-api-loader
This library uses @googlemaps/js-api-loader to load the Google Maps JavaScript API. This library uses a singleton pattern and will not attempt to load the library more than once. All options accepted by @googlemaps/js-api-loader are also accepted as props to hook or wrapper component.


## Install

Available via npm as the package [google-maps-react-suspense](https://www.npmjs.com/package/google-maps-react-suspense).

```sh
npm i google-maps-react-suspense
```

or

```sh
yarn add google-maps-react-suspense
```

For TypeScript support additionally install type definitions.

```sh
npm i -D @types/google.maps
```

or

```sh
yarn add -D @types/google.maps
```
