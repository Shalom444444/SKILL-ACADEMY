/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User } from "@/lib/constants"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "@/firebase/firebase"
import { db } from "@/firebase/firebase"
import { collection, doc, getDoc, getDocs, query, setDoc, Timestamp, where } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignUpAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>()
  const [Error, setError] = React.useState<string>()
  const [password, setPassword] = React.useState<string>()
  const [username, setUsername] = React.useState<string>()
  const router = useNavigate()

  // const signInWithGoogle = async () => {
  //   try {
  //       await signInWithPopup(auth, gProvider);
  //   } catch (error) {
  //       console.error(error);
  //   }
  // };

  const onSubmit=async()=>{
    const id=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const User:User={
      id,
      email,
      password,
      displayName:username
    }
    console.log(User)
    setIsLoading(true)

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email??User.email??"",
        password??User.password??"",
        
      );
      console.log(user)
      const usernameQuery = query(collection(db, 'users'), where('username', '==', username));
      const usernameSnapshot = await getDocs(usernameQuery);
      if (!usernameSnapshot.empty) {
        setError('Le nom d\'utilisateur est déjà pris. Veuillez en choisir un autre.');
        setIsLoading(false)
      }
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName||username,
        email: user.email||email,
        admin: false,
        createdAt: Timestamp.now(),
      });

      await updateProfile(user, {
        displayName:username,
      });

      const userDocExist = await getDoc(doc(db, "users", user.uid));

      if (userDocExist.exists()) {
        console.log("Document data:", userDocExist.data());
        localStorage.setItem("user", JSON.stringify(userDocExist.data()));  
        setIsLoading(false)
        router("/")
      } else {
        console.log("No such document!");
      }
      
    }catch (error){
      console.error(error)
      setError('Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer.');
      setIsLoading(false)
    }

  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div>
        <div className="grid gap-3">
          {Error&&<div className="h-auto p-4 bg-red-500/20 text-center text-red-500 border-red-500 border">
          {Error??""}
          </div>}

        <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Username
            </Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              className="rounded-xl text-white"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="rounded-xl text-white"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Mot de passe
            </Label>
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="mot de passe"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              className="rounded-xl text-white"
            />
          </div>
          <Button 
          onClick={onSubmit}
          disabled={isLoading} className="rounded-xl ">
            {isLoading ? (
              <div className="animate-spin w-4 h-4 inline-block border-r-black border-2 rounded-full" />
            ):"Inscription"}
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-muted px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="ghost" className="bg-black rounded-xl hover:border border-muted-foreground/20 text-white" type="button" disabled={isLoading}>
        {isLoading && (
          <div className="mr-2 h-4 w-4 animate-spin" />
        )} 
        Se connecter avec Google
      </Button>
    </div>
  )
}