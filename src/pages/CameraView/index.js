import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Permissions} from 'react-native-unimodules';
import * as ImagePicker from 'expo-image-picker';
import * as Device from 'expo-device';
import * as Haptics from 'expo-haptics';
import {Video} from 'expo-av';
import styles from './styles';

const GRANTED = 'granted';

class CameraView extends Component {
  state = {
    image: null,
  };

  // Open Camera
  _takePhoto = async () => {
    const permissionRes = await Permissions.askAsync(Permissions.CAMERA);

    if (permissionRes.status !== GRANTED) {
      return false;
    }

    const imageData = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });

    if (!imageData.cancelled) {
      this.setState({image: imageData.uri});
    }
  };

  // Pick Library
  _pickImage = async () => {
    const permissionRes = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (permissionRes.status !== GRANTED) {
      return false;
    }

    const imageData = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
    });

    if (!imageData.cancelled) {
      this.setState({image: imageData.uri});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._takePhoto}>
          <Text style={styles.text}>カメラ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._pickImage}>
          <Text style={styles.text}>ライブラリ</Text>
        </TouchableOpacity>
        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{
            width: 300,
            height: 300
          }}
        />
      </View>
    );
  }
}

export default CameraView;
