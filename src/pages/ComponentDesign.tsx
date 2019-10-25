import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonToggle, IonButton, IonList, IonItem, IonCheckbox, IonLabel, IonRadio, IonInput } from "@ionic/react"
import React from 'react';
import '../css/components/ionic/ionic-components.css';
// import '../css/components/ionic/ion-button.css';

export const ComponentDesign: React.FC = () => {

    const borderColorChange = () =>{
        console.log('pol');
    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Component Designs</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    <IonItem lines="none">
                        {/* <IonLabel>No</IonLabel> */}
                        <IonToggle mode="ios" onChange={borderColorChange}></IonToggle>
                        {/* <IonLabel>Yes</IonLabel> */}
                    </IonItem>
                    <IonItem lines="none">
                        <IonButton color="new-business-button">NEXT</IonButton>
                        <IonButton color="new-business-button" fill="outline">BACK</IonButton>
                    </IonItem>
                    <IonItem lines="none">
                    <IonCheckbox slot="start" color="new-business-button"/>
                    <IonLabel position="fixed">NB</IonLabel>  
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel color="new-business-button">New Business</IonLabel>
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel position="fixed">NB</IonLabel> 
                        <IonRadio slot="start" color="new-business-button"></IonRadio>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating" color="new-business-button">*Floating Label</IonLabel>  
                        <IonInput clearInput value="clear me" color="new-business-button"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="new-business-button" position="stacked">*Stacked Label</IonLabel>  
                        <IonInput color="new-business-button" type="email" pattern="email"></IonInput>
                    </IonItem>
                </IonList>
                

            </IonContent>
            
        </IonPage>
    )
}