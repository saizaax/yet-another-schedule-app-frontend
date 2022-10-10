import React from "react"
import "@styles/global/Switch.scss"

import RCSwitch from "rc-switch"

type Props = {
  checked: boolean
  onChange?: () => void
}

const Switch: React.FC<Props> = (props) => {
  return <RCSwitch {...props} />
}

export { Switch }
