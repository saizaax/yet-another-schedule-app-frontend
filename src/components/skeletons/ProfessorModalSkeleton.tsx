import React from "react"
import styles from "@styles/skeletons/ProfessorModalSkeleton.module.scss"
import ContentLoader from "react-content-loader"

const ProfessorModalSkeleton: React.FC = () => {
  return (
    <div className={styles.container}>
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 560 560"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className={styles.skeleton}
      >
        <rect x="1" y="164" rx="16" ry="16" width="563" height="454" />
        <rect x="0" y="0" rx="6" ry="6" width="140" height="22" />
        <rect x="26" y="192" rx="6" ry="6" width="110" height="22" />
        <rect x="448" y="192" rx="6" ry="6" width="90" height="22" />
        <rect x="0" y="40" rx="6" ry="6" width="250" height="22" />
        <rect x="0" y="73" rx="6" ry="6" width="120" height="22" />
        <rect x="0" y="113" rx="6" ry="6" width="146" height="35" />
        <rect x="26" y="236" rx="6" ry="6" width="512" height="172" />
        <rect x="26" y="420" rx="6" ry="6" width="512" height="172" />
        <rect x="156" y="113" rx="6" ry="6" width="129" height="35" />
      </ContentLoader>
    </div>
  )
}

export { ProfessorModalSkeleton }
