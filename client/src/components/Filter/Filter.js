import "./Filter.css";

const Filter = () => (
  <div className="flower-filter-container">
    <div className="filter-container">
      <label htmlFor="favourite">Favourite</label>
      <select name="favourite" id="favourite" className="form-select">
        <option value="any">Any</option>
        <option value="favourite">Favourite</option>
        <option value="not favourite">Not favourite</option>
      </select>
    </div>
    <div className="filter-container">
      <label htmlFor="colour">Colour</label>
      <select name="colour" id="colour" className="form-select">
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