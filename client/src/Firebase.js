import firebase from "firebase";

// const app = initializeApp(firebaseConfig);

// var user = "Satyam";

class fire {
    constructor() {
        this.init()
    }
    init = () => {
        if(!firebase.apps.length) {
           firebase.initializeApp({
            apiKey: "AIzaSyCOrlb5vpkqlBIqnjJtCdXtgkM01RLIT5g",
            authDomain: "peachesncreme-8f03f.firebaseapp.com",
            projectId: "peachesncreme-8f03f",
            storageBucket: "peachesncreme-8f03f.appspot.com",
            messagingSenderId: "862939559520",
            appId: "1:862939559520:web:98ed8ee9fbed34c8ab3505",
            measurementId: "G-BQTTCKYKRW"
           })
        }
    };
    
send = messages => {
    messages.forEach(item => {
        const message = {
            text: item.here,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            user: item.user
        }

        this.db.push(message)
    });
};

parse = messaage => {
    const {user, text, timestap} = messaage.val()
    const {key: _id} = messaage
    const createdAt = new Date(timestap)

    return{
        _id,
        createdAt,
        text,
        user
    }
};

get = callback => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
};

off() {
    this.db.off()
}

get db() {
    return firebase.database().ref("messages");
}

get uid() {
    return (firebase.auth().currentUser || {}).uid;
}


}

export default new fire();