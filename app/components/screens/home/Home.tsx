import { FC } from 'react'
import { IHome } from './home.interface'
import Layout from '@/components/ui/Layout/Layout'
import MovieItem from '@/components/ui/movie-item/MovieItem'

import styles from './Home.module.scss'

const Home: FC<IHome> = ({newMovies}) => {
  return (
    <Layout title='RED Cinema'>
        <h1 className={styles.heading}>Newest movies</h1>
        <div className={styles.catalog}>
            {newMovies.length ? (
                newMovies.map(movie => <MovieItem movie={movie} key={movie.id}/>)
            ) : (
                <div>Movies not found</div>
            )}
        </div>
    </Layout>
  )
}



export default Home
