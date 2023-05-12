import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      infoHeader: `Selamlar!👋`,
      infoName: `Ben Baha.`,
      infoParag: `Full-stack web geliştiricisiyim. Eksiksiz ve ölçeklenebilir frontend ürünleri üretebilirim. Hadi tanışalım!`,
      infoFooter1: "Şuanda",
      infoFooter2: "UX, UI, & Web Design",
      infoFooter3: "projeleri için",
      infoFooter4: "Freelance",
      infoFooter5: "hizmet veriyorum.",
      infoFooter6: "Takımına dahil olmamı istiyorsan davet atabilirsin",
      infoEmail: "bahasaracoglu@gmail.com",
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
    },
  },
};

i18n.use(initReactI18next).init({
  lng: `tr`,
  resources,
});

export default i18n;
