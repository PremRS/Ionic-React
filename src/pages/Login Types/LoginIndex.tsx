import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonList, IonItem, IonLabel, IonListHeader, IonAvatar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';

const LoginIndex: React.FC<RouteComponentProps> = (props) => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>
                        Plugins
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonListHeader>
                        Types
                    </IonListHeader>
                    <IonItem button onClick={()=>{props.history.push('/keychaintouchid')}} detail>
                        <IonAvatar slot="start">
                            <img src="assets/icon/favicon.png" alt="avatar"/>
                        </IonAvatar>
                        <IonLabel>KeyChain Touch ID</IonLabel>
                    </IonItem>
                    <IonItem button onClick={()=>{props.history.push('/capacitorfingerprint')}} detail>
                        <IonAvatar slot="start">
                            <img src="assets/icon/Capacitor.png" alt="avatar"/>
                        </IonAvatar>
                        <IonLabel>Capacitor FingerPrintAuth</IonLabel>
                    </IonItem>
                    <IonItem button onClick={()=>{props.history.push('/facebookauth')}} detail>
                        <IonAvatar slot="start">
                            <img src="assets/icon/Facebook.svg" alt="avatar"/>
                        </IonAvatar>
                        <IonLabel>Facebook Auth</IonLabel>   
                    </IonItem>
                    <IonItem button onClick={()=>{props.history.push('/login')}} detail>
                        <IonAvatar slot="start">
                            <img src="assets/icon/favicon.png" alt="avatar"/>
                        </IonAvatar>
                        <IonLabel>FingerPrint AIO Auth</IonLabel>   
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default LoginIndex;


  