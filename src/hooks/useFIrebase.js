import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseInitialize from '../firebase.js/firebase.intialize';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
firebaseInitialize()
const useFirebase = () => {
    const [fire, setFire] = useState({});
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const auth = getAuth();
    const handlereg = (email, password, displayName) =>{
        setError('')
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(res =>{
            const user = res.user
             axios.post("https://ancient-earth-75371.herokuapp.com/admin",{
                 email: user.email,
                 displayName
             })
             .then(res =>{
                if(res.data.insertedId){
                    alert("Admin Add successfully")
                }
             })
        })
        .finally(()=>setLoading(false))
        .catch(err =>{
            const errorMessage = err.message;
            console.log(err);
            setError(errorMessage)
        })
        .finally(()=>setLoading(false))
           
    };
    //log in
    const handleLogin = (email, password) =>{
        setError('')
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(res =>{
            const user = res.user
            axios.get(`https://ancient-earth-75371.herokuapp.com/admin/${user.email}`)
            .then(res => {
                setFire(res.data)
                if(res.data.email){
                   alert("thank you for login")
                }
            })
            .catch(err => {
                if(err.message === "Cannot read properties of null (reading 'email')"){
                    alert("contect with your team you are remove from admin")
                }
            })
        }).finally(()=>setLoading(false))
        .catch(err =>{
            setError(err.message)
        }).finally(()=>setLoading(false))
    }
    useEffect(()=>{
        setUser(fire)
    },[fire])
    //logout
    const Logout = ()=>{
        setLoading(true)
            signOut(auth)
            .then(()=>{
                setUser({})
            })
            .finally(()=> setLoading(false))
        }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setFire(user)
              // ...
            } else {
              setFire({})
            }
          });
    },[])
    
    return {
     handlereg,
     loading,
     error,
     handleLogin,
     user,
     Logout
    };
};

export default useFirebase;