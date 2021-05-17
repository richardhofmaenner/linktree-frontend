import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/layouts/DashboardLayout'
import Section from '@/components/layout/Section'
import LinkList from '@/components/LinkList'
import BtnPopup from '@/components/layout/BtnPopup'
import CreateUpdateLinkForm from '@/components/CreateUpdateLinkForm'
import { LinkStore } from '@/stores/LinkStore'

function DashboardPage() {

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/links`, { credentials: 'include' })
      .then((res) => res.json())
      .then((json) => LinkStore.update(s => { s.links = json.data }))
  }, [])

  return (
    <DashboardLayout heading="Dashboard" title="Dashboard">
      <Section>
        <div className={"mb-5"}>
          <BtnPopup>
            <CreateUpdateLinkForm linkId="" />
          </BtnPopup>
        </div>
        <LinkList links={LinkStore.useState(s => s.links)} />
      </Section>
    </DashboardLayout>
  )
}

export default DashboardPage
