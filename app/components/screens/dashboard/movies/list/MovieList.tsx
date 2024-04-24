import Button from '@/components/ui/Button/Button'
import Layout from '@/components/ui/Layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import Table from '@/components/ui/table/Table'
import { MovieService } from '@/services/movie.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import {FC} from 'react'

const MovieList: FC = () => {
  const {data: response, isLoading} = useQuery({
    queryKey: ['get all movies'],
    queryFn: () => MovieService.getAll()
  })

  const { mutate } = useMutation({
    mutationKey: ['remove movie'],
    mutationFn: (id: number) => MovieService.deleteMovie(id)
  })

  return (
    <Layout title='Movie List'>
      <div className='flex justify-between px-2'>
        <Heading>Movie List</Heading>
        <Button>Create movie</Button>
      </div>
      <Table items={response?.data.length ? response.data.map(movie => ({
        id: movie.id,
        name: movie.name,
        image: movie.poster,
        editLink: `/manage/movies/edit/${movie.id}`,
        viewLink: `/movie/${movie.id}`,
        removeHandler: () => mutate(movie.id)
      })) : []} isLoading={isLoading}/>
    </Layout>
  )
}

export default MovieList
