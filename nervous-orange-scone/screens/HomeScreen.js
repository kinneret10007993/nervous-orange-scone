import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Добро пожаловать на главный экран!</Text>
            <Button
                title="Перейти к деталям"
                onPress={() => navigation.navigate('Details', { itemId: 123, title: 'Пример заголовка' })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default HomeScreen;