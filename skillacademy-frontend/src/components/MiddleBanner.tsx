import { Card, CardContent } from './ui/card'

const MiddleBanner = () => {
  return (
    <section className='w-full flex h-full items-center justify-start my-16 max-lg:flex-col gap-4'>
        <Card className="w-full max-w-lg h-96   border-none rounded-xl bg-black ">
            <CardContent className="p-0">
                <div className=" aspect-card rounded-xl relative">
                <img
                    alt=""
                    className=" w-full h-96 rounded-xl object-cover  border-2 border-muted-foreground/30"
                src={"https://images.pexels.com/photos/6803543/pexels-photo-6803543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                />
                </div>
            </CardContent>
        </Card>

        <div className='flex h-full text-muted-foreground flex-col gap-8 p-4'>
            <h1 className='text-4xl font-bold text-white '>Choisissez d’apprendre ce qui vous intéresse</h1> 
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio, ab voluptatum magni quibusdam reiciendis totam quam sapiente, non dolores qui impedit aliquid minus sit similique reprehenderit in temporibus expedita.</p>   
        </div>
    </section>
  )
}

export default MiddleBanner