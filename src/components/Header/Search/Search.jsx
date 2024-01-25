import React from 'react'
import s from './Search.module.scss'
import { SearchContext } from '../../../App'

const Search = () => {
 const {searchValue,setSearchValue}=React.useContext(SearchContext)

  return (
    <div className={s.root} >
      <svg className={s.icon} viewBox="0 0 24 24">
        <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 
         5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 
         14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 
         14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 
         5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14
          11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 
          6.2267316 4 9 4 z"/></svg>
      <input
       value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={s.input}
        placeholder='Поиск пиц' />
      {searchValue && (
        <svg onClick={()=>setSearchValue('')} className={s.clearIcon} viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000" /></svg>
      )}
    </div>
  )
}
export default Search