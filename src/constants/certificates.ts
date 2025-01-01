import googleCertiImg from '@/assets/certificates/google-data-analytics.jpeg'
import IBMCertiImg from '@/assets/certificates/IBM-data-analytics.jpeg'
import RICECertiImg from '@/assets/certificates/RICE-Business-Analytics.jpeg'

export enum CertiType {
  Google = 'google',
  IBM = 'IBM',
  RICE = 'RICE',
}

export type CertiItem = {
  certiType: CertiType
  certiName: string
  certiImgSrc: string
  linkToCerti: string
}

export const certiItems: CertiItem[] = [
  {
    certiType: CertiType.Google,
    certiName: 'Google Data Analytics',
    certiImgSrc: googleCertiImg,
    linkToCerti:
      'https://www.coursera.org/account/accomplishments/professional-cert/ES6PQLVW1P3O?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof',
  },
  {
    certiType: CertiType.IBM,
    certiName: 'IBM Data Analytics',
    certiImgSrc: IBMCertiImg,
    linkToCerti: 'https://coursera.org/share/630e9c1598367f752e30e3a595e04552',
  },
  {
    certiType: CertiType.RICE,
    certiName: 'RICE Business Analytics',
    certiImgSrc: RICECertiImg,
    linkToCerti: 'https://coursera.org/share/c0db33b9c60c3fd93641fbd427031829',
  },
]
