/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "@/firebase/firebase"
import { useNavigate } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignInAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [Error, setError] = React.useState<string>()
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const router =useNavigate();


  const handleSumbit = async () => {
    try {
    setIsLoading(true)
    await signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        const userDocExist = await getDoc(doc(db, "users", user.uid));

        if (userDocExist.exists()) {
          console.log("Document data:", userDocExist.data());
          localStorage.setItem("user", JSON.stringify(userDocExist.data()));  
          setIsLoading(false)
          router("/")
        } else {
          console.log("No such document!");
        }
      })

    } catch (error:any) {

      if(error.code === "auth/missing-email"){
        setError("email introuvable");
      }else
        if (error.code === "auth/wrong-password") {
            setError("mot de passe incorrect");
          } else
        if (error.code === "auth/network-request-failed") {
          setError("Connexion echouée");
        }else{
          setError("Vous n'avez pas de compte !");
        }
        
        console.error(error.code);
        setIsLoading(false);
    }
};

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div>
        <div className="grid gap-3">
        {Error&&<div className="h-auto p-4 text-center flex items-center bg-red-500/20 text-red-500 border-red-500 border">
          {Error??""}
          </div>}
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              className="rounded-xl text-white"
            />
          </div>
          <Button 
          onClick={handleSumbit}
          disabled={isLoading} className="rounded-xl ">
            {isLoading ? (
              <div className="animate-spin w-4 h-4 inline-block border-r-black border-2 rounded-full" />
            ):"Connexion"}
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