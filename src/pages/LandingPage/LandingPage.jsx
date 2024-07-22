import styles from "./LandingPage.module.scss"
import Header from "../../components/Header/Header"
import SearchBar from "../../components/SearchBar/SearchBar"
import { useNavigate } from "react-router-dom"

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSearch = (term) => {
    navigate(`/books?search=${term}`);
  }

  return (
    <div className={styles.LandingPage}>
      <Header />
      <div className={styles.SearchBar}>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  )
}

export default LandingPage
