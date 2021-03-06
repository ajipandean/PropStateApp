import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const HelloWorldToggle = (props) => {
  const [show, setShow] = React.useState(true);

  return (
    <View style={{
      padding: 16,
    }}>
      {show ? (
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 16,
        }}>
          {props.text.length > 0 ? props.text : 'Please type something...'}
        </Text>
      ) : null}
      <Button
        mode="contained"
        onPress={() => setShow(!show)}
      >
        {show ? 'Sembunyikan' : 'Tampilkan'}
      </Button>
    </View>
  );
};

export default HelloWorldToggle;
