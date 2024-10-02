'use client'
import { Zap } from 'lucide-react'
import { menuItems } from '@/constants'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activePage, setActivePage] = useState('Distributors')
  const [filters, setFilters] = useState({
    landSize: '',
    production: '',
    location: '',
    fruits: '',
  })

  const router = useRouter()

  const handlePageChange = useCallback((page: string) => {
    setActivePage(page)
    router.push(`/${page.toLowerCase()}`)
  }, [])

  return (
    <div className='z-10 w-64 bg-white shadow-md'>
      <div className='border-b p-4'>
        <div className='flex items-center space-x-3'>
          <Zap className='text-blue-600 h-8 w-8' />
          <div>
            <h2 className='font-semibold'>Zeus Inc</h2>
            <p className='text-xs text-gray-500'>Platinum Plan</p>
          </div>
        </div>
      </div>
      <nav className='p-4'>
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className={`flex cursor-pointer items-center space-x-3 rounded-md p-2 ${
              item.label === activePage ? 'text-blue-600' : 'text-gray-700'
            }`}
            onClick={() => handlePageChange(item.label)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className='flex h-5 w-5 items-center justify-center'>
              <i className={`fas fa-${item.icon}`}></i>
            </span>
            <span>{item.label}</span>
            {item.label === activePage && (
              <motion.div
                className='bg-blue-600 absolute left-0 h-8 w-1 rounded-r-md'
                layoutId='activeIndicator'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.div>
        ))}
      </nav>
      <div className='absolute bottom-0 left-0 w-64 bg-gray-50 p-4'>
        <div className='mb-2 flex items-center justify-between'>
          <h3 className='text-sm font-semibold'>Pending Action</h3>
          <svg className='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
            <path d='M7 17L17 7M17 7H7M17 7V17' />
          </svg>
        </div>
        <p className='text-xs mb-2 text-gray-600'>Finish the onboarding to unlock all features</p>
        <div className='flex space-x-1'>
          <div className='bg-blue-600 h-1 w-1/4 rounded-full'></div>
          <div className='bg-blue-600 h-1 w-1/4 rounded-full'></div>
          <div className='h-1 w-1/4 rounded-full bg-gray-300'></div>
          <div className='h-1 w-1/4 rounded-full bg-gray-300'></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
