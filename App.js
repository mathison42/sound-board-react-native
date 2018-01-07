import React from 'react';
import Slide from './native/components/Slide';
import SoundButton from './native/components/SoundButton';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Audio } from 'expo';

export default class App extends React.Component {

  render() {
    const soundObject = new Expo.Audio.Sound();
    return (
      <View style={styles.container}>
        <Slide num={Math.floor(Math.random() * 3)} />
        <View style={styles.buttons}>
            <FlatList
                data={[
                    {key: 'Dire, Dire Docks - Mario 64',        sound: require('./native/sounds/mario_64-dire_dire_docks.mp3')},
                    {key: 'Starting Race (First) - Mario Kart', sound: require('./native/sounds/mario_kart-starting_race_first.mp3')},
                    {key: 'Finish Line - Mario Kart',           sound: require('./native/sounds/mario_kart-finish_line.mp3')},
                    {key: 'Finish Line (Lost) - Mario Kart',    sound: require('./native/sounds/mario_kart-finish_line_lost.mp3')},
                    {key: 'Star Power - Mario Kart',            sound: require('./native/sounds/mario_kart-star_power.mp3')},
                    {key: 'Cantina Song - Star Wars',           sound: require('./native/sounds/star_wars-cantina_song.mp3')},
                    {key: 'Stop',                               sound: 'stop'}
                ]}
                renderItem={({item}) => <SoundButton soundObject={soundObject} title={item.key} sound={item.sound}/>}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  buttons: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
