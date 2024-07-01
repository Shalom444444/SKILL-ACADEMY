
import { SignInAuthForm } from '@/components/SingInAuthForm'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const page = () => {
  
  return (
    <div className=" container bg-muted relative flex h-[800px] sm:flex-col items-center justify-center lg:px-0">
    <NavLink
      to="/register"
      className={cn(
        buttonVariants({ variant: "default" }),
        "absolute right-2 top-2 md:right-4 md:top-4 rounded-full"
      )}
    >
      S'inscrire
    </NavLink>
    <NavLink
      to="/"
      className={(
        "absolute left-2 text-white font-bold top-2 md:left-4 md:top-4 rounded-full"
      )}
    >
      <ArrowLeft/>
    </NavLink>

    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Connectez-vous
          </h1>
          <p className="text-sm text-muted-foreground">
            Entrer les informations necessaires ici pour creer votre compte
          </p>
        </div>
        <SignInAuthForm />
        <p className="px-8 text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <NavLink
            to="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </NavLink>{" "}
          and{" "}
          <NavLink
            to="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </NavLink>
          .
        </p>
      </div>
    </div>
  </div>
  )
}

export default page