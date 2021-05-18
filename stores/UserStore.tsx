import { Store } from 'pullstate'

interface UserStoreInterface {
  token: string | null,
  isLoggedIn: boolean
}

export const UserStore = new Store<UserStoreInterface>({
  token: null,
  isLoggedIn: false
})
