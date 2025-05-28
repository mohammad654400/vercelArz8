'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import CryptoModal from "@/sections/home/transaction/cryptoModal"

const ClientOnlyCryptoModalWrapper = () => {
  const pathname = usePathname()
  const [shouldMount, setShouldMount] = useState(false)
  // Define which routes need the modal
  const modalRoutes = ['/', '/price-cryptocurrencies', '/calculate']
  // Check if current route should trigger mounting
  useEffect(() => {
    if (modalRoutes.some(route => pathname.startsWith(route))) {
      setShouldMount(true)
    }
  }, [pathname])

  return shouldMount ? <CryptoModal /> : null
}

export default ClientOnlyCryptoModalWrapper
