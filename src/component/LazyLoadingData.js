import React ,{Suspense}from 'react';
import Loading from './loading.jpg'
const OtherComponent = React.lazy(() => import('./Cards'));
const LazyLoadingData = () => {
    return (
        <Suspense fallback={<img src={Loading} alt="Data Loading"/>}>
            <OtherComponent />
        </Suspense>
    )
}

export default LazyLoadingData
