'use client'

import { Banner1 } from "@/components/Banner1"
import { Header } from "@/components/Header"
import { ListagemVideos } from "@/components/ListagemVideos"

export default function Home() {
  return (
    <>
      <Header />
      <Banner1/>
      <ListagemVideos/>
    </>
  )
}
