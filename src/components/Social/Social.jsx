import gitHubSVG from "/Users/shantirai/Desktop/my-portfolio/src/assets/icons8-github.svg";
import linkedInSVG from "/Users/shantirai/Desktop/my-portfolio/src/assets/icons8-linkedin.svg"




// helperFunction which creates a blueprint for every single SocialLink container
function SocialLink({ href, target="_blank", rel="noopener noreferrer", ariaLabel, imgSrc, alt}) {
    return (
        <section>
            <a href={href} target={target} rel={rel} aria-label={ariaLabel}>
            <img src={imgSrc} alt={alt} />
            </a>
        </section>
    )
}


// render the social links, I have GitHub, LinkedIn and 
export default function SocialContainer() {
    return (
        <div>
        <SocialLink
            href="https://github.com/codesungrape"
            ariaLabel="GitHub"
            imgSrc={gitHubSVG}
            alt="GitHub Icon"
        />
        <SocialLink
            href="https://www.linkedin.com/in/shanti-rai-044902199/"
            ariaLabel="LinkedIn"
            imgSrc={linkedInSVG}
            alt="LinkedIn Icon"
        />
        </div>
    )
}