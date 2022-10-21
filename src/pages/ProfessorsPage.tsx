import React from "react"
import styles from "@styles/pages/ProfessorsPage.module.scss"

import debounce from "lodash.debounce"

import { Header } from "@components/Header"
import { Professor } from "@components/Professor"

import { ReactComponent as SearchIcon } from "@icons/search.svg"
import { useProfessors } from "@api/useProfessors"
import { ProfessorType } from "@app-types/schedule.types"
import { useSearchParams } from "react-router-dom"
import { useAtom } from "jotai"
import { professorPopup } from "@atoms/popupsAtom"
import { Empty } from "@components/Empty"
import { ProfessorSkeleton } from "@components/skeletons/ProfessorSkeleton"
import { Menu } from "@components/Menu"
import { motion } from "framer-motion"

import { containerAnimation } from "@animations"

const ProfessorsPage: React.FC = () => {
  const [, setPopup] = useAtom(professorPopup)
  const [searchParams] = useSearchParams()

  const [searchValue, setSearchValue] = React.useState<string>("")
  const [searchQuery, setSearchQuery] = React.useState<string>("")

  const { data, isLoading } = useProfessors(searchQuery)

  React.useEffect(() => {
    if (searchParams.get("id")) setPopup(true)
    else setPopup(false)
  }, [searchParams])

  React.useEffect(() => {
    setSearch(searchValue)
  }, [searchValue])

  const setSearch = React.useCallback(
    debounce((q) => {
      setSearchQuery(q)
    }, 300),
    []
  )

  const skeletons = (
    <div className={styles.container}>
      {Array.from({ length: 24 }, (_, index) => (
        <ProfessorSkeleton key={index} />
      ))}
    </div>
  )

  const professors = data ? (
    <motion.div
      className={styles.container}
      layout
      initial="hidden"
      animate="visible"
      variants={containerAnimation}
    >
      {data.slice(0, 48).map((item: ProfessorType) => (
        <Professor key={item.id} {...item} />
      ))}
    </motion.div>
  ) : null

  return (
    <div className={styles.professors}>
      <Header />
      <Menu />
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.search}>
            <input
              type="text"
              name="search"
              placeholder="Поиск преподавателей"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchIcon width={22} height={22} />
          </div>
          {isLoading ? skeletons : data.length ? professors : <Empty />}
        </div>
      </div>
    </div>
  )
}

export { ProfessorsPage }
