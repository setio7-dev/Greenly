'use client'
import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  RadialLinearScale,
  ArcElement,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale,
  ArcElement
)

const CategoryName = [
  { id: 1, category: "Total Emisi", slug: "total-emisi" },
  { id: 2, category: "Sektor Energi", slug: "sektor-energi" },
  { id: 3, category: "Sektor IPPU", slug: "sektor-ippu" },
  { id: 4, category: "Sektor Pertanian", slug: "sektor-pertanian" },
  { id: 5, category: "Sektor Kehutanan", slug: "sektor-kehutanan" },
  { id: 6, category: "Sektor Limbah", slug: "sektor-limbah" },
]

const CategoryData = [
  {
    id: 1,
    category: 'total-emisi',
    data: [{ id: 1, name: "Contoh", persen: 40 }]
  },
  {
    id: 2,
    category: 'sektor-energi',
    data: [{ id: 1, name: "Contoh", persen: 40 }]
  },
  {
    id: 3,
    category: 'sektor-ippu',
    data: [{ id: 1, name: "Contoh", persen: 40 }]
  },
  {
    id: 4,
    category: 'sektor-pertanian',
    data: [{ id: 1, name: "Contoh", persen: 40 }]
  },
  {
    id: 5,
    category: 'sektor-kehutanan',
    data: [{ id: 1, name: "Contoh", persen: 40 }]
  },
  {
    id: 6,
    category: 'sektor-limbah',
    data: [
      { id: 1, name: "Cair Industri", persen: 45 },
      { id: 2, name: "Cair Domestik", persen: 19 },
      { id: 3, name: "Pembakaran", persen: 4 },
      { id: 4, name: "Padat", persen: 33 }
    ]
  },
]

export default function Graphic() {
  const [category, setCategory] = useState('sektor-limbah')

  const filtered = CategoryData.find(item => item.category === category)
  const labels = filtered?.data.map(d => d.name) || []
  const dataValue = filtered?.data.map(d => d.persen) || []

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Persentase',
        data: dataValue,
        fill: true,
        backgroundColor: 'rgba(0, 173, 3, 0.2)',
        borderColor: '#00AD03',
        tension: 0.4,
        pointBackgroundColor: 'white',
        pointBorderColor: '#00AD03'
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#333' }
      },
      x: {
        ticks: { color: '#333' }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#00AD03'
        }
      }
    }
  }

  return (
    <div className='container w-full mx-auto font-poppins lg:pb-20 pb-28 px-6 lg:px-16' data-aos="fade-up" data-aos-duration="800">
      <h1 className='lg:text-[32px] text-[24px] font-[500] w-full md:w-[400px]'>
        Presentase Data Dalam Bentuk Presentase
      </h1>

      <div className="my-10 lg:min-h-[400px] w-full h-[300px]">
        {labels.length > 0 ? (
          <Line
            data={chartData}
            options={chartOptions}
          />
        ) : (
          <p className='text-gray-500'>Silakan pilih kategori terlebih dahulu</p>
        )}
      </div>

      <div className="flex justify-center items-center gap-4 flex-wrap cursor-pointer">
        {CategoryName.map((item) => (
          <div
            onClick={() => setCategory(item.slug)}
            key={item.id}
            className={`border-2 border-[#00AD03] lg:py-4 py-2 lg:px-6 px-4 rounded-lg transition-opacity ${
              category === item.slug ? 'opacity-100' : 'opacity-60'
            } hover:opacity-100`}
          >
            <p className='font-[600] text-[12px] lg:text-[20px] text-[#00AD03]'>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
