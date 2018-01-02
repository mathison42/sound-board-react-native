import React from 'react';
import { Button, Alert } from 'react-native';
import { Audio } from 'expo';


const SoundButton = ({soundObject, sound, title}) => {
    return <Button
              onPress={async () => {
                  try {
                    var playbackStatus = await soundObject.getStatusAsync()
                    if (playbackStatus.isLoaded) {
                        soundObject.unloadAsync();
                    }
                    if (sound !== "stop") {
                        console.log("Playing " + sound + "...");
                        await soundObject.loadAsync(sound);
                        await soundObject.playAsync();
                        // Your sound is playing!
                    }
                  } catch (error) {
                    Alert.alert('Oh noes!');
                    console.log(error.message);
                  }
              }}
              title={title}
            />
}

export default SoundButton;
