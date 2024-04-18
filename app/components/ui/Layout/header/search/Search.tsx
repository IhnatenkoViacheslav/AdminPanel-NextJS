import { FC } from 'react'

import styles from './Search.module.scss'
import Field from '@/components/ui/Field/Field'

import { BiSearch } from 'react-icons/bi'
import MovieItem from '@/components/ui/movie-item/MovieItem'
import { useSearch } from './useSearch'

import { motion } from 'framer-motion'
import { menuDropdown } from '@/utils/animation/fade'

const Search: FC = () => {
    const { data, handleSearch, searchTerm, isSuccess} = useSearch()

  return (
      <div className={styles.search_top}> 
        <label>
            <Field 
                placeholder='Search'
                value={searchTerm}
                onChange={handleSearch}
                Icon={BiSearch}
            />
        </label>
        {isSuccess && (
            <motion.div 
                initial={false}
                animate={isSuccess ? 'open' : 'closed'}
                variants={menuDropdown}
                className={styles.result}
            >
                {data?.length ? (
                    data.map(movie => <MovieItem variant='sm' movie={movie} key={movie.id}/>)
                ) : (
                    <div>Movies not found!</div>
                )}
            </motion.div>
        )}
      </div>  
  )
}

export default Search
