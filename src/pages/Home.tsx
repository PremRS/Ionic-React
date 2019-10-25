import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonFab, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';
import React from 'react';
// import {PropTypes } from 'react';
import { code } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';

const Home: React.FC<RouteComponentProps> = (props) => {
  // const RouteContext = React.createContext({router:PropTypes.object.isRequired});

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid no-padding>
          <IonRow>
            <IonCol no-padding size="6" size-xl="2" size-lg="3" size-md="4" size-sm="6">
              <IonCard button onClick={()=> {props.history.push('/file')}}>
                <img src="assets/icon/FileUpload.png" alt="avatar"/>
                <IonCardContent>
                  File Upload
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol no-padding size="6" size-xl="2" size-lg="3" size-md="4" size-sm="6">
              <IonCard button onClick={()=> {props.history.push('/loginindex')}}>
                <img src="assets/icon/Login.jpg" alt="avatar"/>
                <IonCardContent>
                  Login
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol no-padding size="6" size-xl="2" size-lg="3" size-md="4" size-sm="6">
              <IonCard button onClick={()=> {props.history.push('/camera')}}>
                <img src="assets/icon/Camera.png" alt="avatar"/>
                <IonCardContent>
                  Camera
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol no-padding size="6" size-xl="2" size-lg="3" size-md="4" size-sm="6">
              <IonCard button onClick={()=> {props.history.push('/browser')}}> 
                <img src="assets/icon/Browser.png" alt="avatar"/>
                <IonCardContent>
                  In-App Browser
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol no-padding size="6" size-xl="2" size-lg="3" size-md="4" size-sm="6">
              <IonCard button onClick={()=> {props.history.push('/geolocation')}}>
                <img src="assets/icon/Geolocation.png" alt="avatar"/>
                <IonCardContent>
                  Geolocation
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol no-padding size="6" size-xl="2" size-lg="3" size-md="4" size-sm="6">
              <IonCard button onClick={()=> {props.history.push('/design')}}>
                <img src="assets/icon/NvEnergy.svg" alt="avatar"/>
                <IonCardContent>
                  Design 
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="end" slot="fixed" >
          <IonFabButton color="tertiary" onClick={() => props.history.push('/secure')}>
            <IonIcon icon={code} />
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Home;
