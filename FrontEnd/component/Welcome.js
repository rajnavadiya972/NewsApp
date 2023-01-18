//import wel from '../images/n2.gif';
import React, { Component } from 'react';
import { Text, View} from 'react-native';

class BlinkText extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            showText:true}
        }
        setInterval(() => {
            this.setState(previousState =>{
                return{showText: !previousState.showText}
            })
        }, 1000)
    }
     render(){
        const {textData}=this.props
        const {showText}=this.props
        return(
            <Text>{showText? textData:""}</Text>
        )
     } 
}

export default class App extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <BlinkText textData={"HELLO"}/>
            </View>
            
        )
    }
}

        
        