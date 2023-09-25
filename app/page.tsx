"use client"

import { Hero, PlaceList } from '@/components'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [placeList,setPlaceList] = useState([])
  useEffect(()=>{
    getPlaceList('Hotels in Harare')
  },[])
  const getPlaceList = async (value:string)=>{
      setPlaceList([])
      const result = await fetch("/api/google-place-api?q="+value)
      const data = await result.json()

      //console.log(data)
      setPlaceList(data.resp.results)
  }
  return (
   <div>
    <Hero userInput={(value:string)=> getPlaceList(value)}/>
    {placeList ? <PlaceList placeList ={placeList} />:null}
   </div>
  )
}
