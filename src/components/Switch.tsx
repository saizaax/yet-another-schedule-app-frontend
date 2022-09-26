import React from "react"
import "@styles/global/Switch.scss"

import RCSwitch from "rc-switch"

const Switch: React.FC = (props) => {
  return <RCSwitch {...props} />
}

export { Switch }
