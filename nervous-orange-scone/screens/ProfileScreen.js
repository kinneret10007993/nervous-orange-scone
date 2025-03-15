import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Профиль пользователя</Text>
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

export default ProfileScreen;