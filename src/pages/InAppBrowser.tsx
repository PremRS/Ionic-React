import { IonHeader, IonToolbar, IonBackButton, IonTitle, IonContent, IonPage, IonButton, IonButtons } from "@ionic/react"
import { Plugins } from "@capacitor/core"
import React from 'react';

export const InAppBrowser: React.FC = () => {

    const openBrowser = async() => {

        const { Browser } = Plugins;

        await Browser.open({
            url:"https://www.nvenergy.com/",
        });
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton  defaultHref="/home"/>
                    </IonButtons>
                    <IonTitle>App Browser</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton color="tertiary" onClick={openBrowser}> Open Browser</IonButton>
            </IonContent>
        </IonPage>
    )
}