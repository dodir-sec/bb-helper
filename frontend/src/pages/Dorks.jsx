import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import googleDorks from "../data/google-dorks.js";
import githubDorks from "../data/github-dorks.js";
import shodanDorks from "../data/shodan-dorks.js";

function Dorks() {
    const location = useLocation();
    const [searchUrl, setSearchUrl] = useState("");
    const [domain, setDomain] = useState("");
    const [links, setLinks] = useState([]);
    const [domainHeading, setDomainHeading] = useState("");
    const [search, setSearch] = useState("");
    const [isGenerated, setIsGenerated] = useState(false);
    const [displayLinks, setDisplayLinks] = useState([]);
    const [title, setTitle] = useState('')
    const [data, setData] = useState([])
    const [selectedShodanOption, setSelectedOption] = useState('Ssl.cert.subject.CN');


    useEffect(() => {
        const route = location.pathname;
        setDorks(route)
        reset();
    }, [location.pathname]);

    useEffect(() => {
        let filteredLinks = links;
        if (search) {
            filteredLinks = links.filter(link => link.dorkTitle.toLowerCase().includes(search.toLowerCase()));
        }
        setDisplayLinks(filteredLinks);
    }, [search, selectedShodanOption]);

    function setDorks() {
        if (location.pathname === '/github-dorks') {
            setSearchUrl("https://github.com/search?q=");
            setTitle('Github Dorks')
            setData(githubDorks)
        } else if (location.pathname === '/google-dorks') {
            setSearchUrl("https://www.google.com/search?q=");
            setTitle('Google Dorks')
            setData(googleDorks)
        } else if (location.pathname === '/shodan-dorks') {
            setSearchUrl("https://www.shodan.io/search?query=");
            setTitle('Shodan Dorks')
            setData(shodanDorks)
        }
    }

    function generateLinks(domain, needReplace = false) {
        let uniqueDorksSet = new Set();

        for (const dorkItem of data) {
            let newDork;
            if (location.pathname === '/github-dorks') {
                // GitHub dorks are plain strings
                newDork = dorkItem;
                uniqueDorksSet.add(newDork);
            } else {
                newDork = needReplace ? dorkItem.dork.replace(/example(?:\[?\.\]?|\.)com/g, domain) : dorkItem.dork;
                uniqueDorksSet.add({ dork: newDork, dorkTitle: dorkItem.dorkTitle });
            }
        }
        const searchLinks = Array.from(uniqueDorksSet).map(dorkObj => {
            return location.pathname === '/github-dorks' ?
                {
                    link: `${searchUrl}${encodeURIComponent(domain)}+${encodeURIComponent(dorkObj)}&type=code`,
                    dork: dorkObj,
                    dorkTitle: dorkObj,
                    checked: false
                } :
                {
                    link: `${searchUrl}${location.pathname === '/shodan-dorks' ? selectedShodanOption + ':' : ''}${encodeURIComponent(domain)}+${encodeURIComponent(dorkObj.dork)}&type=code`,
                    dork: dorkObj.dork,
                    dorkTitle: dorkObj.dorkTitle,
                    checked: false
                };
        });
        console.log('searchLinks', searchLinks);

        let links = searchLinks.filter(link => link.dorkTitle && typeof link.dorkTitle === 'string' && link.dorkTitle.toLowerCase().includes(search.toLowerCase()));

        setDomainHeading(`Domain: ${domain}`);
        setLinks(links);
        setDisplayLinks(links);
        setIsGenerated(true);
    }

    function handleCheckboxChange(index) {
        setDisplayLinks(links => links.map((link, i) =>
            i === index ? { ...link, checked: !link.checked } : link
        ));
    }

    function openCheckedLinks() {
        displayLinks.filter(link => link.checked).forEach(link => {
            window.open(link.link, '_blank');
        });
    }

    function openAllLinks() {
        for (const linkObj of links) {
            window.open(linkObj.link, '_blank');
        }
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            generate(domain);
        }
    }

    function reset() {
        setIsGenerated(false);
        setDomain('');
        setLinks([]);
        setSearch('');
        setDisplayLinks([]);
    }

    function generate(domain) {
        if (!domain) return
        if (location.pathname === '/github-dorks') {
            generateLinks(domain)
        } else if (location.pathname === '/google-dorks') {
            generateLinks(domain, true)
        } else if (location.pathname === '/shodan-dorks') {
            generateLinks(domain)
        }
    }

    const shodanOptions = [
        { value: 'Ssl.cert.subject.CN', label: 'Ssl.cert.subject.CN' },
        { value: 'ssl', label: 'ssl' },
        { value: 'org', label: 'org' },
    ];

    function handleFilterChange(event) {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    }

    return (
        <div className='dorks bg-white dark:bg-slate-900 rounded-md p-8 h-min shadow'>
            <h1 className='text-3xl font-semibold	dark:text-white mb-8 divide-y divide-gray-400 md:divide-y-8'>{title}
            </h1>

            {!isGenerated ? <div>

                <label className="w-full relative block mb-8">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <i className="ri-search-line"></i>
                    </span>
                    <input
                        type="text" id="domain" placeholder="Enter a domain" value={domain} onChange={e => setDomain(e.target.value)} onKeyDown={handleKeyDown}
                        className="search placeholder:text-slate-400 block w-full border border-slate-700 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm transition duration-150 dark:bg-slate-800" name="search" />
                </label>
                {location.pathname === "/shodan-dorks" && <div className='mb-8'>

                    <label htmlFor="shodan" className="w-full relative block mb-2">Select an option</label>
                    <select id="shodan" className="search placeholder:text-slate-400 block w-full border border-slate-700 rounded-md py-2  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm transition duration-150 dark:bg-slate-800" onChange={handleFilterChange}>
                        {shodanOptions.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                }
            </div>
                :
                <div>
                    <div className='flex gap-3 items-center text-xl mb-2'>

                        <h2 className='text-xl	dark:text-white  divide-y divide-gray-400 md:divide-y-8' id="domainHeading">{domainHeading}</h2>
                        <i className="ri-edit-line cursor-pointer" onClick={() => { reset() }}></i>
                    </div>
                    <label className="w-full relative block mb-5">
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <i className="ri-search-line"></i>
                        </span>
                        <input
                            type="text" id="search" placeholder="Search dorks" value={search} onChange={e => setSearch(e.target.value)}
                            className="search placeholder:text-slate-400 block w-full border border-slate-700 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm transition duration-150 dark:bg-slate-800" name="search" />
                    </label>
                </div>}


            {isGenerated && (
                <div className="dorks-container flex flex-col gap-3 overflow-y-scroll mb-8 pl-1 pr-1" >
                    {displayLinks.map((linkObj, index) => (
                        <div key={index} className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className=' w-5 h-5'
                                checked={linkObj.checked}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            <a href={linkObj.link} target="_blank" rel="noopener noreferrer" className='max-w-lg'>
                                {linkObj.dorkTitle ? `${linkObj.dorkTitle}` : linkObj.dork}
                            </a>
                        </div>
                    ))}
                </div>
            )}

            <div className='flex items-center gap-2 justify-end	'>
                {/* <button onClick={openAllLinks}>Open All Links</button> */}
                {isGenerated && <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={openCheckedLinks}>Open Checked Links</button>}

                {!isGenerated && <button onClick={() => generate(domain)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Generate Keywords</button>}
            </div>

        </div>
    )
}

export default Dorks
