import DownloadAppSchema from '@/schemas/download-app-schema'
import Application from '@/sections/application/downloa-app'
import React from 'react'

export default function page() {
  return (
    <>
    <DownloadAppSchema/>
    <Application/>
    </>
  )
}
