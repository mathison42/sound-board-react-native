import React from 'react';
import { Button, Alert, View } from 'react-native';
import { Audio } from 'expo';


const SoundButton = ({soundObject, sound, title}) => {
    return <View style={{ padding: 8 }} >
              <Button
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
          </View>
}

export default SoundButton;
