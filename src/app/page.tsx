'use client'

import { Banner1 } from "@/components/Banner1"
import { BannerLeads } from "@/components/BannerLeads"
import { Header } from "@/components/Header"
import { ListagemVideos } from "@/components/ListagemVideos"

export default function Home() {
  return (
    <>
      <Header />
      <Banner1/>
      <ListagemVideos/>
      <BannerLeads/>
    </>
  )
}
