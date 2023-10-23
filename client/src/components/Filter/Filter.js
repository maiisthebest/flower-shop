import "./Filter.css";

const Filter = ({ filters, setFilters }) => (
  <div className="flower-filter-container">
    <div className="filter-container">
      <label htmlFor="favourite">Favourite</label>
      <select
        name="favourite"
        id="favourite"
        className="form-select"
        onChange={(e) => setFilters({ ...filters, favoured: e.target.value })}
      >
        <option value="any">Any</option>
        <option value="favoured">Favoured</option>
        <option value="not favoured">Not favoured</option>
      </select>
    </div>
    <div className="filter-container">
      <label htmlFor="colour">Colour</label>
      <select
        name="colour"
        id="colour"
        className="form-select"
        onChange={(e) => setFilters({ ...filters, colour: e.target.value })}
      >
        <option value="any">Any</option>
        <option value="pink">Pink</option>
        <option value="yellow">Yellow</option>
        <option value="peach">Peach</option>
        <option value="purple">Purple</option>
        <option value="white">White</option>
      </select>
    </div>
  </div>
);

export default Filter;
