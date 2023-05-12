import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  tr: {
    translation: {
      infoHeader: `Selamlar!👋`,
      infoName: `Ben Baha.`,
      infoParag: `Full-stack web yazılımcısıyım. Eksiksiz ve ölçeklenebilir frontend ürünleri üretebilirim. Hadi tanışalım!`,
      infoFooter1: "Şuanda",
      infoFooter2: "UX, UI, & Web Design",
      infoFooter3: "projeleri için",
      infoFooter4: "Freelance",
      infoFooter5: "hizmet veriyorum.",
      infoFooter6: "Takımına dahil olmamı istiyorsan davet atabilirsin",
      infoEmail: "bahasaracoglu@gmail.com",
      skillsTitle: "Yetenekler",
      profileTitle: "Profil",
      profileCardHeader: "Kişisel Bilgiler",
      profileCardBirthHead: "Doğum Tarihi",
      profileCardCityHead: "İkamet Şehri",
      profileCardEducationHead: "Eğitim Durumu",
      profileCardRoleHead: "Tercih Ettiği Rol",
      profileCardBirthValue: "15.11.1993",
      profileCardCityValue: "İstanbul",
      profileCardEducationValue:
        "Eskişehir Osmangazi Üniversitesi Endüstri Mühendisliği, 2016",
      profileCardRoleValue: "Frontend, UI",
      aboutMeTitle: "Hakkımda",
      aboutMeFirstParag:
        "Web geliştirmeye olan tutkumla buradayım! Her projeye kendimi tam anlamıyla vererek, yenilikçi ve kullanıcı dostu çözümler üretmek için çalışıyorum. Teknolojinin sunduğu imkanları takip ediyor ve projelerime entegre ediyorum.",
      aboutMeSecondParag:
        "Ekip çalışmasına inanan biriyim çünkü farklı bakış açılarının harmanlandığı projeler daha güçlü olur. Birlikte, web dünyasında sınırları zorlamak ve kullanıcı deneyimini yeni seviyelere taşımak için çalışabiliriz!",
      projectsTitle: "Projeler",
      projectViewGitHub: "GitHub'ta Görüntüle",
      projectVercel: "Uygulamaya Git",
      footer1: "Bir",
      footer2: "sonraki projende ",
      footer3: "birlikte çalışalım.",
      footerNav1: "GitHub",
      footerNav2: "Kişisel Blog",
      footerNav3: "LinkedIn",
      footerNav4: "Email",
    },
  },
  en: {
    translation: {
      infoHeader: `Hi!👋`,
      infoName: `I’m Baha.`,
      infoParag: `I’m a full-stack developer. I can craft solid and scalable
        frontend products. Let’s meet!`,
      infoFooter1: "Currently",
      infoFooter2: "Freelancing",
      infoFooter3: "for",
      infoFooter4: "UX, UI, & Web Design",
      infoFooter5: "Project.",
      infoFooter6: "Invite me to join your team",
      infoEmail: "bahasaracoglu@gmail.com",
      skillsTitle: "Skills",
      profileTitle: "Profile",
      profileCardHeader: "Basic Information",
      profileCardBirthHead: "Birth Date",
      profileCardCityHead: "City",
      profileCardEducationHead: "Education",
      profileCardRoleHead: "Preferred Role",
      profileCardBirthValue: "15.11.1993",
      profileCardCityValue: "Istanbul",
      profileCardEducationValue:
        "Eskisehir Osmangazi University Industrial Engineering, 2016",
      profileCardRoleValue: "Frontend, UI",
      aboutMeTitle: "About me",
      aboutMeFirstParag:
        "I'm here with my passion for web development! By giving myself fully to each project, I work to produce innovative and user-friendly solutions. I follow the opportunities offered by technology and integrate them into my projects.",
      aboutMeSecondParag:
        "I am a believer in teamwork because projects that blend different perspectives are stronger. Together we can work to push the boundaries of the web world and take the user experience to new levels!",
      projectsTitle: "Projects",
      projectViewGitHub: "View on GitHub",
      projectVercel: "Go to App",
      footer1: "Let's",
      footer2: "work together",
      footer3: "on your next product.",
      footerNav1: "GitHub",
      footerNav2: "Personal Blog",
      footerNav3: "LinkedIn",
      footerNav4: "Email",
    },
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: `tr`,
  resources,
});

export default i18n;
