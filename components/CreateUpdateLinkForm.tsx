import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '@/components/forms/Input'
import SubmitBtn from '@/components/forms/SubmitBtn'
import { LinkStore } from '@/stores/LinkStore'
import { UserStore } from '@/stores/UserStore'

function CreateUpdateLinkForm({ linkId }) {
  const [linkItem, setLinkItem] = useState({ id: '', link_text: '', link_location: '' })
  const [successMessage, setSuccessMessage] = useState(null)
  const token = UserStore.useState(s => s.token)
  let links = LinkStore.useState(s => s.links)

  const saveForm = (e) => {
    e.preventDefault()
    setSuccessMessage(null)
    fetch('/api/createUpdateLink/', {
      method: 'PUT',
      headers: { 'Content-type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ text: linkItem.link_text, location: linkItem.link_location }),
    })
      .then(async (res) => {
        if (res.status === 200) {
          const json = await res.json()
          links.push(json.data)
          LinkStore.update((s) => { s.links = links })

          setSuccessMessage('Created new link successfully.')
        }
      })
  }

  return (
    <>
      {successMessage
      && <p>{successMessage}</p>}
      <form>
        <Input
          name="LinkName"
          placeholder="Name"
          onValueChange={(e) => setLinkItem({ ...linkItem, link_text: e.target.value })}
          value={linkItem.link_text}
          mode="dark"
        />
        <Input
          name="LinkLocation"
          placeholder="Location"
          onValueChange={(e) => setLinkItem({ ...linkItem, link_location: e.target.value })}
          value={linkItem.link_location}
          mode="dark"
        />
        <SubmitBtn onClick={saveForm} mode="dark">Save</SubmitBtn>
      </form>
    </>
  )
}

CreateUpdateLinkForm.propTypes = { linkId: PropTypes.string }

CreateUpdateLinkForm.defaultProps = { linkId: '' }

export default CreateUpdateLinkForm
