import React, { useContext, useEffect } from 'react'
import DashboardLayout from '@/layouts/DashboardLayout'
import Section from '@/components/layout/Section'
import LinkList from '@/components/LinkList'
import BtnPopup from '@/components/layout/BtnPopup'
import CreateUpdateLinkForm from '@/components/CreateUpdateLinkForm'
import AuthContext from '@/context/AuthContext'
import SubmitBtn from '@/components/forms/SubmitBtn'
import LinkStore from '@/store/LinkStore'

function DashboardPage() {
  const { logout } = useContext(AuthContext)
  const links = LinkStore.useState((s) => s.links)
  useEffect(() => {
    fetch('/api/links')
      .then((res) => res.json())
      .then((json) => LinkStore.update((s) => { s.links = json.data }))
  }, [])

  return (
    <DashboardLayout heading="Dashboard" title="Dashboard">
      <Section>
        <div className="mb-5 flex justify-between items-start">
          <BtnPopup randomNumber={255}>
            <CreateUpdateLinkForm />
          </BtnPopup>
          <SubmitBtn onClick={logout}>Sign out</SubmitBtn>
        </div>
        <LinkList links={links} />
      </Section>
    </DashboardLayout>
  )
}

export default DashboardPage
