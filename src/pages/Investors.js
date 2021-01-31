// Stylesheets
import '../styles/App.css';
import '../styles/pages/Investors.css';

import Nav from '../components/Nav';
import Header from '../components/Header';
import LabelRow from '../components/LabelRow';
import UserRow from '../components/UserRow';
import userData from '../data/UserData';

function Investors() {
  return (
    <div>
      <Nav />
      <Header heading="Investors" buttonName="Add Investor" />
      <LabelRow label1="Name" label2="Investments" />
      {
        userData.map(user => {
          return <UserRow key={user.name} img={user.img} userName={user.name} description={user.description} slug={user.slug} />
        })
      }


      {/* {// Investor users here...
        <div>
          <UserRow img="../images/avatars/rachelle.png" userName="Rochelle Barnard" description="Abbott Laboratories, Advanced Micro Devices, Altice USA, American Express, AutoZone, Builders FirstSource, Caesars Entertainment, Corning, Dana, Discover Financial Services, Edison International, Expedia Group, Hertz, Global Holdings, Hilton Worldwide Holdings, Keurig Dr Pepper, Macy's, NGL Energy Partners, NetApp, News Corp., Qualcomm, Rockwell Collins, Stanley Black & Decker, WestRock" />

          <UserRow userName="Nick Barajas" description={<>AT&T, American Express, Ameriprise Financial, Anixter International, Bristol-Myers Squibb, Builders FirstSource, CarMax, Cintas, DaVita, Global Partners, Hanesbrands, Hershey, Hormel Foods, Kroger, Liberty Media, Navistar International, ON, Semiconductor, Post Holdings</>} />

          <UserRow userName="Ananya Lovell" description="A-Mark Precious Metals, Albertsons, American Express, Anadarko Petroleum, Aramark, Ascena Retail Group, CDW, Chesapeake Energy, Comcast, Dana, Entergy, Farmers Insurance Exchange, Harley-Davidson, Lennar, Mohawk Industries, NGL Energy Partners, Nvidia, R.R. Donnelley & Sons, Republic Services, Sherwin-Williams, Textron, Thermo Fisher, Scientific, TravelCenters of America, W.R. Berkley, Williams" />

          <UserRow userName="Dante Mansell" description="Abbott Laboratories, Advanced Micro Devices, Altice USA, American Express, AutoZone, Builders FirstSource, Caesars Entertainment, Corning, Dana" />

          <UserRow userName="Kayden Tate" description="AT&T, American Express, Ameriprise Financial, Anixter International, Bristol-Myers Squibb, Builders FirstSource, CarMax, Cintas, DaVita, Global Partners, Hanesbrands, Hershey, Hormel Foods, Kroger, Liberty Media, Navistar International, ON, Semiconductor, Post Holdings, Rite Aid, Robert Half International, Southwest Airlines, Tenneco, Thermo Fisher, Scientific, WestRock, iHeartMedia" />

          <UserRow userName="Bruno Liu" description="A-Mark Precious Metals, Albertsons, American Express, Anadarko Petroleum, Aramark, Ascena Retail Group, CDW, Chesapeake Energy, Comcast, Dana, Entergy, Farmers Insurance Exchange, Harley-Davidson, Lennar, Mohawk Industries, NGL Energy Partners, Nvidia, R.R. Donnelley & Sons" />
        </div>
      } */}
    </div>
  );
}

export default Investors;