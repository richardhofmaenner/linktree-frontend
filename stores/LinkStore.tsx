import {Store, createAsyncAction} from 'pullstate'

interface LinkStore {
  links: {
    id: string
    link_text: string
    link_location: string
    clicks: number
    index: number
    user_id: number
    created_at: string
    updated_at: string
  }[]
}

export const LinkStore = new Store<LinkStore>({
  links: []
})
