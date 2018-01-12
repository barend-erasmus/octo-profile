import { WorkExperience } from './work-experience';
import { Education } from './education';
import { Skill } from './skill';
import { PortfolioItem } from './portfolio-item';

export class Profile {
    constructor(
        public about: string,
        public contactNumber: string,
        public education: Education[],
        public emailAddress: string,
        public firstName: string,
        public googlePlusLink: string,
        public image: string,
        public lastName: string,
        public linkedInLink: string,
        public portfolio: PortfolioItem[],
        public skills: Skill[],
        public twitterLink: string,
        public website: string,
        public workExperiences: WorkExperience[],
    ) {

    }
}
