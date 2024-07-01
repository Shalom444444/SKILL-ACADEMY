"use client"
import TabsDashbord from "@/components/TabsDashbord"
import { TopSection } from "@/components/TopSection"
import { db } from "@/firebase/firebase"
import { User } from "@/lib/constants"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"

export const Profile = () => {
    const [user,setUser] = useState<User|null>(null)

    useEffect(()=>{
        const getUser = async()=>{
        const USER = localStorage.getItem("user")
        if(USER){
        setUser(JSON.parse(USER))
        }

        const userDocExist = await getDoc(doc(db, "users", user?.id??""));
        if (userDocExist.exists()) {
        console.log("Document data:", userDocExist.data());
        localStorage.setItem("user", JSON.stringify(userDocExist.data()));
        setUser(userDocExist.data())  
        } else {
        console.log("No such document!");
        }

    
        }

        getUser()
        return ()=>{
        setUser(null)
        }
        },[user?.id])

    return (
        <main>
            <TopSection user={user}/>
            <TabsDashbord user={user}/>
        </main>
    )
}