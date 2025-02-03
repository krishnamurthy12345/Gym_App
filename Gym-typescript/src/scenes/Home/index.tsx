import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
        >
            {/* Image and Main Header */}
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                {/* Main Header */}
                <div>
                    {/* Heading */}
                    <div>
                        <div>
                            <div>
                                <img alt="home-page" src={HomePageText} />
                            </div>
                        </div>
                        <p>
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </div>
                    {/* Actions */}
                    <div>
                        <ActionButton setSelectedPage={SelectedPage}>Join Now</ActionButton>
                        <AnchorLink
                        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>
                {/* Image */}
                <div>
                    <img  src={HomePageGraphic} alt="Home-Graphic" />
                </div>
            </div>
            {/* Spnsers */}
            {isAboveMediumScreens && (
                <div>
                    <div>
                        <div>
                            <img src={SponsorForbes} alt="redbull-sponserForbes" />
                            <img src={SponsorFortune} alt="redbull-sponserFortune" />
                            <img src={SponsorRedBull} alt="redbull-sponserRedBull" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home