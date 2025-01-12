export enum ProjectType {
  Cyclistic = 'cyclistic',
  Housing = 'housing',
  MintClassics = 'mintClassics',
  NetflixSentiment = 'netflixSentiment',
}

export type ProjectNavItem = {
  projectType: ProjectType
  shortName: string
  githubLink: string
  tools: string[]
}

export const projects: ProjectNavItem[] = [
  {
    projectType: ProjectType.Cyclistic,
    shortName: 'Cyclistic Customer Behavior',
    githubLink: 'https://github.com/aimeele97/cyclistic_customer_behaviour_analysis',
    tools: ['Python', 'MS SQL Server', 'Tableau'],
  },
  {
    projectType: ProjectType.Housing,
    shortName: 'US Housing Values',
    githubLink: 'https://github.com/aimeele97/US_housing_price_analysis',
    tools: ['Excel'],
  },
  {
    projectType: ProjectType.MintClassics,
    shortName: 'Mint Classics Inventory',
    githubLink: 'https://github.com/aimeele97/mintclassics_modelcar_inventory_analysis',
    tools: ['MySQL', 'Google Looker'],
  },
  {
    projectType: ProjectType.NetflixSentiment,
    shortName: 'Netflix Reviews',
    githubLink: 'https://github.com/aimeele97/netflix_time_series_sentiment_analysis',
    tools: ['Python'],
  },
]
