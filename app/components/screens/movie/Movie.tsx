import Layout from '@/components/ui/Layout/Layout'
import { FC, useEffect } from 'react'

import { MovieService } from '@/services/movie.service'
import { ViewsService } from '@/services/views.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './Movie.module.scss'
import Reviews from './reviews/Reviews'


const Movie: FC = () => {

    const {query} = useRouter() 
    const movieId = Number(query?.id)

    const { data: movie, isLoading} = useQuery({
        queryKey: ['get movie', query?.id],
        queryFn: () => MovieService.getMovieById(movieId),
        select: ({data}) => data,
        enabled: !!movieId
    })

    const { mutate } = useMutation({
        mutationKey: ['update count opened'], 
        mutationFn: () => ViewsService.updateViews(movieId.toString())
    })

    useEffect(() => {
        if(movieId)
            mutate()
    }, [movieId])

  return (
    <Layout title={movie ? movie.name : ''}>
        <div className={styles.wrapper}>
            <div className={styles.poster}>
                {movie?.poster && (
                    <Image 
                    src={movie?.poster} 
                    alt={movie?.name || ''} 
                    width={250} 
                    height={360} 
                    layout='responsive'
                    className={styles.image}
                    />
                )}
            </div>
            <div className={styles.details}>
                <h1 className={styles.heading}>{movie?.name}</h1>
                <div className={styles.rating}>
                    {movie?.rating?.toFixed(1)}
                </div>
                <div className={styles.title}>About movie</div>
                <ul>
                    <li>
                        <span>Total fees:</span>
                        <span>${movie?.fees.toLocaleString()}</span>
                    </li>
                </ul>
                <Reviews 
                    reviews={movie?.reviews || []} 
                    movieId={movieId} 
                    isLoading={isLoading}
                />
            </div>
        </div>
    </Layout>
  )
}

export default Movie
