import React from 'react';
import Slide from './native/components/Slide';
import SoundButton from './native/components/SoundButton';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Audio } from 'expo';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picNum: Math.floor(Math.random() * 10),
            soundObject: new Expo.Audio.Sound()
        };

        // Toggle the state every second
        setInterval(() => {
            this.setNewPicture();
        }, 10000);
    }


    setNewPicture() {
        this.setState(previousState => {
            let newPicNum = previousState.picNum;
            while (previousState.picNum === newPicNum) {
                newPicNum = Math.floor(Math.random() * 10);
            }
            return { picNum: newPicNum, soundObject: previousState.soundObject };
        });
    }

  render() {
    return (
      <View style={styles.container}>
        <Slide num={this.state.picNum} />
        <View style={styles.buttons}>
            <FlatList
                data={[
                    {key: 'Average',                            sound: require('./native/sounds/average.mp3')},
                    {key: 'Dalton Smith Wannabe',               sound: require('./native/sounds/dalton-smith-wannabe.mp3')},
                    {key: 'First and Foremost',                 sound: require('./native/sounds/first-and-foremost.mp3')},
                    {key: 'Great Save',                         sound: require('./native/sounds/great-save.mp3')},
                    {key: 'Oh No! Oh yeah!',                    sound: require('./native/sounds/oh-no-oh-yeah.mp3')},
                    {key: 'Scoober Crossfield',                 sound: require('./native/sounds/scoober-crossfield.mp3')},
                    {key: 'Stick Your Hand In',                 sound: require('./native/sounds/stick-your-hand-in.mp3')},
                    {key: 'Too Slow',                           sound: require('./native/sounds/too-slow.mp3')},
                    {key: 'What a look',                        sound: require('./native/sounds/what-a-look.mp3')},
                    {key: 'Dire, Dire Docks - Mario 64',        sound: require('./native/sounds/mario_64-dire_dire_docks.mp3')},
                    {key: 'Starting Race (First) - Mario Kart', sound: require('./native/sounds/mario_kart-starting_race_first.mp3')},
                    {key: 'Finish Line - Mario Kart',           sound: require('./native/sounds/mario_kart-finish_line.mp3')},
                    {key: 'Finish Line (Lost) - Mario Kart',    sound: require('./native/sounds/mario_kart-finish_line_lost.mp3')},
                    {key: 'Star Power - Mario Kart',            sound: require('./native/sounds/mario_kart-star_power.mp3')},
                    {key: 'Cantina Song - Star Wars',           sound: require('./native/sounds/star_wars-cantina_song.mp3')},
                    {key: 'Stop',                               sound: 'stop'}
                ]}
                renderItem={({item}) => <SoundButton soundObject={this.state.soundObject} title={item.key} sound={item.sound}/>}
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
