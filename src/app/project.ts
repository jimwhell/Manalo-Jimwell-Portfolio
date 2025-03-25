export interface Project {
  name: string;
  imgUrl: string;
  desc: string;
  technologies: string[];
  link: string;
  repoLink: string;
  date: string;
  role: string;
  firstFeatureTitle: string;
  firstFeatureDescription: string;
  firstFeatureScreenshot: string;
  secondFeatureTitle: string;
  secondFeatureDescription: string;
  secondFeatureScreenshot: string;
  thirdFeatureTitle?: string;
  thirdFeatureDescription?: string;
  thirdFeatureScreenshot?: string;
  fourthFeatureTitle?: string;
  fourthFeatureDescription?: string;
  fourthFeatureScreenshot?: string;
}
