import React from 'react';
import ReactDOM from 'react-dom';
import { TestComponent } from './components';

class TestClient extends React.Component { 

    render(){

        return(
            <div>
                <TestComponent />
            </div>
        );
    }
}

ReactDOM.render(<TestClient />, document.getElementById('app'));