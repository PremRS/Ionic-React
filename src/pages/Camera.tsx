import React, { useState }  from 'react';
import { IonPage, IonFabButton, IonIcon, IonFab, IonHeader, IonToolbar, IonTitle, IonContent, IonFabList, IonCard, useIonViewDidEnter, IonButtons, IonBackButton } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import 'capacitor-camera-preview';
// import { DomSanitizer } from '@angular/platform-browser';

const backgroundStyle ={
    backgroundColor:"transparent"
}

const Camera: React.FC = () => {
    
    const [ pic ,setPic ] = useState();

    // let sanitizer: DomSanitizer;
    

    useIonViewDidEnter(()=>{
        defineCustomElements(window);
    });
    

    const takePicture = async () => {
        
        const { Camera } = Plugins;

        const result = await Camera.getPhoto({
            quality:100,
            allowEditing:false,
            resultType:CameraResultType.DataUrl,
            source:CameraSource.Camera   
        })
        //  setPic(sanitizer.bypassSecurityTrustUrl(result.dataUrl));
            setPic(result.dataUrl);  
    }

    const takePhoto = async() =>  {

        const { CameraPreview } = Plugins;

        await CameraPreview.start({
            position: "rear"
        });

        const result = await CameraPreview.capture();

        const base64PictureData = result.value;
        console.log(result.value)
        setPic(base64PictureData);
            
        CameraPreview.stop();
        
        console.log(result);
        

    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="tertiary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Camera Preview</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard style={backgroundStyle}>
                    <img src={pic} alt=""/>
                </IonCard>
                <IonFab horizontal="center" vertical="bottom" slot="fixed">
                    <IonFabButton color="tertiary" >
                        <IonIcon icon={camera} />
                    </IonFabButton>
                    <IonFabList side="start">
                        <IonFabButton color="tertiary" onClick={takePicture}>
                            <IonIcon icon={camera} />  
                        </IonFabButton>
                        1
                    </IonFabList>

                    <IonFabList side="end">
                        <IonFabButton color="tertiary" onClick={takePhoto}>
                            <IonIcon icon={camera} />
                        </IonFabButton>
                        2
                    </IonFabList>
                </IonFab>
            </IonContent>

        </IonPage>
    );
};

export default Camera;