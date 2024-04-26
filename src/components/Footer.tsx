import githubLogo from '../assets/github.png';

function Footer() {
    return (
        <div className="my-16 flex flex-col">
            <div className="w-full flex flex-row justify-center">
                {/*<a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a>*/}
            <a href="https://github.com/elianabean/wallops">
                <img src={githubLogo} className="w-14 h-14"></img>
            </a>
            </div>
            
            <p className="text-center text-sm text-[#AAAAAA] mt-2">made by eliana wang</p>

        </div>
    );
}

export default Footer;