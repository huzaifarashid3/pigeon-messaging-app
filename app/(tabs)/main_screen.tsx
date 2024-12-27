import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import { Link } from 'expo-router';
import FirestoreService from '../../services/database';
const usersCollection = firestore().collection('users');

const firestoreService = new FirestoreService();

const MainScreen = () => {
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        firestoreService.getAllUsers().then((users: string[]) => {
            setUsers(users);
        });
    }, []);


    return (
        <View>
            <Text>Chats</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item}</Text>
                        <Link href="/chat_screen" asChild>
                            <TouchableOpacity>
                                <Text>Chat</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                )}
            />
        </View>
    )
}

export default MainScreen