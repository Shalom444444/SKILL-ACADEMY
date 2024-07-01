import { CheckIcon } from 'lucide-react'
import { Button } from './ui/button'

const PricingCard = () => {
  return (
    <div className="flex flex-col rounded-xl p-6 bg-black/30 shadow-lg dark:bg-zinc-850 justify-between border border-muted ">
            <div>
              <h3 className="text-2xl font-bold text-center text-green-500">PREMUIN</h3>
              <div className="mt-4 text-center text-white">
                <span className="text-4xl font-bold">$29</span>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Visionner les tutoriels en avance
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Voir les vidéos premium
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Télécharger les sources
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
  )
}

export default PricingCard