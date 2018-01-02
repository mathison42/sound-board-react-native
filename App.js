import React from 'react';
import Slide from './native/components/Slide';
import SoundButton from './native/components/SoundButton';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo';

export default class App extends React.Component {

  render() {
    const soundObject = new Expo.Audio.Sound();
    const sound1 = require('./native/sounds/mario_64-dire_dire_docks.mp3');
    const sound2 = require('./native/sounds/mario_kart-starting_race_first.mp3');
    const sound3 = require('./native/sounds/mario_kart-finish_line.mp3');
    const sound4 = require('./native/sounds/mario_kart-finish_line_lost.mp3');
    const sound5 = require('./native/sounds/mario_kart-star_power.mp3');
    const sound6 = require('./native/sounds/star_wars-cantina_song.mp3');
    return (
      <View style={styles.container}>
        <Slide num={Math.floor(Math.random() * 3)} />
        <View style={styles.buttons}>
            <Text>Click a button!</Text>
            <SoundButton soundObject={soundObject} sound={sound1} title="Dire, Dire Docks - Mario 64"/>
            <SoundButton soundObject={soundObject} sound={sound2} title="Starting Race (First) - Mario Kart"/>
            <SoundButton soundObject={soundObject} sound={sound3} title="Finish Line - Mario Kart"/>
            <SoundButton soundObject={soundObject} sound={sound4} title="Finish Line (Lost) - Mario Kart"/>
            <SoundButton soundObject={soundObject} sound={sound5} title="Star Power - Mario Kart"/>
            <SoundButton soundObject={soundObject} sound={sound6} title="Cantina Song - Star Wars"/>
            <SoundButton soundObject={soundObject} sound="stop"   title="Stop"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttons: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
});
