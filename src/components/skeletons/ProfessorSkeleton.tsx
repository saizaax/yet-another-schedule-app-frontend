import React from "react"
import styles from "@styles/skeletons/ProfessorSkeleton.module.scss"
import ContentLoader from "react-content-loader"

const ProfessorSkeleton: React.FC = () => {
  return (
    <div className={styles.card}>
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="28" y="28" rx="6" ry="6" width="160" height="22" />
        <rect x="28" y="65" rx="6" ry="6" width="300" height="28" />
        <rect x="28" y="103" rx="6" ry="6" width="145" height="28" />
        <rect x="28" y="142" rx="6" ry="6" width="110" height="20" />
      </ContentLoader>
    </div>
  )
}

export { ProfessorSkeleton }
