'use client'

import Image from 'next/image'
import { useState } from 'react'

type ProductImagesProps = {
  name: string
  imageUrls: string[]
}

export const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0])

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl)
  }
  return (
    <section className="flex flex-col relative">
      <div className="bg-muted h-[380px] lg:rounded-lg lg:h-full w-full items-center flex justify-center">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="max-h-[385px] max-w-[90%] w-auto h-auto object-contain"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8 px-6 lg:absolute left-4 top-4 lg:p-0 lg:grid-cols-1 lg:m-0">
        {imageUrls.map((imageUrl) => (
          <button
            onClick={() => handleImageClick(imageUrl)}
            key={imageUrl}
            data-active={imageUrl === currentImage}
            className="relative w-[77px] h-[77px] bg-muted lg:bg-[#0B0B0B] rounded-lg lg:rounded-xl border-2 border-transparent flex items-center justify-center data-[active=true]:border-primary data-[active=true]:border-2"
          >
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-contain p-3"
            />
          </button>
        ))}
      </div>
    </section>
  )
}
