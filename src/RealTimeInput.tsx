import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput, IconButton, Colors } from 'react-native-paper';

const RealTimeInput = (props) => {
  const showAlert = () => {
    Alert.alert(
      'You\'re typing',
      props.text,
      [
        { text: 'Cancel' },
      ],
      { cancelable: true },
    );
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        label="Input anything"
        value={props.text}
        onChangeText={text => props.setText(text)}
        right={(
          <TextInput.Icon
            name="send"
            onPress={showAlert}
          />
        )}
      />
    </View>
  );
};

export default RealTimeInput;
