import { Component } from "react";

import './index.css'

import {AiOutlineLeft, AiOutlineRight,AiTwotoneStar} from 'react-icons/ai'

import {BsHeart} from 'react-icons/bs'




class SectionThree extends Component {
    render() {
        return (
            <div className="three-cont"> 
                <div style={{display : "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h1 className="section-2-head" >Top Sellers</h1>
                <div className="three-card-1">
                    <p className="three-para">Show(107)</p>
                    <AiOutlineLeft style={{border: "1px solid grey", borderRadius : 30,padding : "10 10",marginRight : 20}} />
                    <AiOutlineRight style={{border: "1px solid grey", borderRadius : 30,padding : "10 10",marginRight : 20}} />
                </div>
                </div>
                <div className="three-card-2">
                    <div className="three-sub-1">
                    <div className="th-1">
                        <BsHeart className="h-icon" />
                    </div>
                    <div className="desc">
                        <AiTwotoneStar />
                        <p className="s-s-p">4.86</p>
                        <p className="s-p-3">(564) . Poland</p>
                    </div>
                    <p className="s-s-p-2">Murder Mystery Escape Room Game-Perfect for..</p>
                    <p className="s-p-l">From $15 <span className="span">/person</span></p>
                    </div>
                    <div className="three-sub-1">
                    <div className="th-2">
                        <BsHeart className="h-icon" />
                    </div>
                    <div className="desc">
                        <AiTwotoneStar />
                        <p className="s-s-p">4.93</p>
                        <p className="s-p-3">(2302) . Poland</p>
                    </div>
                    <p className="s-s-p-2">Solve the Mystery Escape Room, also with Hallowee...</p>
                    <p className="s-p-l">From $16 <span className="span">/person</span></p>
                    </div>
                    <div className="three-sub-1">
                    <div className="th-3">
                        <BsHeart className="h-icon" />
                    </div>
                    <div className="desc">
                        <AiTwotoneStar />
                        <p className="s-s-p">4.91</p>
                        <p className="s-p-3">(2590) . Spain</p>
                    </div>
                    <p className="s-s-p-2">'No Spain no Game' The Fabulous Game</p>
                    <p className="s-p-l">From $17 <span className="span">/person</span></p>
                    </div>
                    <div className="three-sub-1">
                    <div className="th-4">
                        <BsHeart className="h-icon" />
                    </div>
                    <div className="desc">
                        <AiTwotoneStar />
                        <p className="s-s-p">4.96</p>
                        <p className="s-p-3">(525) . Mexico</p>
                    </div>
                    <p className="s-s-p-2">Happiness meditation with chocolate</p>
                    <p className="s-p-l">From $20 <span className="span">/person</span></p>
                    </div>
                    <div className="three-sub-1">
                    <div className="th-5">
                        <BsHeart className="h-icon" />
                    </div>
                    <div className="desc">
                        <AiTwotoneStar />
                        <p className="s-s-p">4.97</p>
                        <p className="s-p-3">(276) . US</p>
                    </div>
                    <p className="s-s-p-2">Mai Tais & Maigc; a crazy tiki var show with Jack Spareribs</p>
                    <p className="s-p-l">From $25 <span className="span">/person</span></p>
                    </div>
                    <div className="three-sub-1">
                    <div className="th-6">
                        <BsHeart className="h-icon" />
                    </div>
                    <div className="desc">
                        <AiTwotoneStar />
                        <p className="s-s-p">4.92</p>
                        <p className="s-p-3">(3,337) . Czech Republic</p>
                    </div>
                    <p className="s-s-p-2">The Plague Doctor of Prague-Halloween Edition</p>
                    <p className="s-p-l">From $14 <span className="span">/person</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionThree