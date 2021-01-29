// Stylesheets
import '../styles/App.css';
import '../styles/pages/Investors.css';

import Header from '../components/Header';
import LabelRow from '../components/LabelRow';
import UserRow from '../components/UserRow';

function Investors() {
  return (
    <div>
      <Header heading="Investors" />
      <LabelRow label1="Name" label2="Investments" />
      <UserRow userName="Rochelle Barnard" description="Abbott Laboratories, Advanced Micro Devices, Altice USA, American Express, AutoZone, Builders FirstSource, Caesars Entertainment, Corning, Dana, Discover Financial Services, Edison International, Expedia Group, Hertz, Global Holdings, Hilton Worldwide Holdings, Keurig Dr Pepper, Macy's, NGL Energy Partners, NetApp, News Corp., Qualcomm, Rockwell Collins, Stanley Black & Decker, WestRock" />
    </div>
  );
}

export default Investors;