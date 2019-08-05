import React from 'react'

export default class CreateDOM extends React.Component {
    render() {
        return React.createElement(
            'div',
            {},
            '使用createElement创建元素',
            React.createElement('span', {}, '\nspan标签')
        )
    }
}
