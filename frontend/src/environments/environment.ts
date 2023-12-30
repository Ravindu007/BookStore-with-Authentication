export const environment = {

  production:false,
  baseApiUrl : 'https://localhost:7134' ,
  auth:{
    domain:'dev-w6a5r3d3bzt1m8yl.us.auth0.com',
    clientId: 'gGr53fgDsWSOWMG7DmrS0caeAXlj5NxA',
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  }
};
