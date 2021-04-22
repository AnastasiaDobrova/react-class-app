import React from 'react';
import Info from './Info';
import Counter from './Counter';
import Lifecycle from './Lifecycle';


class Main extends React.Component {


    render() { return (
        <main>
            <h2> Main component </h2>
            <Info remind="kopa kakor" />
            <Counter />
            <Lifecycle />
        </main>
        )

    }

}

export default Main;