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
    <div className="flex flex-col">
      <div className="bg-muted h-[380px] w-full items-center flex justify-center">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8 px-6">
        {imageUrls.map((imageUrl) => (
          <button
            onClick={() => handleImageClick(imageUrl)}
            key={imageUrl}
            data-active={imageUrl === currentImage}
            className="bg-muted rounded-lg border-2 border-transparent flex items-center justify-center data-[active=true]:border-primary data-[active=true]:border-2"
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
