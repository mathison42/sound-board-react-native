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

  // Current bug in follow-redirects. Can't be over 10mb: https://forums.expo.io/t/solved-request-body-larger-than-maxbodylength-limit/6298
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
                    {key: 'Average',              color: '#4169e1', sound: require('./native/sounds/gobies/average.mp3')} ,
                    {key: 'Dalton Smith Wannabe', color: '#4169e1', sound: require('./native/sounds/gobies/dalton-smith-wannabe.mp3')},
                    {key: 'First and Foremost',   color: '#4169e1', sound: require('./native/sounds/gobies/first-and-foremost.mp3')},
                    {key: 'Great Save',           color: '#4169e1', sound: require('./native/sounds/gobies/great-save.mp3')},
                    {key: 'Oh No! Oh yeah!',      color: '#4169e1', sound: require('./native/sounds/gobies/oh-no-oh-yeah.mp3')},
                    {key: 'Scoober Crossfield',   color: '#4169e1', sound: require('./native/sounds/gobies/scoober-crossfield.mp3')},
                    {key: 'Stick Your Hand In',   color: '#4169e1', sound: require('./native/sounds/gobies/stick-your-hand-in.mp3')},
                    {key: 'Too Slow',             color: '#4169e1', sound: require('./native/sounds/gobies/too-slow.mp3')},
                    {key: 'What a look',          color: '#4169e1', sound: require('./native/sounds/gobies/what-a-look.mp3')},
                    {key: 'Oh noo! Too easy...',  color: '#4169e1', sound: require('./native/sounds/gobies/476lm.mp3')},
                    {key: 'Could work',           color: '#4169e1', sound: require('./native/sounds/gobies/837md.mp3')},
                    {key: 'Might still use that clip',  color: '#4169e1', sound: require('./native/sounds/gobies/e2xy2.mp3')},
                    {key: 'Wait! Wait, what?',    color: '#4169e1', sound: require('./native/sounds/gobies/gxnp3.mp3')},
                    {key: 'I\'m so confused',     color: '#4169e1', sound: require('./native/sounds/gobies/nicby.mp3')},
                    {key: 'What a dime',          color: '#4169e1', sound: require('./native/sounds/gobies/z79s6.mp3')},
                  ]},
               {title: 'Smokestack',
                 data: [
                   {key: 'Smokestack?',         color: '#ff8080', sound: require('./native/sounds/smokestack/d0ljs.mp3')},
                   {key: 'Terrible Pull',       color: '#ff8080', sound: require('./native/sounds/smokestack/1kft7.mp3')},
                   {key: 'Around!',             color: '#ff8080', sound: require('./native/sounds/smokestack/around.mp3')},
                   {key: 'I',                   color: '#ff8080', sound: require('./native/sounds/smokestack/i.mp3')},
                   {key: 'Foul!',               color: '#ff8080', sound: require('./native/sounds/smokestack/mgang.mp3')},
                   {key: 'Piece!',              color: '#ff8080', sound: require('./native/sounds/smokestack/piece.mp3')},
                   {key: 'Not that tired',      color: '#ff8080', sound: require('./native/sounds/smokestack/irha9.mp3')},
                   {key: 'Oh Joe',              color: '#ff8080', sound: require('./native/sounds/smokestack/joe.mp3')},
                   {key: 'Pretty good...',      color: '#ff8080', sound: require('./native/sounds/smokestack/pretty-good-and-then-wasnt.mp3')},
                   {key: 'Winter League Throw', color: '#ff8080', sound: require('./native/sounds/smokestack/winter-league-throw.mp3')},
                  ]},
               {title: 'Cleveland Cavaliers',
                data: [
                  {key: 'Come on Cavs',         color: '#6F2633', sound: require('./native/sounds/cavaliers/come_on_cavs.mp3')},
                  {key: 'Go Cavs Go',           color: '#FFB81C', sound: require('./native/sounds/cavaliers/go_cavs_go.mp3')},
                  {key: 'Off and Running',      color: '#6F2633', sound: require('./native/sounds/cavaliers/off_and_running.mp3')},
                  {key: 'Rock You Tonight',     color: '#FFB81C', sound: require('./native/sounds/cavaliers/rock_you_tonight.mp3')},
                  {key: 'This is Cleveland',    color: '#6F2633', sound: require('./native/sounds/cavaliers/this_is_cleveland.mp3')},
                  {key: 'Tonight\'s the Night', color: '#FFB81C', sound: require('./native/sounds/cavaliers/tonights_the_night.mp3')},
                  {key: 'You Gotta Be There',   color: '#6F2633', sound: require('./native/sounds/cavaliers/you_gotta_be_there.mp3')},
                ]},
               {title: 'Danny \'Bones\' Young',
                data: [
                  {key: 'Bid',            color: '#80e5ff', sound: require('./native/sounds/danny/bid.mp3')},
                  {key: 'Onus',           color: '#80e5ff', sound: require('./native/sounds/danny/onus.mp3')},
                  {key: 'On Your Chest',  color: '#80e5ff', sound: require('./native/sounds/danny/on-your-chest.mp3')},
                ]},
               {title: 'U24 2018 Championships',
                data: [
                  {key: 'Who was that?',        	color: '#841584', sound: require('./native/sounds/perth/4x2ng.mp3')},
                  {key: 'What a stunner!',      	color: '#841584', sound: require('./native/sounds/perth/83rrh.mp3')},
                  {key: 'What a handblock',     	color: '#841584', sound: require('./native/sounds/perth/024pz.mp3')},
                  {key: 'Unbelieveable grab!',  	color: '#841584', sound: require('./native/sounds/perth/yh2p4.mp3')},
                  {key: 'Magic!', 								color: '#841584', sound: require('./native/sounds/perth/8p98p.mp3')},
                  {key: 'Oh! Spicy one!', 				color: '#841584', sound: require('./native/sounds/perth/rjxd1.mp3')},
                  {key: 'Unbelieveable block!', 	color: '#841584', sound: require('./native/sounds/perth/tbxqr.mp3')},
                  {key: 'Crackers again', 				color: '#841584', sound: require('./native/sounds/perth/u615x.mp3')},
                  {key: 'I bought that shot', 		color: '#841584', sound: require('./native/sounds/perth/1jbgm.mp3')},
                  {key: 'She fooled me', 					color: '#841584', sound: require('./native/sounds/perth/t23py.mp3')},
                  {key: 'Could have sold me a house', 			    color: '#841584', sound: require('./native/sounds/perth/mn22k.mp3')},
                  {key: 'All over it like a dog\'s breakfast', 	color: '#841584', sound: require('./native/sounds/perth/3jcqg.mp3')},
                  {key: 'Pump those getaway sticks',  color: '#841584', sound: require('./native/sounds/perth/d90x1.mp3')},
                  {key: 'In the hot sun...', 					color: '#841584', sound: require('./native/sounds/perth/8nvlj.mp3')},
                  {key: 'Screamer of a bid', 					color: '#841584', sound: require('./native/sounds/perth/egu2u.mp3')},
                  {key: 'Flat out like a lizard drinking', color: '#841584', sound: require('./native/sounds/perth/gq67k.mp3')},
                  {key: 'Look at those athleticism',			 color: '#841584', sound: require('./native/sounds/perth/hk034.mp3')},
                  {key: 'Dance to a D', 						color: '#841584', sound: require('./native/sounds/perth/egu4c.mp3')},
                  {key: 'Wind does tricky things', 	color: '#841584', sound: require('./native/sounds/perth/gj5py.mp3')},
                  {key: 'Read it like a book', 			color: '#841584', sound: require('./native/sounds/perth/hehj3.mp3')},
                  {key: 'Cat in a hot tin roof', 		color: '#841584', sound: require('./native/sounds/perth/jp5c0.mp3')},
                  {key: 'Showing patience', 				color: '#841584', sound: require('./native/sounds/perth/nibx2.mp3')},
                  {key: 'Got there in the end', 		color: '#841584', sound: require('./native/sounds/perth/noe0h.mp3')},
                  {key: 'Lot of cooks in the pot', 	color: '#841584', sound: require('./native/sounds/perth/ufekr.mp3')},
                  {key: 'Shoots it (bad)', 					color: '#841584', sound: require('./native/sounds/perth/likot.mp3')},
                  {key: 'That\'s a shame', 					color: '#841584', sound: require('./native/sounds/perth/m8vkl.mp3')},
                  {key: 'Untimely error',  					color: '#841584', sound: require('./native/sounds/perth/57j61.mp3')},
                  {key: 'Little bit of a drop', 		color: '#841584', sound: require('./native/sounds/perth/70vmw.mp3')},
                  {key: '100 times', 							  color: '#841584', sound: require('./native/sounds/perth/16cc1.mp3')},
                  {key: 'Bad K-Pop Reference', 			color: '#841584', sound: require('./native/sounds/perth/f9fps.mp3')},
                ]},
              {title: 'Other',
                data: [
                   {key: 'Dire, Dire Docks - Mario 64',        color: '#cccccc', sound: require('./native/sounds/other/mario_64-dire_dire_docks.mp3')},
                   {key: 'Starting Race (First) - Mario Kart', color: '#cccccc', sound: require('./native/sounds/other/mario_kart-starting_race_first.mp3')},
                   {key: 'Finish Line - Mario Kart',           color: '#cccccc', sound: require('./native/sounds/other/mario_kart-finish_line.mp3')},
                   {key: 'Finish Line (Lost) - Mario Kart',    color: '#cccccc', sound: require('./native/sounds/other/mario_kart-finish_line_lost.mp3')},
                   {key: 'Star Power - Mario Kart',            color: '#cccccc', sound: require('./native/sounds/other/mario_kart-star_power.mp3')},
                   {key: 'Cantina Song - Star Wars',           color: '#cccccc', sound: require('./native/sounds/other/star_wars-cantina_song.mp3')},
                   {key: 'Cleveland Tourism 1',                color: '#cccccc', sound: require('./native/sounds/other/cle-tourism-1.mp3')},
                   {key: 'Cleveland Tourism 2',                color: '#cccccc', sound: require('./native/sounds/other/cle-tourism-2.mp3')},
                   {key: 'Hey Listen',                         color: '#cccccc', sound: require('./native/sounds/other/loz_navi_hey_listen.mp3')},
                   {key: 'Shark Week',                         color: '#cccccc', sound: require('./native/sounds/other/ofo0u.mp3')},
                   {key: 'So serious',                         color: '#cccccc', sound: require('./native/sounds/other/uz1at.mp3')},
                   {key: 'Pfft',                               color: '#cccccc', sound: require('./native/sounds/other/z08wz.mp3')},
                 ]},
              ]}
                renderItem={({item}) => <SoundButton soundObject={this.state.soundObject} title={item.key} sound={item.sound} color={item.color}/>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 2,
              }}
            />
            <SoundButton soundObject={this.state.soundObject} title='Stop' sound='stop' color='#4d4d4d'/>
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
