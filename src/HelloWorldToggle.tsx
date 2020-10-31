import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const HelloWorldToggle = () => {
  const [show, setShow] = React.useState(true);

  return (
    <View style={{
      padding: 16,
    }}>
      {show ? (
        <Text style={{
          fontSize: 32,
          fontWeight: 'bold',
          marginBottom: 16,
        }}>Hello world</Text>
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
