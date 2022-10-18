import React, { FC } from "react"
import ContentLoader from "react-content-loader"
import styles from "@styles/skeletons/WeekOverviewSkeleton.module.scss"

const WeekOverviewSkeleton: FC = () => (
  <div className={styles.container}>
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="460" y="20" rx="6" ry="6" width="144" height="32" />
      <rect x="655" y="20" rx="6" ry="6" width="165" height="32" />
      <rect x="872" y="20" rx="6" ry="6" width="130" height="32" />
      <rect x="1053" y="20" rx="6" ry="6" width="130" height="32" />
      <rect x="1234" y="20" rx="6" ry="6" width="177" height="32" />
    </ContentLoader>
  </div>
)

export { WeekOverviewSkeleton }
