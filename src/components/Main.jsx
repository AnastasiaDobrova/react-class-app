import React from 'react';
import Info from './Info';
import Counter from './Counter';

class Main extends React.Component {


    render() { return (
        <main>
            <h2> Main component </h2>
            <Info remind="kopa kakor" />
            <Counter />
        </main>
        )

    }

}

export default Main;