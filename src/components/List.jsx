import {Text, View} from 'react-native';
import { StyleSheet } from 'react-native';

const ListComponent = (id, name, imagen) => {  
    return (
        <View style={styles.container}>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{imagen}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
      },
});

export default ListComponent;
