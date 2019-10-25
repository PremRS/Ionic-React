import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton, IonList, IonItem } from '@ionic/react';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file'
import { FilePath } from '@ionic-native/file-path';


const FilePicker: React.FC = () => {


    const [file] = useState(File);
    let fileTransfer: FileTransferObject;

    const UploadFile = () => {

        
        FileChooser.open().then((uri) => {
           
            
            FilePath.resolveNativePath(uri).then(
                (nativePath) => {
                    fileTransfer = FileTransfer.create();
        let options: FileUploadOptions = {
            fileKey: 'file',
            fileName: 'first.txt',
            chunkedMode: false,
            headers: {},
            mimeType: 'text/plain'
        }
        nativePath ="Rpest.txt";
        alert(nativePath);
        fileTransfer.upload(nativePath, "ftp.dlptest.com", options).then(
            (data) => {
                alert("Transfer Done =" + JSON.stringify(data));
            }, (error) => {
                alert(JSON.stringify(error));
            })    
                }, (error) => {
                alert(JSON.stringify(error))
            })
        }, (error) => {
            alert(JSON.stringify(error));
        })
    }

    // const uploadFileUsingNewFeature = () => {

    //     //@ts-ignore
    //     window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
    //         console.log('file system open: ' + fs.name);
    //         fs.root.getFile('bot.png', { create: true, exclusive: false }, function (fileEntry) {
    //             fileEntry.file(function (file) {
    //                 var reader = new FileReader();
    //                 reader.onloadend = function() {
    //                     // Create a blob based on the FileReader "result", which we asked to be retrieved as an ArrayBuffer
    //                     var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
    //                     var oReq = new XMLHttpRequest();
    //                     oReq.open("POST", "http://mysweeturl.com/upload_handler", true);
    //                     oReq.onload = function (oEvent) {
    //                         // all done!
    //                     };
    //                     // Pass the blob in to XHR's send method
    //                     oReq.send(blob);
    //                 };
    //                 // Read the file as an ArrayBuffer
    //                 reader.readAsArrayBuffer(file);
    //             }, function (err) { 
    //                 console.error('error getting fileentry file!' + err); 
    //             });
    //         }, function (err) { console.error('error getting file! ' + err); });
    //     }, function (err) { console.error('error getting persistent fs! ' + err); });
    // }
    const AbortUpload = () => {

        fileTransfer.abort();
        alert("Upload Cancel");
    }

    const DownloadFile = () => {

        let url = encodeURI("http://www.w3.org/2011/web-apps-ws/papers/Nitobi.pdf");
        //here initializing object.  
        fileTransfer = FileTransfer.create();

        // here iam mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. You can change a file path whatever pre-defined method.  
        fileTransfer.download(url, file.externalApplicationStorageDirectory + "Nitobi.pdf", true).then((entry) => {
            //here logging our success downloaded file path in mobile.  
            alert('download completed: ' + entry.toURL());
        }, (error) => {
            //here logging our error its easier to find out what type of error occured.  
            alert('download failed: ' + error)
        });


    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>
                        File Upload
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList >
                    <IonItem lines="none">
                        <IonButton color="primary" onClick={UploadFile}>
                            Upload File
                        </IonButton>
                        <IonButton color="tertiary" onClick={AbortUpload}>
                            Cancel Upload
                        </IonButton>
                    </IonItem>
                    <IonItem lines="none">
                        <IonButton color="primary" onClick={DownloadFile}>
                            Download
                        </IonButton>
                    </IonItem>
                        <input type="file" />
                </IonList>

            </IonContent>
        </IonPage>
    );
};

export default FilePicker;


// alert(nativePath);
// fileName = nativePath.substr(nativePath.lastIndexOf('/') + 1);

// //@ts-ignore
// window.requestFileSystem(LocalFileSystem.PERSISTENT, 1024*1024, function (fs) {
//     alert('file system open: ' + fs.name);
//     fs.root.getFile(fileName, {create: true, exclusive:true},function(ent: FileEntry){
//         alert("success");
//         alert(JSON.stringify(ent));
//          nativePath = ent.nativeURL;

//         ent.createWriter(function(fileWriter) {

//             fileWriter.onwriteend = function(e) {
//               console.log('Write completed.');
//               alert('Write completed.')
//             };
      
//             fileWriter.onerror = function(e) {
//               console.log('Write failed: ' + e.toString());
//               alert('Write failed: ' + e.toString())
//             };
      
//             // Create a new Blob and write it to log.txt.
//             var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});
            
//             alert(JSON.stringify(blob));
//             fileWriter.write(blob);

//             //@ts-ignore
// window.resolveLocalFileSystemURL(nativePath, function (entry:FileEntry) {
//     entry.file(function(fl){

//         alert("Inside entry "+JSON.stringify(fl));
    
//         nativePath = fl.localURL;
        
//         alert("Inside entry again "+nativePath);
//         fileTransfer = FileTransfer.create();
//         let options: FileUploadOptions = {
//             fileKey: 'file',
//             fileName: 'first.txt',
//             chunkedMode: false,
//             headers: {},
//             mimeType: 'text/plain'
//         }
//         fileTransfer.upload(nativePath, "ftp.dlptest.com", options, true).then(
//             (data) => {
//                 alert("Transfer Done =" + JSON.stringify(data));
//             }, (error) => {
//                 alert(JSON.stringify(error));
//             })
//     })
// })
      
//           }, (error) => {
//             alert(JSON.stringify(error));
//         });
        


       

//     },function(error: any){
//         alert("faulty");
//         alert(JSON.stringify(error));
//     }
//     )
     

// })