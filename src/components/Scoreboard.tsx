import Country from "./Country";

interface Props {
  countries: string[];
}

const Scoreboard = ({ countries }: Props) => {
  return (
    <div className="scoreboard">
      {countries.map((country, index) => (
        <Country name={country} runningOrder={index + 1} key={country} />
      ))}
    </div>
  );
};

export default Scoreboard;
