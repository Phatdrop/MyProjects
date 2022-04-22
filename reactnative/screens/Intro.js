import React, {useState} from "react";
import {View, StyleSheet, Text, TextInput, StatusBar, Dimensions} from "react-native";


const Intro = () => { 
    //sætter textinput til setUser, hvori staten opdateres når der bliver ændret på texten
    const [user, setUser] = useState();
    const handleOnChangeText = text => setUser(text);
    
    return ( 
    <>
    <StatusBar hidden />
    <View style={styles.container}>
        <Text style={styles.inputTitle}> Enter your name to continue</Text>
        <TextInput value={user} onChangeText={handleOnChangeText} placeholder="Enter Your Name" style={styles.TextInput}/>
    </View>
    </>
    )
}

const width = Dimensions.get('window').width -50;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    TextInput: {
        borderWidth: 2,
        borderColor: "cyan",
        color: "cyan",
        width,
        height:50,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 25,
    },
    inputTitle : {
        alignSelf:"flex-start",
        paddingLeft: 25,
        marginBottom: 5,
        opacity:0.5,
    },
})

export default Intro;