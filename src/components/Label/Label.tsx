import React, { Component } from 'react'

interface Props {
    text: string,
}

export default class Label extends Component<Props> {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}
