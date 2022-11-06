import { Component } from "react";

import './index.css'

import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'


class SectionTwo extends Component {
    render() {
        return (
            <div> 
                <div style={{display : "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h1 className="section-2-head" >New this week</h1>
                <div>
                    <AiOutlineLeft style={{border: "1px solid grey", borderRadius : 30,padding : "10 10",marginRight : 20}} />
                    <AiOutlineRight style={{border: "1px solid grey", borderRadius : 30,padding : "10 10",marginRight : 20}} />
                </div>
                </div>
                <div className="section-card-1" >
                <div className="sub-1">
                    <div>
                    <p className="s-par-1">Collection</p>
                    <h1 className="s-hed-1">Most Popular <br /> around the world</h1>
                    </div>
                    <div>
                    <button type="button" className="butt">Show all</button>
                    </div>
                </div>
                <div className="sub-2">
                    <div>
                    <p className="s-par-1">Collection</p>
                    <h1 className="s-hed-1">Great for team <br /> building</h1>
                    </div>
                    <div>
                    <button type="button" className="butt">Show all</button>
                    </div>
                </div>
                <div className="sub-3">
                    <div>
                    <p className="s-par-1">Collection</p>
                    <h1 className="s-hed-1">Fun for the family</h1>
                    </div>
                    <div>
                    <button type="button" className="butt">Show all</button>
                    </div>
                </div>
                </div>
                <div className="se-card-2"> 
                    <button type="button" className="l-butt-1">Dates</button>
                    <button type="button" className="l-butt-1">Group size</button>
                    <button type="button" className="l-butt-1">More filters</button>
                    <button type="button" className="l-butt-2">Great for groups</button>
                    <button type="button" className="l-butt-2">Family-friendly</button>
                    <button type="button" className="l-butt-2">Animals</button>
                    <button type="button" className="l-butt-2">Arts&writing</button>
                    <button type="button" className="l-butt-2">Baking</button>
                    <button type="button" className="l-butt-2">Cooking</button>
                    <button type="button" className="l-butt-2">Dance</button>
                    <button type="button" className="l-butt-2">Drinks</button>
                    <button type="button" className="l-butt-2">Entertainment</button>
                    <AiOutlineRight style={{border: "1px solid grey", borderRadius : 30,padding : "10 10",marginRight : 20}} />
                </div>
            </div>
        )
    }
}

export default SectionTwo