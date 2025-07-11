import { COMMUNITY_LINKS, PLATFORM_LINKS, RESOURCE_LINKS } from "@/component/common/constants"

const Footer = () => {
    return (
        <footer className="flex max-md:flex-col justify-between gap-4 mt-20 p-10 text-white border-t-2 border-neutral-600 mx-5 ">
            <div className="col-span-1">
                <h3 className='text-md mb-2 font-semibold tracking-widest bg-neutral-600 w-fit p-1 rounded-lg'>Resources</h3>
                <ul className='space-y-2'>
                    {RESOURCE_LINKS.map((link, index) => (
                        <li key={index} className='text-neutral-400 hover:text-white'><a href={link.href}>{link.text}</a> </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-md mb-2 font-semibold tracking-widest bg-neutral-600 w-fit p-1 rounded-lg'>Platforms</h3>
                <ul className='space-y-2'>
                    {PLATFORM_LINKS.map((link, index) => (
                        <li key={index} className='text-neutral-400 hover:text-white'><a href={link.href}>{link.text}</a> </li>
                    ))}
                </ul>
            </div>
            <div className="col-span-1">
                <h3 className='text-md mb-2 font-semibold tracking-widest bg-neutral-600 w-fit p-1 rounded-lg'>Communities</h3>
                <ul className='space-y-2'>
                    {COMMUNITY_LINKS.map((link, index) => (
                        <li key={index} className='text-neutral-400 hover:text-white'><a href={link.href}>{link.text}</a> </li>
                    ))}
                </ul>
            </div>
        </footer>

    )
}

export default Footer