export interface Certificate {

  id: number;

  title: string;

  issuer: string;

  date: string;

  credentialId?: string;

  credentialImage?: string; // path to your image, e.g. "/image/certificates/cert-1.jpg"

  icon?: string;

}


export const certificates: Certificate[] = [
  {
    id: 1,
    title: "License for Professional Practice (Assoc. Electrical Engineer (Power))",
    issuer: "The Council of Engineers Thailand",
    date: "2022-2027",
    credentialId: "ภฟก.62684",
    credentialImage: "/images/certificates/coe.jpg",
    icon: "/images/certificates/eng.png", // optional image path
  },
  {
    id: 2,
    title: "Test of English for International Communication (TOEIC)",
    issuer: "Educational Testing Service (ETS)",
    date: "Jul 2026 - Jul 2028",
    credentialId: "920/990 (Listening: 495, Reading: 425)",
    credentialImage: "/images/certificates/toeic_cert.jpg",
    icon: "/images/certificates/toeic.png", // optional image path
  },
];