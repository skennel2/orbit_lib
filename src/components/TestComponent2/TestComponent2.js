import React, { Component } from 'react'
import LUXButton from 'luna-rocket/LUXButton'
import keycode from 'keycode'

export default class TestComponent2 extends Component {
    componentDidMount() {
        this.refs.focus1.focus();

        this.setState({
            refs: [this.refs.focus1, this.refs.focus2, this.refs.focus3, this.refs.focus4],
        });
    }

    handleKeyDown = (index, event) => {
        let { refs } = this.state;

        switch (keycode(event)) {
            case 'right':
                refs[(index + 1) % refs.length].focus();
                break;
            case 'left':
                if (index === 0) {
                    refs[refs.length - 1].focus();
                    break;
                }
                refs[index - 1].focus();
                break;
        }
    }

    handleTouchTap = () => {
        console.log('버튼이 클릭되었습니다!');
    }

    render() {
        return (
            <div>
                <LUXButton ref="focus1" label="Focus1" onKeyDown={this.handleKeyDown.bind(this, 0)} onTouchTap={this.handleTouchTap} />
                {" "}
                <LUXButton ref="focus2" label="Focus2" blue={true} onKeyDown={this.handleKeyDown.bind(this, 1)} />
                {" "}
                <LUXButton ref="focus3" label="Focus3 (Link)" href="http://google.com" onKeyDown={this.handleKeyDown.bind(this, 2)} />
                {" "}
                <LUXButton ref="focus4" label="Focus4" disabled={true} onKeyDown={this.handleKeyDown.bind(this, 3)} />
            </div>
        );
    }
}
