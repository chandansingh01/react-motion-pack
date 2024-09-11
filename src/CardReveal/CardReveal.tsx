import React from 'react'
import '../styles.module.css'

interface ImageData {
  src: string
  width: number
  alt: string
}

interface CardRevealProps {
  images: ImageData[]
  containerStyle?: React.CSSProperties
  itemStyle?: React.CSSProperties
  imageStyle?: React.CSSProperties
  containerClassName?: string
  itemClassName?: string
  imageClassName?: string
  onImageClick?: (image: ImageData, index: number) => void
}

const CardReveal: React.FC<CardRevealProps> = ({
  images,
  containerStyle,
  itemStyle,
  imageStyle,
  containerClassName,
  itemClassName,
  imageClassName,
  onImageClick
}) => {
  return (
    <main style={containerStyle} className={containerClassName}>
      <div className='list'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${itemClassName}`}
            style={itemStyle}
            onClick={() => onImageClick && onImageClick(image, index)}
          >
            <img
              width={image.width}
              height='auto'
              src={image.src}
              alt={image.alt}
              className={imageClassName}
              style={imageStyle}
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default CardReveal
