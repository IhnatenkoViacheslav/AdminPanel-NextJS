import { FC } from 'react'

import Loader from '@/ui/Loader'
import styles from './Reviews.module.scss'
import { useAuth } from '@/hooks/useAuth'
import AddReviewForm from './add-review-form/AddReviewForm'
import { IReviews } from './reviews.interface'
import ReviewItem from './ReviewItem'

const Reviews: FC<IReviews> = ({movieId, reviews, isLoading}) => {
    const { user } = useAuth()
  return (
    <div className='mt-10'>
        <div>{user && <AddReviewForm movieId={movieId}/>}</div>
        {isLoading ? (
          <Loader/> 
        ) : reviews?.length ? (
          <div>
            {reviews.map(review => (
              <ReviewItem review={review} key={review.id}/>
            ))}
          </div>
        ) : (
          <p>Reviews not found</p>
        )}
    </div>
  )
}

export default Reviews
