import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '@/layouts/DashboardLayout'
import Section from '@/components/layout/Section'
import LinkList from '@/components/LinkList'
import BtnPopup from '@/components/layout/BtnPopup'
import CreateUpdateLinkForm from '@/components/CreateUpdateLinkForm'
import AuthContext from '@/context/AuthContext'
import SubmitBtn from '@/components/forms/SubmitBtn'

function DashboardPage() {
  const {logout} = useContext(AuthContext)
  const [links, setLinks] = useState([])
  useEffect(() => {
    fetch(`/api/links`)
      .then((res) => res.json())
      .then((json) => setLinks(json.data))
  }, [])

  function addedLink(newLink) {
    let tempLink = links
    tempLink.push(newLink)
    setLinks(tempLink)
  }

  return (
    <DashboardLayout heading="Dashboard" title="Dashboard">
      <Section>
        <div className="mb-5 flex justify-between items-start">
          <BtnPopup randomNumber={255}>
            <CreateUpdateLinkForm linkId="" onAdded={addedLink} />
          </BtnPopup>
          <SubmitBtn onClick={logout}>Sign out</SubmitBtn>
        </div>
        <LinkList links={links} />
      </Section>
    </DashboardLayout>
  )
}

export default DashboardPage
