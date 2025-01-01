export enum ContactType {
  Email = 'Email',
  Github = 'Github',
  Linkedin = 'Linkedin',
  Tableau = 'Tableau',
}

export type ContactItem = {
  contactType: ContactType
  link: string
}

export const contactItems: ContactItem[] = [
  { contactType: ContactType.Email, link: '' },
  { contactType: ContactType.Linkedin, link: '' },
  { contactType: ContactType.Github, link: '' },
  { contactType: ContactType.Tableau, link: '' },
]
