import { IonHeader, IonButtons, IonBackButton, IonTitle, IonButton, IonPage, IonContent, IonToolbar, IonToast } from "@ionic/react"
import React, { useState } from 'react';
import { FusedLocationPlugin } from '@jonoj/capacitor-fused-location';
import { Plugins } from "@capacitor/core";

export const Geolocation: React.FC = () => {

    const { Geolocation } = Plugins;
    const FusedLocation  = new FusedLocationPlugin();

    const { Device } = Plugins;

    // const [FusedLocation] = useState(new FusedLocationPlugin())
    const [coordinates, setCoordinates] = useState();
    const [showToast, setShowToast] = useState(false);

    const currentLocation = async () => {

        const info = await Device.getInfo();

        if(info.platform === "android"){
            const coordinates = await FusedLocation.getCurrentPosition();
            const message = "Latitude: " + coordinates.coords.latitude + "\nLongitude: " + coordinates.coords.longitude;
            setCoordinates(message);

        }else {
            console.log(FusedLocation);

            const coordinates = await Geolocation.getCurrentPosition({ 
                enableHighAccuracy: true,
                timeout:3000,
                maximumAge:0 
            });
            const message = "Latitude: " + coordinates.coords.latitude + "\nLongitude: " + coordinates.coords.longitude;
            setCoordinates(message);
        }
        
        setShowToast(true);

    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Geolocation</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton color="tertiary" onClick={currentLocation}>Get Location</IonButton>
            </IonContent>
            <IonToast 
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message={coordinates}
                duration={5000}
                mode="md"
            />
        </IonPage>
    )
}