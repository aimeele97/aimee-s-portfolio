export enum SectionType {
  Introduction = 'introduction',
  Projects = 'projects',
  Certifications = 'certifications',
  Contact = 'contact',
}

export const sectionId = (sectionType: SectionType) => `header-${sectionType}`
export const querySelectorSectionId = (sectionType: SectionType) => '#' + sectionId(sectionType)
