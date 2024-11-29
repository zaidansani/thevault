import { QuartzFilterPlugin } from "../types"

export const NoExcalidraw: QuartzFilterPlugin<{}> = () => ({
  name: "NoExcalidraw",
  shouldPublish(_ctx, [_tree, vfile]) {
    const draftFlag: boolean = vfile.data?.frontmatter?.tags?.includes("excalidraw") ?? false
    return !draftFlag
  },
})
