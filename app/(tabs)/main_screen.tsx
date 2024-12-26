import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import { Link } from 'expo-router';

const usersCollection = firestore().collection('users');

const MainScreen = () => {
    const [users, setUsers] = useState<{ name: string }[]>([]);

    useEffect(() => {
        usersCollection.get().then((querySnapshot) => {
            const usersList: { name: string }[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                usersList.push({ name: data.name as string });
            });
            setUsers(usersList);
        });
    }, []);

    return (
        <View>
            <Text>Chats</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
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