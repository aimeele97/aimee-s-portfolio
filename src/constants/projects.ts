export enum ProjectType {
  Cyclistic = 'cyclistic',
  Housing = 'housing',
  MintClassics = 'mintClassics',
  NetflixSentiment = 'netflixSentiment',
}

export type ProjectNavItem = {
  projectType: ProjectType
  shortName: string
  shortDesc: string
  linkToProject: string
}

export const projects: ProjectNavItem[] = [
  {
    projectType: ProjectType.Cyclistic,
    shortName: 'Cyclistic Case Study',
    shortDesc:
      'Analysing Customer Behaviours to Recommend Marketing Strategies for Converting Casual Members into Annual Members',
    linkToProject: 'https://github.com/aimeele97/cyclistic_customer_behaviour_analysis',
  },
  {
    projectType: ProjectType.Housing,
    shortName: 'US Housing Values',
    shortDesc: 'Housing Values Analysis with Hypothesis Testing (2005-2013)',
    linkToProject: 'https://github.com/aimeele97/US_housing_price_analysis',
  },
  {
    projectType: ProjectType.MintClassics,
    shortName: 'Mint Classics',
    shortDesc: 'A Model Car Inventory and Warehouse Management Analysis',
    linkToProject: 'https://github.com/aimeele97/mintclassics_modelcar_inventory_analysis',
  },
  {
    projectType: ProjectType.NetflixSentiment,
    shortName: 'Netflix Sentiment Analysis',
    shortDesc: 'Netflix Time Series and Sentiment Analysis',
    linkToProject: 'https://github.com/aimeele97/netflix_time_series_sentiment_analysis',
  },
]
