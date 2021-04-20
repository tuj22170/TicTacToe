/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  ProgressViewIOSComponent,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ScoreDisplay from './components/score-display';
import SquareButton from './components/square-buttons';


const App: () => Node = () => {

const [scoreDisplay, setScoreDisplay] = useState("");
const[xTurn, setXTurn] = useState(true);
const [squareValue1, setSquareValue1] = useState("");
const [squareValue2, setSquareValue2] = useState("");
const [squareValue3, setSquareValue3] = useState("");
const [squareValue4, setSquareValue4] = useState("");
const [squareValue5, setSquareValue5] = useState("");
const [squareValue6, setSquareValue6] = useState("");
const [squareValue7, setSquareValue7] = useState("");
const [squareValue8, setSquareValue8] = useState("");
const [squareValue9, setSquareValue9] = useState("");
const[winner, setWinner] = useState("");

const checkWinner = () =>{
  if((squareValue1!= "")&&(squareValue1 === squareValue2) && (squareValue2 === squareValue3)){
    setWinner(squareValue1);
    console.log(winner);
  }else if((squareValue4!= "")&&(squareValue4 === squareValue5) && (squareValue5 === squareValue6)){
    setWinner(squareValue4);
  }else if((squareValue7!= "")&&(squareValue7 === squareValue8) && (squareValue8 === squareValue9)){
    setWinner(squareValue4);
  }else if((squareValue1!= "")&&(squareValue1 === squareValue4) && (squareValue4 === squareValue7)){
    setWinner(squareValue1);
  }else if((squareValue2!= "")&&(squareValue2 === squareValue5) && (squareValue5 === squareValue8)){
    setWinner(squareValue2);
  }else if((squareValue3!= "")&&(squareValue3 === squareValue6) && (squareValue6 === squareValue9)){
    setWinner(squareValue3);
  }else if((squareValue1!= "")&&(squareValue1 === squareValue5) && (squareValue5 === squareValue9)){
    setWinner(squareValue1);
  }else if((squareValue3!= "")&&(squareValue3 === squareValue5) && (squareValue5 === squareValue7)){
    setWinner(squareValue3);
  }

};

const refreshGame = () =>{
  setSquareValue1("");
  setSquareValue2("");
  setSquareValue3("");
  setSquareValue4("");
  setSquareValue5("");
  setSquareValue6("");
  setSquareValue7("");
  setSquareValue8("");
  setSquareValue9("");
};

const changeValue = async (action) =>{
  if(xTurn){
    setSquareValue1("X");
  }else{
    setSquareValue1("O");
  }
  if(xTurn){
    setXTurn(false);
  }else{
    setXTurn(true)
  }
  await checkWinner();
  if(winner){
    refreshGame();
  }
};

const changeValue2 = async action =>{
  if(xTurn){
    setSquareValue2("X");
  }else{
    setSquareValue2("O");
  }
  if(xTurn){
    setXTurn(false);
  }else{
    setXTurn(true)
  }
  await checkWinner();
  if(winner){
    refreshGame();
  }
};

const changeValue3 = async action =>{
  if(xTurn){
    setSquareValue3("X");
  }else{
    setSquareValue3("O");
  }
  if(xTurn){
    setXTurn(false);
  }else{
    setXTurn(true)
  }
  await checkWinner();
  if(winner){
    refreshGame();
  }
};

const changeValue4 = async action =>{
  if(xTurn){
    setSquareValue4("X");
  }else{
    setSquareValue4("O");
  }
  if(xTurn){
    setXTurn(false);
  }else{
    setXTurn(true)
  }
  await checkWinner();
  if(winner){
    refreshGame();
  }
};

const changeValue5 = async action =>{
  if(xTurn){
    setSquareValue5("X");
  }else{
    setSquareValue5("O");
  }
  if(xTurn){
    setXTurn(false);
  }else{
    setXTurn(true)
  }
  await checkWinner();
  if(winner){
    refreshGame();
  }
};

const changeValue6 = async action =>{
  if(xTurn){
    setSquareValue6("X");
  }else{
    setSquareValue6("O");
  }
  if(xTurn){
    setXTurn(false);
  }else{
    setXTurn(true)
  }
  await checkWinner();
  if(winner){
    refreshGame();
  }
};

const changeValue7 = async action =>{
  if(xTurn){
    setSquareValue7("X");
  }else{
    setSquareValue7("O");
  }
  if(xTurn){
    setXTurn(false);
  }else{
    setXTurn(true)
  }
  await checkWinner();
  if(winner){
    refreshGame();
  }
};

const changeValue8 = async action =>{
  if(xTurn){
    setSquareValue8("X");
  }else{
    setSquareValue8("O");
  }
  if(xTurn){
    setXTurn(false);
  }else{
    setXTurn(true)
  }
  await checkWinner();
  if(winner){
    refreshGame();
  }
};

const changeValue9 = async action =>{
  if(xTurn){
    setSquareValue9("X");
  }else{
    setSquareValue9("O");
  }
  if(xTurn){
    setXTurn(false);
  }else{
    setXTurn(true)
  }
  await checkWinner();
  if(winner){
    refreshGame();
  }
};


  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView style={styles.savContainer}>
      <View style={styles.scoreContainer}>
        <View style={{...styles.squareRow, flexGrow: 1}}>
          <ScoreDisplay Score={scoreDisplay}/>
        </View>
        <View style={styles.squareRow}>
          <SquareButton Square={squareValue1} ButtonWidth="33%" ButtonAction={changeValue}/> 
          <SquareButton Square={squareValue2} ButtonWidth="33%" ButtonAction={changeValue2}/>
          <SquareButton Square={squareValue3} ButtonWidth="33%" ButtonAction={changeValue3}/>
        </View>
        <View style={styles.squareRow}>
          <SquareButton Square={squareValue4} ButtonWidth="33%" ButtonAction={changeValue4}/>
          <SquareButton Square={squareValue5} ButtonWidth="33%" ButtonAction={changeValue5}/>
          <SquareButton Square={squareValue6} ButtonWidth="33%" ButtonAction={changeValue6}/>
        </View>
        <View style={styles.squareRow}>
          <SquareButton Square={squareValue7} ButtonWidth="33%" ButtonAction={changeValue7}/>
          <SquareButton Square={squareValue8} ButtonWidth="33%" ButtonAction={changeValue8}/>
          <SquareButton Square={squareValue9} ButtonWidth="33%" ButtonAction={changeValue9}/>
        </View>
      </View>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexGrow: 1,
  },
  squareRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  savContainer: {
    flexGrow: 1,
    backgroundColor: "#000000",
  },
});

export default App;
