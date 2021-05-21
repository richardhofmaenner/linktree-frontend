// eslint-disable-import-prefer-default-export
import { Store } from 'pullstate'

interface ILinkStore {
  links: {
    id: number,
    link_text: string,
    link_location: string,
    clicks: number,
    index: number,
    user_id: number,
    created_at: string,
    updated_at: string,
  }[]
}

export default new Store<ILinkStore>({ links: [] })
