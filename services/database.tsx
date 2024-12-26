import firestore from "@react-native-firebase/firestore";

class FirestoreService {
    private firestore: ReturnType<typeof firestore>;

    constructor() {
        this.firestore = firestore();
    }

    // Method to get a collection
    async getCollection(collectionName: string) {
        try {
            const snapshot = await this.firestore.collection(collectionName).get();
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return data;
        } catch (error) {
            console.error("Error getting collection:", error);
            throw error;
        }
    }

    // Method to get a document by ID
    async getDocument(collectionName: string, docId: string) {
        try {
            const doc = await this.firestore.collection(collectionName).doc(docId).get();
            if (doc.exists) {
                return { id: doc.id, ...doc.data() };
            } else {
                throw new Error("Document not found");
            }
        } catch (error) {
            console.error("Error getting document:", error);
            throw error;
        }
    }

    // Method to add a document
    async addDocument(collectionName: string, data: any) {
        try {
            const docRef = await this.firestore.collection(collectionName).add(data);
            return { id: docRef.id, ...data };
        } catch (error) {
            console.error("Error adding document:", error);
            throw error;
        }
    }

    // Method to update a document
    async updateDocument(collectionName: string, docId: string, data: any) {
        try {
            await this.firestore.collection(collectionName).doc(docId).update(data);
            return { id: docId, ...data };
        } catch (error) {
            console.error("Error updating document:", error);
            throw error;
        }
    }

    // Method to delete a document
    async deleteDocument(collectionName: string, docId: string) {
        try {
            await this.firestore.collection(collectionName).doc(docId).delete();
            return { id: docId };
        } catch (error) {
            console.error("Error deleting document:", error);
            throw error;
        }
    }

    async getUserChats(userId: string) {
        try {
            const snapshot = await this.firestore
                .collection('chats')
                .where('participants', 'array-contains', userId)
                .get();

            const chats = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return chats;
        } catch (error) {
            console.error("Error getting user chats:", error);
            throw error;
        }
    }

    async createChat(participants: string[]) {
        try {
            const chatRef = await this.firestore.collection('chats').add({
                participants
            });

            return { id: chatRef.id, participants };
        } catch (error) {
            console.error("Error creating chat:", error);
            throw error;
        }
    }

    async getChatHistoryOfUsers(userIds: string[]) {
        // the firebase sturcture is lik
        // chats collection has a document with the chat id
        // the chat document has a subcollection called messages
        // the chat document has a field called users which is an array of user ids
        // the messages subcollection has documents with the message id
        // the message document has a field called sender which is the user id of the sender
        // the message document has a field called text which is the message text
        try {
            const snapshot = await this.firestore
                .collection('chats')
                .where('participants', 'array-contains-any', userIds)
                .get();

            const chats = await Promise.all(
                snapshot.docs.map(async (doc) => {
                    const messages = await doc
                        .ref
                        .collection('messages')
                        .orderBy('timestamp', 'desc')
                        .get();

                    return {
                        id: doc.id,
                        ...doc.data(),
                        messages: messages.docs.map(messageDoc => ({
                            id: messageDoc.id,
                            ...messageDoc.data()
                        }))
                    };
                })
            );

            return chats;
        } catch (error) {
            console.error("Error getting chats:", error);
            throw error;
        }
    }
}

export default new FirestoreService();
