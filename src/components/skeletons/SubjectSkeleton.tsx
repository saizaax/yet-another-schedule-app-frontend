import React from "react"
import styles from "@styles/skeletons/SubjectSkeleton.module.scss"

import ContentLoader from "react-content-loader"

type Props = {}

const SubjectSkeleton: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className={styles.loader}
      >
        <rect x="25" y="43" rx="6" ry="6" width="367" height="38" />
        <rect x="25" y="0" rx="6" ry="6" width="101" height="28" />
        <rect x="331" y="0" rx="6" ry="6" width="61" height="28" />
        <rect x="24" y="92" rx="6" ry="6" width="130" height="28" />
        <rect x="164" y="92" rx="6" ry="6" width="130" height="28" />
        <rect x="24" y="131" rx="6" ry="6" width="180" height="28" />
      </ContentLoader>
    </div>
  )
}

export { SubjectSkeleton }
