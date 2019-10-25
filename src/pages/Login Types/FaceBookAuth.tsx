import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/react"
import React from 'react';
import { Plugins } from '@capacitor/core';
import { logoFacebook } from "ionicons/icons";
import { registerWebPlugin } from '@capacitor/core';
import { FacebookLogin } from '@rdlabo/capacitor-facebook-login';
import { RouteComponentProps } from "react-router-dom";

registerWebPlugin(FacebookLogin);

export const FaceBookAuth: React.FC<RouteComponentProps> = (props) => {
    
    const fbLogin = async() => {
    
    const { FacebookLogin } = Plugins;

    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

    if (result.accessToken) {
        console.log(`Facebook access token is ${result.accessToken.token}`);
        props.history.push('/facebooklogout');
    } 
    else {
        alert('Problem Occurred');
    }
    
}


    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/loginIndex" />
                    </IonButtons>
                    <IonTitle>
                        Facebook Auth
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding"> 
                <IonFab vertical="center" horizontal="center" slot="fixed" >
                    <IonFabButton color="tertiary" onClick={fbLogin}>
                        <IonIcon icon={logoFacebook} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )

}