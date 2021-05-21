import CoreState from '@/store/CoreState'
import { successResult } from 'pullstate'

// @ts-ignore
export default CoreState.createAsyncAction(async ({ item }, { LinkStore }) => {
  const links = LinkStore.useState((s) => s.links)
  links.push(item)
  LinkStore.update((s) => { s.links = links })
  successResult()
})
