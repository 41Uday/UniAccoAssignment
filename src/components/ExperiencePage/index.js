import {Component} from 'react'

import Header from '../Header'

import SectionTwo from '../SectionTwo'

import SectionThree  from '../SectionThree'

class ExpreiencePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <hr />
                <div style={{padding : "0 50px"}}>
                <SectionTwo />
                <SectionThree />
                </div>
            </div>
        )
    }
}

export default ExpreiencePage
