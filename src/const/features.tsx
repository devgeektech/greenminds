import AnalyticIcon from "@/app/icons/AnalyticIcon";
import GamingIcon from "@/app/icons/gamingIcon";
import LearningIcon from "@/app/icons/LearningIcon";
import ListingIcon from "@/app/icons/ListingIcon";
import Onboarding from "@/app/icons/Onboarding";
import TrainingIcon from "@/app/icons/TrainingIcon";
export const Features = [
    {   icon:  <TrainingIcon/>,
        title: "Interactive Training Modules:", 
        listing: [

            { checkicon: <ListingIcon />, listOne: "Description of various ESG topics covered" },
            { checkicon: <ListingIcon />, listTwo: "Example of an interactive module" },
        ]
    },
    {   icon:  <LearningIcon />,
        title: "Personalized Learning Paths:", 
        listing: [
            { checkicon: <ListingIcon />, listOne: "Explanation of how the AI customizes training for each user" },
        ]
    },
    {   icon:  <GamingIcon/>,
        title: "Gamification and Rewards:", 
        listing: [
            { checkicon: <ListingIcon />, listOne: "Details on how gamification keeps users engaged" },
        ]
    },
    {   icon:  <AnalyticIcon />,
        title: "Comprehensive Analytics:", 
        listing: [
            { checkicon: <ListingIcon />, listOne: "Overview of analytics available to administrators" },
        ]
    },
    {   icon:  <Onboarding />,
        title: "Easy Onboarding:", 
        listing: [
            { checkicon: <ListingIcon />, listOne: "Step-by-step guide on onboarding new users" },
        ]
    },
]