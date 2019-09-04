import React from 'react';
import ReactDOM from 'react-dom';
import { TestComponentTest } from './example';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class TestClient extends React.Component { 
    render(){
        return(
            <div>
                <Router>
                    <div className='container-fluid'>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/TestComponentTest">TestComponentTest</Link>
                                </li>
                            </ul>
                        </nav>                     
                        <Switch>                       
                            <Route exact path="/TestComponentTest" component={TestComponentTest} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<TestClient />, document.getElementById('app'));