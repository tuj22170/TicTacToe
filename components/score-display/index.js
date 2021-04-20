import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ScoreDisplay = (props) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
       text: {
        fontSize: 36,
        color: '#FFFFFF',
      },
});

export default ScoreDisplay;