import { Button } from "./ui/button"

const Hero = () => {
  return (
    <section  className='h-[26rem] w-full bg-black p-2 m-auto rounded-xl'>
        <div className='w-full relative  h-full flex flex-col items-center rounded-xl gap-4 justify-center p-10'>
            <h1 className="text-5xl max-sm:text-2xl font-semibold uppercase text-white text-center">
            APPRENEZ <span className="text-purple-500">FACILEMENT</span> DE NOUVELLES COMPÉTENCES POUR VOTRE  <span className="text-primary">FUTUR CARRIERE</span>
            </h1>
            <p className=" text-muted-foreground text-center max-sm:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iusto ipsam a, aspernatur repellat mollitia ea delectus asperiores deleniti corrupti tempore fugiat repudiandae molestiae ex officiis facere expedita amet sed.</p>
            <div className="flex items-center gap-2">
                <Button variant={"outline"} className="bg-muted text-white rounded-full">
                    Essayer une formation
                </Button>
            </div>
        </div>
    </section>
  )
}

export default Hero