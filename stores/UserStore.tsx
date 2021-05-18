import { Store } from 'pullstate'

interface UserStoreInterface {
  token: string | null
}

// eslint-disable-next-line import/prefer-default-export
export const UserStore = new Store<UserStoreInterface>({ token: null })
