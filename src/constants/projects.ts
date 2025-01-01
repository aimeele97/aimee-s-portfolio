export enum ProjectType {
  Cyclistic = 'cyclistic',
  Housing = 'housing',
  MintClassics = 'mintClassics',
  NetflixSentiment = 'netflixSentiment',
}

type ProjectNavItem = {
  projectType: ProjectType
  shortName: string
  linkToProject: string
}

export const projects: ProjectNavItem[] = [
  {
    projectType: ProjectType.Cyclistic,
    shortName: 'Cyclistic Case Study',
    linkToProject: 'https://github.com/aimeele97/cyclistic_customer_behaviour_analysis',
  },
  {
    projectType: ProjectType.Housing,
    shortName: 'US Housing Values',
    linkToProject: 'https://github.com/aimeele97/US_housing_price_analysis',
  },
  {
    projectType: ProjectType.MintClassics,
    shortName: 'Mint Classics',
    linkToProject: 'https://github.com/aimeele97/mintclassics_modelcar_inventory_analysis',
  },
  {
    projectType: ProjectType.NetflixSentiment,
    shortName: 'Netflix Sentiment Analysis',
    linkToProject: 'https://github.com/aimeele97/netflix_time_series_sentiment_analysis',
  },
]
