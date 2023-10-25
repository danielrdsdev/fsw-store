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
    <section className="relative flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-muted lg:h-full lg:rounded-lg">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[385px] w-auto max-w-[90%] object-contain"
        />
      </div>

      <div className="left-4 top-4 mt-8 grid grid-cols-4 gap-4 px-6 lg:absolute lg:m-0 lg:grid-cols-1 lg:p-0">
        {imageUrls.map((imageUrl) => (
          <button
            onClick={() => handleImageClick(imageUrl)}
            key={imageUrl}
            data-active={imageUrl === currentImage}
            className="relative flex h-[77px] w-[77px] items-center justify-center rounded-lg border-2 border-transparent bg-muted data-[active=true]:border-2 data-[active=true]:border-primary lg:rounded-xl lg:bg-[#0B0B0B]"
          >
            <Image
              src={imageUrl}
              alt={name}
              fill
              sizes="100%"
              className="object-contain p-3"
            />
          </button>
        ))}
      </div>
    </section>
  )
}
