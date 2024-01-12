import React, { useEffect, useState } from 'react'

function DomainTools() {
  const [domain, setDomain] = useState("");
  const [webArchiveLinks, setWebArchiveLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWebArchiveData = async () => {
    if (!domain) {
      console.log("Please enter a domain");
      return;
    }

    setIsLoading(true);
    try {
      const url = 'https://corsproxy.io/?' + encodeURIComponent(`https://web.archive.org/cdx/search/cdx?url=*.${domain}&fl=original&collapse=urlkey&output=json`);
      const response = await fetch(url);
      const data = await response.json();
      const links = data.map((item) => ({ link: item, checked: false, dork: item }));
      setWebArchiveLinks(links);
    } catch (error) {
      console.error('Error fetching data:', error);
      setWebArchiveLinks([]);
    }
    setIsLoading(false);
  };

  const handleCheckboxChange = (index) => {
    setWebArchiveLinks(webArchiveLinks.map((link, i) => {
      if (i === index) {
        return { ...link, checked: !link.checked };
      }
      return link;
    }));
  };

  function openCheckedLinks() {
    webArchiveLinks.filter(link => link.checked).forEach(link => {
      window.open(link.link, '_blank');
    });
  }

  function openAllLinks() {
    for (const linkObj of webArchiveLinks) {
      window.open(linkObj.link, '_blank');
    }
  }

  return (
    <div className='google-dorks bg-white dark:bg-slate-900 rounded-md p-8 h-min shadow'>
      <h1 className='text-3xl font-semibold	dark:text-white mb-8 divide-y divide-gray-400 md:divide-y-8'>Domain Tools
      </h1>

      <div className='mb-8'>
        <label className="w-full relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <i className="ri-search-line"></i>
          </span>
          <input
            type="text" id="domain" placeholder="Enter a domain" value={domain} onChange={e => setDomain(e.target.value)}
            className="search placeholder:text-slate-400 block w-full border border-slate-700 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm transition duration-150 dark:bg-slate-800" name="search" />
        </label>
      </div>

      <div className='mb-8 '>
        <button onClick={fetchWebArchiveData} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Fetch Web Archive Data</button>

        <a href={`https://web.archive.org/cdx/search/cdx?url=*.${domain}&fl=original&collapse=urlkey`} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Web Archive</a>
        <a href={`https://crt.sh/?q=%.${domain}`} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">crt.sh</a>
        <a href={`https://webscout.io/lookup/${domain}`} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">WebScout lookup</a>
        <a href={`https://urlscan.io/search/#${domain}`} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">UrlScan Search</a>
        <a href={`https://search.censys.io/search?resource=hosts&sort=RELEVANCE&per_page=25&virtual_hosts=EXCLUDE&q=${domain}`} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Censys</a>
        <a href={`https://en.fofa.info/result?q=domain="${domain}"`} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">FOFA</a>
      </div>

      {isLoading ? (
        <div>Loading Web Archive Data...</div>
      ) : (
        webArchiveLinks.length > 0 && (
          <div className="web-archive-container flex flex-col gap-3 overflow-y-scroll mb-8 pl-1 pr-1">
            {webArchiveLinks.map((linkObj, index) => (
              <div key={index} className='flex gap-2 '>
                <input
                  type="checkbox"
                  className='w-5 h-5'
                  checked={linkObj.checked}
                  onChange={() => handleCheckboxChange(index)}
                />
                <a href={linkObj.link} target="_blank" rel="noopener noreferrer" className='max-w-lg whitespace-normal break-all'>{linkObj.dork}</a>
              </div>
            ))}
          </div>
        ))}


      {webArchiveLinks.length > 0 && <div className='flex items-center gap-2 justify-end	'>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={openAllLinks}>Open All Links</button>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={openCheckedLinks}>Open Checked Links</button>

      </div>}

    </div>
  )
}

export default DomainTools
