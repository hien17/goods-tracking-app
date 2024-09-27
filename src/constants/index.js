export const menuItems = [
  { icon: 'cube', label: 'Raw Materials' },
  { icon: 'layers', label: 'Batches' },
  { icon: 'users', label: 'Producers' },
  { icon: 'box', label: 'Manufacturing' },
  { icon: 'truck', label: 'Transportation' },
  { icon: 'tag', label: 'Lot Tracking' },
  { icon: 'share-2', label: 'Distributors' },
  { icon: 'settings', label: 'Processes' },
]

export const distributors = [
  {
    name: 'Vale do Sol Market',
    location: 'Sao Paulo/SP',
    image: '/placeholder.svg?height=80&width=80',
    sales: 'R$300,000.00',
    items: '10,000 items',
    products: ['Lemon juice', 'Orange juice', 'Apple juice', 'Grape juice'],
    type: 'sold',
    landSize: 'Large',
    production: 'High',
  },
  {
    name: 'Economic Market',
    location: 'Recife/PE',
    image: '/placeholder.svg?height=80&width=80',
    sales: 'R$150,000.00',
    items: '7,500 items',
    products: ['Orange juice', 'Grape juice', 'Peach juice', 'Apple juice'],
    type: 'batch',
    landSize: 'Medium',
    production: 'Medium',
  },
  {
    name: 'ABC Supermarket',
    location: 'Porto Alegre/RS',
    image: '/placeholder.svg?height=80&width=80',
    sales: 'R$190,000.00',
    items: '18,000 items',
    products: ['Lemon juice', 'Orange juice', 'Apple juice', 'Peach juice'],
    type: 'batch',
    landSize: 'Large',
    production: 'High',
  },
  {
    name: 'Vale do Sol Market',
    location: 'Curitiba/PR',
    image: '/placeholder.svg?height=80&width=80',
    sales: '19,000.00',
    items: '2,000 items',
    products: ['Lemon juice', 'Orange juice', 'Apple juice', 'Grape juice'],
    type: 'batch',
    landSize: 'Small',
    production: 'Low',
  },
  {
    name: 'Vale do Sol Market',
    location: 'Manaus/AM',
    image: '/placeholder.svg?height=80&width=80',
    sales: 'R$ 220,000.00',
    items: '27,000 items',
    products: ['Grape juice', 'Orange juice', 'Peach juice', 'Apple juice'],
    type: 'batch',
    landSize: 'Medium',
    production: 'Medium',
  },
  {
    name: 'Top Mix Supermarket',
    location: 'Fortaleza/CE',
    image: '/placeholder.svg?height=80&width=80',
    sales: '195,000.00',
    items: '25,000 items',
    products: ['Orange juice', 'Lemon juice', 'Apple juice', 'Grape juice'],
    type: 'batch',
    landSize: 'Large',
    production: 'High',
  },
]

export const landSizes = ['Small', 'Medium', 'Large']
export const productionLevels = ['Low', 'Medium', 'High']
export const locations = ['Sao Paulo/SP', 'Recife/PE', 'Porto Alegre/RS', 'Curitiba/PR', 'Manaus/AM', 'Fortaleza/CE']
export const fruits = ['Lemon', 'Orange', 'Apple', 'Grape', 'Peach']
