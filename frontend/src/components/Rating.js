import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ rate, text, color }) => {
  return (
    <div className='rating' style={{ color }}>
      <span>
        <i
          className={
            rate >= 1
              ? 'fas fa-star'
              : rate >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rate >= 2
              ? 'fas fa-star'
              : rate >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rate >= 3
              ? 'fas fa-star'
              : rate >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rate >= 4
              ? 'fas fa-star'
              : rate >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rate >= 5
              ? 'fas fa-star'
              : rate >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span style={{ color: 'black' }}>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
