export enum ContactType {
  Email = 'Email',
  Github = 'Github',
  Linkedin = 'LinkedIn',
  Tableau = 'Tableau',
}

export type ContactItem = {
  contactType: ContactType
  link: string
}

export const contactItems: ContactItem[] = [
  { contactType: ContactType.Email, link: 'mailto:aimee.le2024@gmail.com' },
  { contactType: ContactType.Linkedin, link: 'https://www.linkedin.com/in/aimeele97' },
  { contactType: ContactType.Github, link: 'https://github.com/aimeele97' },
  {
    contactType: ContactType.Tableau,
    link: 'https://public.tableau.com/app/profile/aimee.le9707/vizzes',
  },
]
