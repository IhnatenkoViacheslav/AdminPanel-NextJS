import {FC} from 'react'
import { ITableItem } from './table.interface'

import styles from './Table.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import {HiOutlineExternalLink, HiOutlinePencil, HiOutlineTrash} from 'react-icons/hi'

const TableItem: FC<{item: ITableItem}> = ({item}) => {
  return (
    <div className={styles.table__item}>
      <h2 className={styles.item__id}>
        {item.id}
      </h2>
      {item.image &&
        <div className={styles.item__image}>
            <Image 
                src={item.image} 
                alt={item.name}
                width={33}
                height={50}
            />
        </div>
      }
      <p className={styles.item__name}>
        {item.name}
      </p>
      <div className={styles.item__link}>
        <Link href={item.viewLink}>
            <HiOutlineExternalLink/>
        </Link>
      </div>
      <div className={styles.item__link}>
        <Link href={item.editLink}>
            <HiOutlinePencil/>
        </Link>
      </div>
      <div className={styles.item__link}>
        <button onClick={item.removeHandler}>
            <HiOutlineTrash/>
        </button>
      </div>
    </div>
  )
}

export default TableItem
