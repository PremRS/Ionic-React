import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonButton } from "@ionic/react"
import React from 'react';
import { KeychainTouchId } from '@ionic-native/keychain-touch-id';


export const KeyChainTouchId: React.FC = () => {

const initialPhase = () => {

    KeychainTouchId.isAvailable()
        .then((success)=>{
            alert("Available"+success);
            //@ts-ignore
            if(window.plugins) {
                //@ts-ignore
                window.plugins.touchid.save("Fantasalzo", "MyZtechProduct", true,
                 function() {
                    alert("Password saved");
                    },
                function() {
                    alert('Error');
                });
            }
            // KeychainTouchId.save("Fantasalzo","ZtechProduct")
            // .then((data)=>{alert(data)})
            // .catch((err)=>{alert(err)})
            
        })
        .catch((err)=>{alert(err)})


}

const getPhase = () => {

    KeychainTouchId.has("Fantasalzo")
        .then((success)=>{
            alert(success);
            KeychainTouchId.verify("Fantasalzo","Get Password")
                .then((data)=>{alert(data)})
                .catch((err)=>{alert(err)})
        })
        .catch((err)=>{alert(err)})
}
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/loginIndex" />
                    </IonButtons>
                    <IonTitle>
                        TouchId Auth
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton color="primary" onClick={initialPhase}> Set Password</IonButton>
                <IonButton color="primary" onClick={getPhase}> Get</IonButton>
            </IonContent>
        </IonPage>
    )

}