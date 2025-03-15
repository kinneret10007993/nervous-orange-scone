import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DetailsScreen({ route }) {
    const { itemId, title } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Детали экрана</Text>
            <Text>ID элемента: {itemId}</Text>
            <Text>Заголовок: {title}</Text>
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

export default DetailsScreen;