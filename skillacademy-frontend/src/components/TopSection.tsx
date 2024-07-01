import { User2Icon } from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
type TopSectionProps = {
    user?:any;
}

export const TopSection = (props:TopSectionProps) =>{
    
    return (
        <section className="w-full flex container max-sm:flex-col items-center max-sm:justify-center gap-4 ">
            <div className="w-32 h-32 uppercase text-white text-5xl rounded-full text-center flex justify-center items-center bg-background border-2 border-green-500">
                <User2Icon size={70}/>
            </div>
            <div className="text-xl text-white ">
                <h1>{props.user?.displayName??""}</h1>
                <h2 className="text-muted-foreground text-sm">{props.user?.admin?"Compte administrateur":"Compte standard"}</h2>
            </div>
        </section>
    )
}