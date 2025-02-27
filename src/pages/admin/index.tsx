import React from 'react'

function index() {
  return (
    <div>
        <button id="login">Iniciar sesión con Google</button>
        <script src="https://apis.google.com/js/api.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function initApiClient() {
                gapi.load('client:auth2', initAuth);
              }
            
              function initAuth() {
                // Configura el cliente de OAuth 2.0
                gapi.auth2.init({
                  client_id: '195456134635-bbtjpm2sr8bvgq75tte4hdd1u89p15nt.apps.googleusercontent.com',  // Usa tu Client ID
                  scope: 'https://www.googleapis.com/auth/blogger', // El scope necesario para acceder a Blogger
                }).then(function () {
                  // Verifica si ya está autenticado
                  if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
                    console.log('Usuario autenticado');
                  } else {
                    // Autenticación manual si no está autenticado
                    gapi.auth2.getAuthInstance().signIn().then(function() {
                      console.log('Autenticado');
                      obtenerToken();
                    });
                  }
                });
              }
            
              function obtenerToken() {
                const authInstance = gapi.auth2.getAuthInstance();
                const token = authInstance.currentUser.get().getAuthResponse().access_token;
                console.log('Token de acceso:', token);
                // Ahora puedes usar este token para hacer solicitudes a la API de Blogger
              }         
            document.getElementById("login").addEventListener("click", initApiClient)
              `
            ,
          }}
        />


    </div>
  )
}

export default index