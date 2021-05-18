import { Store } from 'pullstate'

interface LinkStoreInterface {
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

// eslint-disable-next-line import/prefer-default-export
export const LinkStore = new Store<LinkStoreInterface>({ links: [] })
