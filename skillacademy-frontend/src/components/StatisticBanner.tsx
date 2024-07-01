
const StatisticBanner = () => {
  return (
    <section className='w-full flex items-center justify-center gap-8 max-sm:flex-col my-8'>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-4xl text-white font-bold text-center'>300<span className='text-primary '>+</span></h1>
            <h3 className='text-muted-foreground text-xl'>Participants</h3>
        </div>

        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-4xl text-white font-bold text-center'>50<span className=' text-purple-500'>+</span></h1>
            <h3 className='text-muted-foreground text-xl'>Formations Incroyables</h3>
        </div>

        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-4xl text-white font-bold text-center'>80<span className='text-primary '>+</span></h1>
            <h3 className='text-muted-foreground text-xl'>Mentors experts</h3>
        </div>

        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-4xl text-white font-bold text-center'>200<span className='text-purple-500 '>+</span></h1>
            <h3 className='text-muted-foreground text-xl'>Liens d'emploi</h3>
        </div>
        
    </section>
  )
}

export default StatisticBanner