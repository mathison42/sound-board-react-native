import React from 'react';
import Slide from './native/components/Slide';
import SoundButton from './native/components/SoundButton';
import { StyleSheet, Text, View, SectionList } from 'react-native';
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
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 2,
          }}
        />
        <View style={styles.buttons}>
            <SectionList
              sections={[
                {title: 'Gobies',
                  data : [
                    {key: 'Average',              sound: require('./native/sounds/gobies/average.mp3')} ,
                    {key: 'Dalton Smith Wannabe', sound: require('./native/sounds/gobies/dalton-smith-wannabe.mp3')},
                    {key: 'First and Foremost',   sound: require('./native/sounds/gobies/first-and-foremost.mp3')},
                    {key: 'Great Save',           sound: require('./native/sounds/gobies/great-save.mp3')},
                    {key: 'Oh No! Oh yeah!',      sound: require('./native/sounds/gobies/oh-no-oh-yeah.mp3')},
                    {key: 'Scoober Crossfield',   sound: require('./native/sounds/gobies/scoober-crossfield.mp3')},
                    {key: 'Stick Your Hand In',   sound: require('./native/sounds/gobies/stick-your-hand-in.mp3')},
                    {key: 'Too Slow',             sound: require('./native/sounds/gobies/too-slow.mp3')},
                    {key: 'What a look',          sound: require('./native/sounds/gobies/what-a-look.mp3')}
                  ]},
               {title: 'Smokestack',
                 data: [
                   {key: 'Smokestack?',          sound: require('./native/sounds/smokestack/d0ljs.mp3')},
                   {key: 'Terrible Pull',       sound: require('./native/sounds/smokestack/1kft7.mp3')},
                   {key: 'Around!',             sound: require('./native/sounds/smokestack/around.mp3')},
                   {key: 'I',                   sound: require('./native/sounds/smokestack/i.mp3')},
                   {key: 'Foul!',               sound: require('./native/sounds/smokestack/mgang.mp3')},
                   {key: 'Piece!',              sound: require('./native/sounds/smokestack/piece.mp3')},
                   {key: 'Not that tired',      sound: require('./native/sounds/smokestack/irha9.mp3')},
                   {key: 'Oh Joe',              sound: require('./native/sounds/smokestack/joe.mp3')},
                   {key: 'Pretty good...',      sound: require('./native/sounds/smokestack/pretty-good-and-then-wasnt.mp3')},
                   {key: 'Winter League Throw', sound: require('./native/sounds/smokestack/winter-league-throw.mp3')},
                  ]},
               {title: 'Danny \'Bones\' Young',
                data: [
                  {key: 'Bid',            sound: require('./native/sounds/danny/bid.mp3')},
                  {key: 'Onus',           sound: require('./native/sounds/danny/onus.mp3')},
                  {key: 'On Your Chest',  sound: require('./native/sounds/danny/on-your-chest.mp3')},
                ]},
               {title: 'U24 2018 Championships',
                data: [
                  {key: 'Who was that?', sound: require('./native/sounds/perth/4x2ng.mp3')},
                  {key: 'What a stunner!', sound: require('./native/sounds/perth/83rrh.mp3')},
                  {key: 'What a handblock', sound: require('./native/sounds/perth/024pz.mp3')},
                  {key: 'Unbelieveable grab!', sound: require('./native/sounds/perth/yh2p4.mp3')},
                  {key: 'Magic!', sound: require('./native/sounds/perth/8p98p.mp3')},
                  {key: 'Oh! Spicy one!', sound: require('./native/sounds/perth/rjxd1.mp3')},
                  {key: 'Unbelieveable block!', sound: require('./native/sounds/perth/tbxqr.mp3')},
                  {key: 'Crackers again', sound: require('./native/sounds/perth/u615x.mp3')},
                  {key: 'I bought that shot', sound: require('./native/sounds/perth/1jbgm.mp3')},
                  {key: 'She fooled me', sound: require('./native/sounds/perth/t23py.mp3')},
                  {key: 'Could have sold me a house', sound: require('./native/sounds/perth/mn22k.mp3')},
                  {key: 'All over it like a dog\'s breakfast', sound: require('./native/sounds/perth/3jcqg.mp3')},
                  {key: 'Pump those getaway sticks', sound: require('./native/sounds/perth/d90x1.mp3')},
                  {key: 'In the hot sun...', sound: require('./native/sounds/perth/8nvlj.mp3')},
                  {key: 'Screamer of a bid', sound: require('./native/sounds/perth/egu2u.mp3')},
                  {key: 'Flat out like a lizard drinking', sound: require('./native/sounds/perth/gq67k.mp3')},
                  {key: 'Look at those athleticism', sound: require('./native/sounds/perth/hk034.mp3')},
                  {key: 'Dance to a D', sound: require('./native/sounds/perth/egu4c.mp3')},
                  {key: 'Wind does tricky things', sound: require('./native/sounds/perth/gj5py.mp3')},
                  {key: 'Read it like a book', sound: require('./native/sounds/perth/hehj3.mp3')},
                  {key: 'Cat in a hot tin roof', sound: require('./native/sounds/perth/jp5c0.mp3')},
                  {key: 'Showing patience', sound: require('./native/sounds/perth/nibx2.mp3')},
                  {key: 'Got there in the end', sound: require('./native/sounds/perth/noe0h.mp3')},
                  {key: 'Lot of cooks in the pot', sound: require('./native/sounds/perth/ufekr.mp3')},
                  {key: 'Shoots it (bad)', sound: require('./native/sounds/perth/likot.mp3')},
                  {key: 'That\'s a shame', sound: require('./native/sounds/perth/m8vkl.mp3')},
                  {key: 'Untimely error', sound: require('./native/sounds/perth/57j61.mp3')},
                  {key: 'Little bit of a drop', sound: require('./native/sounds/perth/70vmw.mp3')},
                  {key: '100 times', sound: require('./native/sounds/perth/16cc1.mp3')},
                  {key: 'Bad K-Pop Reference', sound: require('./native/sounds/perth/f9fps.mp3')},
                ]},
              {title: 'Other',
                data: [
                   {key: 'Dire, Dire Docks - Mario 64',        sound: require('./native/sounds/other/mario_64-dire_dire_docks.mp3')},
                   {key: 'Starting Race (First) - Mario Kart', sound: require('./native/sounds/other/mario_kart-starting_race_first.mp3')},
                   {key: 'Finish Line - Mario Kart',           sound: require('./native/sounds/other/mario_kart-finish_line.mp3')},
                   {key: 'Finish Line (Lost) - Mario Kart',    sound: require('./native/sounds/other/mario_kart-finish_line_lost.mp3')},
                   {key: 'Star Power - Mario Kart',            sound: require('./native/sounds/other/mario_kart-star_power.mp3')},
                   {key: 'Cantina Song - Star Wars',           sound: require('./native/sounds/other/star_wars-cantina_song.mp3')},
                   {key: 'Shark Week',                         sound: require('./native/sounds/other/ofo0u.mp3')},
                   {key: 'So serious',                         sound: require('./native/sounds/other/uz1at.mp3')},
                   {key: 'Pfft',                               sound: require('./native/sounds/other/z08wz.mp3')},
                 ]},
              ]}
                renderItem={({item}) => <SoundButton soundObject={this.state.soundObject} title={item.key} sound={item.sound}/>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 2,
              }}
            />
            <SoundButton soundObject={this.state.soundObject} title='Stop' sound='stop'/>
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  buttons: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
