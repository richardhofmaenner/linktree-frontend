import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '@/components/forms/Input'
import SubmitBtn from '@/components/forms/SubmitBtn'

function CreateUpdateLinkForm({ linkId }) {

  saveForm.bind(this)

  const [linkItem, setLinkItem] = useState({ id: '', link_text: '', link_location: '' })
  const [successMessage, setSuccessMessage] = useState(null)

  return (
    <>
      {successMessage &&
      <p>{successMessage}</p>}
      <form>
        <Input name="LinkName" placeholder="Name" onValueChange={(e) => setLinkItem({...linkItem, link_text: e.target.value})} value={linkItem.link_text} />
        <Input name="LinkLocation" placeholder="Location" onValueChange={(e) => setLinkItem({...linkItem, link_location: e.target.value})} value={linkItem.link_location} />
        <SubmitBtn onClick={saveForm}>Save</SubmitBtn>
      </form>
    </>
  )
}

function saveForm(e) {
  e.preventDefault()
  this.setSuccessMessage(null)
  if (this.linkItem.id === '') {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/links`, {
      credentials: 'include',
      method: 'PUT',
      body: JSON.parse(`{text: ${this.linkItem.link_text}, location: ${this.linkItem.link_location}`)
    })
      .then((res) => {
        if (res.status === 200) {

        }
      })
  }
}

CreateUpdateLinkForm.propTypes = {
  linkId: PropTypes.string,
}

CreateUpdateLinkForm.defaultProps = {
  linkId: ''
}

export default CreateUpdateLinkForm
