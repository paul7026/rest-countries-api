import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import Info from "../../components/Info/Info";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useGetCountryByNameQuery } from "../../store/api/countriesApi";

import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { name = "" } = useParams();

  const {
    data: country,
    error,
    isLoading,
    isSuccess,
  } = useGetCountryByNameQuery(name);


  const navigate = useNavigate();

  return (
    <div className={styles.details}>
      <button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>

      {error && <h2>Can`t fetch data</h2>}

      {isLoading && <LoadingSpinner />}

      {isSuccess && <Info country={country} />}
    </div>
  );
}

export default DetailsPage;
