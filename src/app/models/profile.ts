import { Address } from './address';
import { ContactInformation } from './contact-infomation';
import { Education } from './education';
import { Entity } from './entity';
import { PersonalInformation } from './personal-information';
import { PortfolioItem } from './portfolio-item';
import { Skill } from './skill';
import { SocialInformation } from './social-infomation';
import { WorkExperience } from './work-experience';

export class Profile extends Entity {

    constructor(
        id: string,
        public about: string,
        public contactInformation: ContactInformation,
        public education: Education[],
        public image: string,
        public message: string,
        public personalInformation: PersonalInformation,
        public portfolio: PortfolioItem[],
        public skills: Skill[],
        public socialInformation: SocialInformation,
        public type: string,
        public userName: string,
        public workExperiences: WorkExperience[],
    ) {
        super(id);
    }

    public static empty(): Profile {
        return new Profile(null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
}
