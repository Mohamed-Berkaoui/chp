import React from 'react'

function Filter({setSearch}) {
  return (
    <div className='filter'>
       title <input type="text"   onChange={function(e){
        setSearch(function(state){
            return {...state,title:e.target.value}
        })
       }}/> 
        rate: <input type='number' onChange={function(e){
        setSearch(function(state){
            return {...state,rate:+e.target.value}
        })
       }}/>
    </div>
  )
}

export default Filter