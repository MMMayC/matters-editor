import * as React from 'react'

import SVGSpinner from '../../icons/Spinner'

interface Props {
  mentionLoading: boolean
  mentionListComponent: any
  mentionSelection: any
  mentionUsers: any[]
  reference: React.RefObject<HTMLElement>
}

export default ({
  mentionLoading,
  mentionListComponent,
  mentionSelection,
  mentionUsers,
  reference
}) => {
  const hidden = mentionUsers.length <= 0 && !mentionLoading
  return (
    <section className="mention-container" ref={reference} hidden={hidden}>
      {mentionLoading && <SVGSpinner className="sipinner u-motion-spin" />}
      {!mentionLoading && mentionListComponent({ mentionLoading, mentionSelection, mentionUsers })}
    </section>
  )
}