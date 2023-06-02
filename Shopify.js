const form = document.getElementById('contactForm');

const firebaseConfig = {
    apiKey: "AIzaSyC83SHqsCTpPFASHRBjXKRnR0vwlbbpngM",
    authDomain: "shopify-78b00.firebaseapp.com",
    databaseURL: "https://shopify-78b00-default-rtdb.firebaseio.com",
    projectId: "shopify-78b00",
    storageBucket: "shopify-78b00.appspot.com",
    messagingSenderId: "276913298222",
    appId: "1:276913298222:web:07a8f960a7e50d6e01b8bf"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  const database = firebase.database()

  const ref = database.ref("messages")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    
    ref.push({
        email:email,
    })
}
)