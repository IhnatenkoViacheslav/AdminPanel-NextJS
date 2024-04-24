import {FC} from 'react'
import { ITableItem } from './table.interface'
import Loader from '../Loader'
import TableItem from './TableItem'

import styles from './Table.module.scss'

const Table: FC<{items: ITableItem[], isLoading?: boolean}> = ({items, isLoading}) => {
  return (
    <div className={styles.table}>
        {isLoading ? (
            <Loader count={3}/>) : items?.length ? (
                items.map(item => <TableItem item={item} key={item.id}/>)) : (
                <div>No items found</div>)
        }
    </div>
  )
}

export default Table
