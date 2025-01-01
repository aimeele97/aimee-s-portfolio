import googleCertiImg from '@/assets/certificates/google-data-analytics.jpeg'

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
]
