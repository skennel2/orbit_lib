import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { TestComponentTest } from './example';

// React Tap Plugin
injectTapEventPlugin();

// 샘플 페이지가 추가되면 아래에 { pageName : '', pageComponent: object } 형태로
// 추가해주세요.
const testPageInfomationList = [
    {
        pageName: 'TestComponentTest',
        pageComponent: TestComponentTest
    }
];

class TestClient extends React.Component { 
    state = { 
        selectedItem: ''
    }

    handleOnClickList(){
    }

    render() {
        return(
            <div>
                <br/>
                <Router>
                    <div className='container-fluid row'>
                        <div className='col-md-2'>
                            <ul className="list-group" onClick={this.handleOnClickList.bind(this)}>
                                {
                                    this.props.pageInfoList.map(
                                        (page, index) => (
                                            <li key={index} className="list-group-item">
                                                <Link to={page.pageName}>{page.pageName}</Link>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>                     
                        <Switch className='col-md-10'>                
                            {
                                this.props.pageInfoList.map(
                                    (page, index) => (
                                        <Route key={index}  exact path={'/' + page.pageName} component={page.pageComponent} />
                                    )
                                )
                            }
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<TestClient pageInfoList={testPageInfomationList}/>, document.getElementById('app'));
