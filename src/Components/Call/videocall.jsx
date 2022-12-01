import React from "react";
import { useState, useEffect } from 'react';
import { ObtenerChatsPorUsuario, IniciarChat, InsertarChat } from '../../Services/chat.service';



const Call = ({ joinRoom, titleAside, messagesOrteams, closeConnection }) => {
    const [str, setStr] = useState([]);
    const dummy = firebase.database().ref().child("data");

    useEffect(() => {
        let videoRef;
        let Uniquekey;
        let array = [];
        let nombre;
            initializeFirebase();
            
            // videoRef = document.getElementById('video');
        
            dummy.on("child_added", (snap) => {
                let key = snap.key;
                let data = snap.val();
        
                if (data.nombre == nombre) {
                    Uniquekey = key;
                }
            });
        
            dummy.on("child_changed", (snap) => {
                let key = snap.key;
                let data = snap.val();
                let add = true;
        
                let object = {
                    id: key,
                    img: data.img
                }
        
                //sava data into array
                if (array.length == 0) {
                    array.push(object);
                    add = false;
                }
                else {
                    for (let i = 0; i < array.length; i++) {
                        if (array[i].id == key) {
                            array[i].img = data.img;
                            add = false;
                            break;
                        }
                    }
                }
        
                if (add == true) {
                    array.push(object);
                }
        
                let str = "";
                $("#container").html("");
        
                for (let i = 0; i < array.length; i++) {
                    str += `
                    <img src="` + array[i].img + ` "width="600" height="400">
                    `;
                }
                $("#container").html(str);
        
            });
        
            $("#Camera").click(function (event) {
                event.preventDefault();
        
                //push a firebase
                var data = dummy.push();
                let img = "img";
                nombre = document.querySelector(localStorage.getItem('UserName'));
                data.set({
                    img,
                    nombre
                });
        
                navigator.mediaDevices.getUserMedia({
                    video: { width: 300, height: 250 },
                    audio: true
                }).then(stream => {
                    videoRef.srcObject = stream;
                })
        
                setInterval((e) => {
                    let video = document.getElementById('video');
                    //
                    let canvas = document.getElementById('canvas');
                    let context = canvas.getContext("2d");
                    canvas.width = 1280;
                    canvas.height = 720;
                    //
                    context.drawImage(video, 0, 0);
                    let blob = canvas.toDataURL('image/webp');
                    updateFirebase(Uniquekey, blob);
                }, 1000)
            });
      
        
   
        
       
    }, []);

    function initializeFirebase() {
        const firebaseConfig = {
            apiKey: "AIzaSyAB8gkaiRDRwhi3vaKsShPuFd6HxzJld1E",
            authDomain: "pooint-89608.firebaseapp.com",
            projectId: "pooint-89608",
            storageBucket: "pooint-89608.appspot.com",
            messagingSenderId: "681259061195",
            appId: "1:681259061195:web:38466c5a03d627fa29304e",
            measurementId: "G-E7CJPRB67R"
        };
    
        firebase.initializeApp(firebaseConfig);
    }

    function updateFirebase(currentKey, blob) {
        const dummy = firebase.database().ref().child(`data/${currentKey}`);
        dummy.update({
            img: blob
        })
    }

return (
<aside className='videocall d-flex align-items-center flex-column'>
    <div className="row w-100 m-0 d-flex flex-column align-items-center">
        
        <h2>opciones</h2>

            <button style="cursor: pointer;" class="btn text-danger" id="xd">
                Conectar Chat
            </button>
            <video id="video" src="" controls autolay>
            </video>
            <canvas id="canvas" style="display: none;" width="300" height="300">
            </canvas>
            <div id="container" dangerouslySetInnerHTML={{__html: setStr}}>
            </div>
        
    </div>
</aside>
);
}

export default Call;