'use client'

import { Card, Title, BarChart } from '@tremor/react'

const chartdata = [
  {
    name: 'Amphibians',
    'Number of threatened species': 2488
  },
  {
    name: 'Birds',
    'Number of threatened species': 1445
  },
  {
    name: 'Crustaceans',
    'Number of threatened species': 743
  }
]

const dataFormatter = (number: number) => {
  return '$ ' + Intl.NumberFormat('us').format(number).toString()
}

const PageDashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 px-4">
        <div className="bg-custom-dark-grey flex flex-col p-4 ">
          <span className="text-xl font-semibold dark:text-custom-green-neon">
            Total
          </span>{' '}
          <span>$250.000</span>
        </div>
        <div className="bg-custom-dark-grey flex flex-col p-4">
          <span className="text-xl font-semibold dark:text-custom-green-neon">
            Ventas
          </span>{' '}
          <span>25</span>
        </div>
        <div className="bg-custom-dark-grey flex flex-col p-4 ">
          <span className="text-xl font-semibold dark:text-custom-green-neon">
            Productos en stock
          </span>{' '}
          <span>80</span>
        </div>
      </div>
      <div className='p-4'>
        <Card className=''>
          <Title>Total ventas {new Date().getFullYear()}</Title>
          <BarChart
            className="mt-6 "
            data={chartdata}
            index="name"
            colors={['amber']}
            categories={['Number of threatened species']}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </Card>
      </div>
    </div>
  )
}

export default PageDashboard
