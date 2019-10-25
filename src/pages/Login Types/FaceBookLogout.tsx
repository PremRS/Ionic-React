import { RouteComponentProps } from "react-router";
import React from 'react';
import { IonPage, IonContent, IonFab, IonFabButton, IonIcon, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from "@ionic/react";
import { Plugins } from "@capacitor/core";
import { exit } from "ionicons/icons";

export const FaceBookLogout: React.FC<RouteComponentProps> = (props) => {

    const fbLogout = async() => {
        
        const { FacebookLogin } = Plugins;
        await FacebookLogin.logout();
        props.history.push('/facebookauth');
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>
                        Facebook
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Welcome User

            <IonFab vertical="center" horizontal="center" slot="fixed" >
                <IonFabButton color="tertiary" onClick={fbLogout}>
                    <IonIcon icon={exit} />
                </IonFabButton>
            </IonFab>
            </IonContent>
        </IonPage>
        
    )
}