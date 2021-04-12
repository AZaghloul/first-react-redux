import React from 'react';
import ProductsList from './ProductsList';
import SelectedProduct from './SelectedProduct';

const App = (props) => {
    return ( <div className="container">
        <div className="row">
            <div className="col-6">
                <ProductsList/>
            </div>
            <div className="col-6">
                <SelectedProduct/>
            </div>
        </div>
    </div> );
}
 
export default App;