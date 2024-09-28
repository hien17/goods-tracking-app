'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MapPinIcon, TruckIcon, ShoppingBagIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const productImages = [
  '/placeholder.svg?height=400&width=400&text=Apple+1',
  '/placeholder.svg?height=400&width=400&text=Apple+2',
  '/placeholder.svg?height=400&width=400&text=Apple+3',
]

const mapContainerStyle = {
  width: '100%',
  height: '200px',
}

const center = {
  lat: 40.7128,
  lng: -74.006,
}

// function Map() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'YOUR_API_KEY_HERE',
//   })

//   return isLoaded ? (
//     <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
//       <Marker position={center} />
//     </GoogleMap>
//   ) : (
//     <></>
//   )
// }

export default function Buyer() {
  const [activeTab, setActiveTab] = useState('original')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [currentStatus, setCurrentStatus] = useState('In transit')

  const productStages = [
    {
      id: 'original',
      title: 'Original',
      icon: MapPinIcon,
      content: 'Farm: Green Acres\nHarvest Date: 2023-06-15\nProduct: Organic Apples\nQuantity: 500 kg',
    },
    {
      id: 'transportation',
      title: 'Transportation',
      icon: TruckIcon,
      content:
        'Carrier: Swift Logistics\nDeparture: 2023-06-16 08:00\nEstimated Arrival: 2023-06-17 14:00\nDistance: 300 km',
    },
    {
      id: 'commercial',
      title: 'Commercial',
      icon: ShoppingBagIcon,
      content: 'Retailer: FreshMart\nReceived: 2023-06-17 15:30\nStock Location: Aisle 3, Section B\nPrice: $2.99/kg',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const statusUpdates = [
      'Preparing for shipment',
      'In transit',
      'Arrived at distribution center',
      'Out for delivery',
      'Delivered',
    ]
    const updateInterval = setInterval(() => {
      setCurrentStatus(statusUpdates[Math.floor(Math.random() * statusUpdates.length)])
    }, 5000)

    return () => clearInterval(updateInterval)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + productImages.length) % productImages.length)
  }

  return (
    <div className='mx-auto my-20 flex w-full flex-col gap-6 rounded-xl border-2 border-black border-opacity-40 bg-gray-100 p-6 shadow-lg md:flex-row'>
      <Card className='group relative flex-1 overflow-hidden bg-white transition-shadow duration-300 hover:shadow-xl'>
        <CardContent className='p-0'>
          <div className='relative h-[400px]'>
            <img
              src={productImages[currentImageIndex]}
              alt={`Product Image ${currentImageIndex + 1}`}
              className='h-full w-full object-cover'
            />
            <Button
              className='absolute left-2 top-1/2 -translate-y-1/2 transform bg-white/50 hover:bg-white/75'
              onClick={prevImage}
            >
              <ChevronLeftIcon className='h-6 w-6' />
            </Button>
            <Button
              className='absolute right-2 top-1/2 -translate-y-1/2 transform bg-white/50 hover:bg-white/75'
              onClick={nextImage}
            >
              <ChevronRightIcon className='h-6 w-6' />
            </Button>
          </div>
          <div className='p-4'>
            <h2 className='text-2xl mb-2 font-bold text-gray-800'>Organic Apples</h2>
            <p className='text-gray-600'>Track the journey of our fresh, organic apples from farm to store.</p>
          </div>
        </CardContent>
        <div className='absolute inset-0 rounded-lg border-2 border-purple-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          <div className='animate-border-pulse absolute inset-0 rounded-lg border-2 border-purple-400'></div>
        </div>
      </Card>
      <div className='flex-1'>
        <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
          <TabsList className='grid w-full grid-cols-3 bg-gray-200'>
            {productStages.map((stage) => (
              <TabsTrigger
                key={stage.id}
                value={stage.id}
                className='transition-colors duration-200 hover:bg-purple-100 data-[state=active]:bg-purple-600 data-[state=active]:text-white'
              >
                <stage.icon className='mr-2 h-5 w-5' />
                {stage.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {productStages.map((stage) => (
                <TabsContent key={stage.id} value={stage.id}>
                  <Card className='transition-shadow duration-300 hover:shadow-md'>
                    <CardHeader>
                      <CardTitle className='flex items-center text-gray-800'>
                        <stage.icon className='mr-2 h-6 w-6 text-purple-600' />
                        {stage.title} Stage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className='h-[200px] w-full rounded-md border p-4'>
                        <pre className='text-sm whitespace-pre-wrap text-gray-700'>{stage.content}</pre>
                      </ScrollArea>
                      {stage.id === 'transportation'}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </motion.div>
          </AnimatePresence>
        </Tabs>
        <div className='mt-6'>
          <h3 className='text-lg mb-2 font-semibold'>Product Journey</h3>
          <Progress value={progress} className='w-full' />
        </div>
        <div className='mt-4'>
          <h3 className='text-lg mb-2 font-semibold'>Current Status</h3>
          <p className='font-medium text-purple-600'>{currentStatus}</p>
        </div>
        <div className='mt-6 flex justify-center'>
          <Button className='bg-purple-600 text-white transition-colors duration-200 hover:bg-purple-700'>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}
