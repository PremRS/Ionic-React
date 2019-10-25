import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/react"
import React, { useState } from 'react';
import { lock } from "ionicons/icons";
import { FingerPrintAuth } from 'capacitor-fingerprint-auth';
import { RouteComponentProps } from "react-router";


export const CapacitorFingerAuth: React.FC<RouteComponentProps> = (props) => {

    const [fingerPrint] = useState(new FingerPrintAuth());

const login = async() => {
    
    await fingerPrint.available()
    .then(async()=>{
        await fingerPrint.verify();
        props.history.push('/new');

    })
    .catch((err)=>{
        alert(err);
    });
    // const hasFingerPrintOrFaceAuth = data.has
    // const touch = data.touchId;
    // const face = data.faceId;

    // await fingerPrint.verifyWithFallback();
}
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/loginIndex" />
                    </IonButtons>
                    <IonTitle>
                        FingerPrint Auth
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                LOGIN 
            <IonFab vertical="center" horizontal="center" slot="fixed" >
                    <IonFabButton color="primary" onClick={login}>
                        <IonIcon icon={lock} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )

}