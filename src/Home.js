import "./Home.css"
import Navbar from "./Navbar"
let Home = () => {
    return (
      <div className="home_body">
        {/* <Navbar  /> */}
        <div className="login_Search_Container">
          <div className="login_Container"></div>
          <div className="login_Container_Details">
            <span className="outlined_login">Login</span>
            <span class="material-icons outlined_login_img">login</span>
          </div>
          <img src="https://cdn.boongg.com/Images%20-%20CDN/Home/background1.jpg" />
          <div className="login_Search_tag">
            <div className="boongg_img">
              <img
                id="login_Search_tag_img"
                src="https://cdn.boongg.com/Images%20-%20CDN/Header/boongg-white-logo-full.png"
              />
            </div>
            <h1 id="login_Search_Text">START YOUR DREAM ADVENTURE</h1>
            <h2 id="login_Search_Text2">Own Experiences not Bikes</h2>
            <div className="rent_Now">
              <p>Rent A Bike in Pune</p>
            </div>
            <div className="login_Search_location"></div>
            <div class="location_text">
              <span>Current City</span>
              <span>Start Date and Time</span>
              <span>End Date and Time</span>
            </div>
            <div className="nav_location_Home">
              <div id="location_details_Home">
                <span id="location_name_Home">Pune</span>
                <span class="material-icons outlined">my_location</span>
              </div>
              <div id="start_date_Home">
                <span>18 Nov 2021 5:00 PM</span>
              </div>
              <div id="end_date_Home">
                <span>18 Nov 2021 5:00 PM</span>
              </div>
              <div id="rent_now_Home">Rent Now</div>
            </div>
          </div>
        </div>
        <div className="choose_Text">
          <h1>WHY CHOOSE US?</h1>
          <h6>
            We simplified bike rentals, so you can focus on what's important to
            you.
          </h6>
        </div>
        <div className="image_Text_Container">
          <div className="image_Container">
            <img
              src="https://www.boongg.com/static/media/1d8(reworked).bbc6237e.png"
              alt=""
            />
          </div>
          <div className="text_Container">
            <div className="text_img_Container">
              <div>
                <img
                  src="https://cdn.boongg.com/Images%20-%20CDN/Home/helmet.png"
                  alt=""
                />
              </div>
            </div>
            <div className="text_img_Container">
              <div>
                <img
                  src="https://cdn.boongg.com/Images%20-%20CDN/Home/zero.png"
                  alt=""
                />
              </div>
            </div>
            <div className="text_img_Container">
              <div>
                <img
                  src="https://cdn.boongg.com/Images%20-%20CDN/Home/offer.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;