import { IMeta } from './meta.interface'
import Head from 'next/head'
import { FC } from 'react'

const Meta: FC<IMeta> = ({description, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.png" type='image/png'/>
        {
          description ? 
              <meta itemProp='description' name='description' content={description}/>
            : <meta name='robots' content='noindex, nofollow' />
        }
      </Head>
    </>
  )
}

export default Meta
