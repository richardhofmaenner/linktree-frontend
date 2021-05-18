import { UserStore } from '@/stores/UserStore'
import { createPullstateCore } from "pullstate";

export const PullstateCore = createPullstateCore({
  UserStore
});
