import React from 'react'
import AnnoncesSection from '../MainAfterAuth/PublicAnnonces/AnnoncesSection'
import SearchSection from '../MainAfterAuth/SearchSection/SearchSection'

export default function MainAfterAuth() {
  return (
    <div>
        <SearchSection />
      <AnnoncesSection />
    </div>
  )
}
