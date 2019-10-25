import React from 'react';
import { IonButton, IonPage, IonButtons, IonHeader, IonToolbar, IonBackButton, IonTitle, IonContent } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import 'capacitor-secure-storage-plugin';


export const EncryptedText:React.FC = () => {

    const { SecureStoragePlugin } = Plugins;
    
    const setCredentials = () => {

        const key = 'user';
        const value = 'hellokitty2';

        SecureStoragePlugin.set({ key, value })
            .then((success:any) => console.log(success))

    }

    const getCredentials = () => {

        const key = 'user';
        SecureStoragePlugin.get({key})
            .then((success:any)=> alert(JSON.stringify(success)))
            .catch((error:any)=> alert(error))

    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton  defaultHref="/home"/>
                    </IonButtons>
                    <IonTitle>Secure Storage</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton color="tertiary" onClick={setCredentials}> Set Credentials</IonButton>
                <IonButton color="tertiary" onClick={getCredentials}> Get Credentials</IonButton>
            </IonContent>
        </IonPage>
    )
}