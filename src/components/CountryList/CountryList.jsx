import Spinner from "../Spinner/Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "../CountryItem/CountryItem";
import Message from "../Message/Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countriesUnique = new Set(
    cities.map((city) =>
      JSON.stringify({ country: city.country, emoji: city.emoji })
    )
  );
  const countries = [...countriesUnique].map((each) => JSON.parse(each));

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.emoji} />
      ))}
    </ul>
  );
}

export default CountryList;
