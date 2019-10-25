import { useState } from "react";
import React from 'react';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio'
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { lock } from "ionicons/icons";
import { RouteComponentProps } from "react-router";


const Login: React.FC<RouteComponentProps> = (props) => {

    const [fingerPrint] = useState(FingerprintAIO);

     const login = () => {
        
        if(typeof(fingerPrint) !== 'undefined'){
        fingerPrint.isAvailable()
        .then(() => 
            {
                fingerPrint.show({
                    clientId: 'FingerPrint Authentication',
                    clientSecret: 'code'
                })
                    .then(() => {props.history.push('/new')})
                    .catch(error => alert(error))
            }
            )
        .catch(error => console.log(error));
        
        }
        else{
            console.log('Error');
        }
        
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>

                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>
                        Login
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                LOGIN 
            <IonFab vertical="center" horizontal="center" slot="fixed" >
                    <IonFabButton color="tertiary" onClick={login}>
                        <IonIcon icon={lock} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )
}

export default Login;