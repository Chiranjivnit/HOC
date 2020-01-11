import React from 'react';
import WithPower from './WithPower';

const Display = (props) => {
    console.log(props)
    return (
        <div>
            <h3>value receve from HOC component and diplay in Display component</h3> {props.value}
        </div>
    )
}
export default WithPower(Display);