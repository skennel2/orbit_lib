import React from 'react';
import PropTypes from 'prop-types';
//import LUXButton from 'luna-rocket/LUXButton' 

export class ComponentTemplate extends React.Component {
    state = {
        /**
         * 코드도움 다이얼로그의 열림 여부
         */
        isCodeHelpOpen : false,
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    handleChange = (event, state) => {
        this.setState(state);
    };

    render(){
        return(
            <div className="">
            </div>
        );
    }
}

DemoSingleCodePicker.defaultProps = {
    // dialogTitle : '코드도움',
};

DemoSingleCodePicker.propTypes = {
    // dialogTitle : PropTypes.string,
    // columns : PropTypes.array,
    // originData : PropTypes.array.isRequired,
    // onChange : PropTypes.func,
}