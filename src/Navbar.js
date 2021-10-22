import "./Navbar.css";
let Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_items">
        <img
          src="https://cdn.boongg.com/Images%20-%20CDN/Header/mobileLogo.png"
          alt=""
        />
        <div className="nav_location">
          <div id="location_details">
            <span id="location_name">Pune</span>
            <span class="material-icons outlined">my_location</span>
          </div>
          <div id="start_date">
            <span>18 Nov 2021 5:00 PM</span>
          </div>
          <div id="end_date">
            <span>18 Nov 2021 5:00 PM</span>
          </div>
          <div id="rent_now">Rent Now</div>
        </div>
        <div className="login_details">
          <span className="outlined_login">Login</span>
          <span class="material-icons outlined_login_img">login</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
