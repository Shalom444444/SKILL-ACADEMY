import PricingCard from './PricingCard'

const SectionPricing = () => {
  return (
    <div className='w-full flex justify-center'>
        <section className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <PricingCard/>
            <PricingCard/>
        </section>
    </div>
  )
}

export default SectionPricing