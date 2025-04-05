import React from 'react'
import FaqView from "@/sections/faq/FaqView"
import FaqSchema from '@/schemas/faq-schema'

export default function FaqPage() {


  return (
    <>
      <FaqSchema />
      <FaqView />
    </>
  )
}
