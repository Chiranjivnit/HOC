import React from 'react';
import WithPower from './WithPower';

const Test = (props) => {

    console.log(props)
    return (
        <div>
            <h3>value recives from HOC component and display in Test component</h3> {props.value}
        </div>
    )
}
export default WithPower(Test);