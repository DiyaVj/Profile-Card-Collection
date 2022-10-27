import React from 'react';
import './style.css';
import Header from './Header';
import Footer from './Footer';
import linkedIn from './images/linkedIn.png';
import twitter from './images/twitter.png';
import github from './images/github.png';

class ProfileCard extends React.Component {
    
    constructor(){
        super()
        this.state  = {
            data:    
                <div>
                    <p>Hello! I am Pradnya Haval from Pune. I have graduated in 2022 and joined one of the leading service based MNC as software engineer. I learnt most of the coding on my own.</p>
                    <p></p>
                </div>
        }
        this.FooterButtons = this.FooterButtons.bind(this)
    }
    
    FooterButtons(btn){
        if(btn === 'education'){
            console.log(btn);
            this.Education()
        }
        if(btn === 'contact'){
            console.log(btn);
            this.Contact()            
        }
        if(btn === "about"){
            this.About()
        }
        
    }

    About(){
        this.setState({
            data : 
                <div>
                    <p>Hello! I am Pradnya Haval from Pune. I have graduated in 2022 and joined one of the leading service based MNC as software engineer. I learnt most of the coding on my own.</p>
                </div>
        })
    }
   
   Education(){
        this.setState({
            data: 
                <div>
                    <ul class="sessions">
                        <li>
                            <div class="time">2022-Present</div>
                            <p>Software Engineer at Persistent Systems</p>
                        </li>
                        <li>
                            <div class="time">2018-2022</div>
                            <p>B.Tech Computer Engineering, COEP</p>
                        </li>
                        <li>
                            <div class="time">2016-2018</div>
                            <p>XI<sup>th</sup>-XII<sup>th</sup> Scienc, SCID</p>
                        </li>
                    </ul>
                </div>
        })
   }

   Contact(){        
        this.setState({
                data: 
                    <div>
                        <a href='#'><img className='icons' src={github} /></a><br />
                        <a href='www.linked.com/in/pradnya-haval'><img className='icons' src={linkedIn} /></a><br />
                        <a href='https://twitter.com/_pradnyah_'><img className='icons' src={twitter} /></a>
                    </div>
        }) 
    }

   render(){
    return (
        <div className='myCard'>
            <Header />
            <div className='main'>            
                {this.state.data}                   
            </div>
            <Footer FooterHandler = {this.FooterButtons}/>
        </div>
    )
   }
    
}

export default ProfileCard
