import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import NewPage from './pages/NewPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/LoginFingerPrintAio';
import LoginIndex from './pages/Login Types/LoginIndex';
import Camera from './pages/Camera';
import { KeyChainTouchId } from './pages/Login Types/KeyChainTouchId';
import { CapacitorFingerAuth } from './pages/Login Types/CapacitorFingerAuth';
import { FaceBookAuth } from './pages/Login Types/FaceBookAuth';
import { FaceBookLogout } from './pages/Login Types/FaceBookLogout';
import { InAppBrowser } from './pages/InAppBrowser';
import { Geolocation } from './pages/Geolocation';
import FilePicker from './pages/FilePicker';
import { ComponentDesign } from './pages/ComponentDesign';
import { EncryptedText } from './pages/EncryptedText';

const App: React.FC = () => {
return(
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        
        <Route path="/home" component={Home} exact={true} />
        <Route path="/new" component={NewPage} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/camera" component={Camera} exact={true} />
        <Route path="/browser" component={InAppBrowser} exact={true} />
        <Route path="/geolocation" component={Geolocation} exact={true} />
        <Route path="/file" component={FilePicker} exact={true} />
        <Route path="/loginindex" component={LoginIndex} exact={true} />
        <Route path="/keychaintouchid" component={KeyChainTouchId} exact={true} />
        <Route path="/capacitorfingerprint" component={CapacitorFingerAuth} exact={true} />
        <Route path="/facebookauth" component={FaceBookAuth} exact={true} />
        <Route path="/facebooklogout" component={FaceBookLogout} exact={true} />
        <Route path="/design" component={ComponentDesign} exact={true}/>
        <Route path="/secure" component={EncryptedText} exact={true} />
        {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
        <Redirect from="/" to="/home" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
      }
export default App;
