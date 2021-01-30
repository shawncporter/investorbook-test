// Stylesheets
import '../styles/App.css';
import '../styles/pages/Companies.css';

import Header from '../components/Header';
import LabelRow from '../components/LabelRow';
import CompanyRow from '../components/CompanyRow';

function Companies() {
  return (
    <div>
      <Header heading="Companies" buttonName="Add Company" />
      <LabelRow label1="Name" label2="Investors" />

      {// Companies here...
        <div>
          <CompanyRow companyName="Abbott Laboratories" description="Alyson Carlos, Casimira Minchew, Daisy Whitely, Deb Dagen, Drema Nida, Howard Labadie, Jessie Staten, Julienne Vandermeer, Kallie Weick, Kazuko Earlywine, Maisie Clack, Marlys Bonomo, Melissia Sun, Merrill Marquette, Nathan Zhou, Pa Zakrzewski, Pearl Overbeck, Tonisha Roysden, Wayne Wittenberg, Yetta Parfait" />

          <CompanyRow companyName="Advanced Micro Devices" description="Adelle Perro, Aura Kistner, Babette Rego, Brigid Christner, Chanda Thormahlen, Cristal Allmon, Denis Niccum, Elna Tinch, Erika Whitley, Gerard Calhoon, Gisela Stennis, Janean Mader, Jc Buttars, Kathrin Groll, Linwood Doane, Myra Kauppi, Norine Eifert, Tyisha Humiston, Wiley Keppler, Winston Funes  " />

          <CompanyRow companyName="Altice USA" description="Analisa Leclair, Angele Kruse, Annamaria Sauders, Antoine Lacy, Bettina Lofgren, Brianna Ney, Caridad Simard, Cherrie Dolph, Chong Franko, Claude Pabon, Constance Rau, Deann Briganti, Devora Marriott, Eleonore Kriegel, Erlene Perri, Farah Gioia, Franklyn Russi, Jennefer Rippe, Keiko Lashbrook, Kristle Osornio, Maddie Bayley, Pauline Monroig, Pedro Gertz, Rosella Akers, Rubin Mendelsohn, Shandi Knepp, Star Foti, Sterling Rotz, Tam Haislip, Tenesha Weber" />

          <CompanyRow companyName="American Express" description="Alyson Carlos, Casimira Minchew, Daisy Whitely, Deb Dagen, Drema Nida, Howard Labadie, Jessie Staten, Julienne Vandermeer, Kallie Weick, Kazuko Earlywine, Maisie Clack, Marlys Bonomo" />

          <CompanyRow companyName="AutoZone" description="Adelle Perro, Aura Kistner, Babette Rego, Brigid Christner, Chanda Thormahlen, Cristal Allmon, Denis Niccum, Elna Tinch, Erika Whitley, Gerard Calhoon, Gisela Stennis, Janean Mader, Jc Buttars, Kathrin Groll, Linwood Doane, Myra Kauppi, Norine Eifert, Tyisha Humiston, Wiley Keppler, Winston Funes  " />

          <CompanyRow companyName="AT&T" description="Analisa Leclair, Angele Kruse, Annamaria Sauders, Antoine Lacy, Bettina Lofgren, Brianna Ney, Caridad Simard, Cherrie Dolph, Chong Franko, Claude Pabon, Constance Rau, Deann Briganti, Devora Marriott, Eleonore Kriegel, Erlene Perri, Farah Gioia, Franklyn Russi, Jennefer Rippe, Keiko Lashbrook, Kristle Osornio, Maddie Bayley, Pauline Monroig" />
        </div>
      }
    </div>
  );
}

export default Companies;