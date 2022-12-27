import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { StyleSheet, Text, View, Image,Button } from 'react-native';

const Skip=({...props})=>(
    <Button
        title='Skip'
        color={"#68a0cf"}
        {...props}
    />
);
const Next=({...props})=>(
    <Button
        title='Next'
        color={"#68a0cf"}
        {...props}
    />
);
const Done=({...props})=>(
    <Button
        title="Let's Go"
        color={"#68a0cf"}
        {...props}
    />
);
const OnSwipe=({navigation})=>{
    return(
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={()=>navigation.navigate("Login")}
        onDone={()=>navigation.navigate("Login")}
             pages={[
            {
              backgroundColor: '#fff',
              image: <Image source={require('../images/firstWelcome.png')} style={{width:300,height:300}} />,
              title: 'Welcome',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../images/update.png')} style={{width:300,height:300}} />,
                title: 'Exploring',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../images/explore.png')} style={{width:300,height:300}} />,
                title: 'Daily Updates',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            ]}
        />

    );
}
export default OnSwipe;
const styles=StyleSheet.create({
    container:{
        felx:1,
        justifyContent:"center",
        alignItems:"center"
    },
});