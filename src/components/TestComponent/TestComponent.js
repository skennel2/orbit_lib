import React, { Component } from 'react'
import {UFOInputField} from 'luna-ufo';

export default class TestComponent extends Component {
    state = {
        default02 : ''
    }

    handleChange = (event, state) => {
        this.setState(state);
    };

    render() {
        return (
            <div>
                <UFOInputField
                    ref="default02"
                    inputType="text"
                    componentType="default"
                    koreanText={true}
                    hintText="한글을 입력해주세요."
                    value={this.state.default02}
                    onChange={(event, value) => {
                        this.handleChange(event, {
                            default02: value,
                        });
                    }}
                />
            </div>
        )
    }
}
