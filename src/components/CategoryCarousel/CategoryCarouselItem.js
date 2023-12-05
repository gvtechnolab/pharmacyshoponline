import React from 'react'
import styles from './CategoryCarousel.module.css'

const CategoryCarouselItem = ({ item }) => {
  return (
    <div style={{
      textAlign: 'center',
      cursor: 'pointer',
      marginLeft: '5px',
      marginRight: '5px',
      fontSize: '14px'
    }}>
      <img
        src={item?.img}
        alt="category"
        style={{
          height: 65,
          width: 65,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          margin: 'auto',
          borderRadius: '50%',
          border: '1px solid #dbebe1',
          padding: '8px',
          marginBottom: '5px',
          cursor: 'pointer',
        }}
      />
      <span>{item?.name}</span>
    </div>
  )
}

export default CategoryCarouselItem
