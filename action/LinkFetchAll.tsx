import CoreState from '@/store/CoreState'
import { errorResult, successResult } from 'pullstate'

// eslint-disable-next-line no-empty-pattern
export default CoreState.createAsyncAction(async ({}, { LinkStore }) => {
  fetch('/api/links')
    .then(async (res) => {
      if (res.status === 200) {
        const json = await res.json()
        LinkStore.update((s) => { s.links = json.data })
        return successResult()
      }
      return errorResult([], 'Something went wrong.')
    })
    .catch(() => errorResult([], 'Something went wrong'))
  return errorResult([], 'Something went wrong')
})
