
const googleDorks = [
    {
        dorkTitle: "Find pages on a specific domain, excluding certain subdomains and directories",
        dork: "site:example.com -www -shop -share -ir -mfa"
    },
    {
        dorkTitle: "Search for PHP files in URLs on a specific site",
        dork: "site:example.com ext:php inurl:?"
    },
    {
        dorkTitle: "Find Open Bug Bounty reports for a specific domain",
        dork: "site:openbugbounty.org inurl:reports intext:\"example.com\""
    },
    {
        dorkTitle: "Search for potentially sensitive files on a specific domain",
        dork: "site:\"example.com\" ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess"
    },
    {
        dorkTitle: "Find search query URLs on a specific domain",
        dork: "inurl:q= | inurl:s= | inurl:search= | inurl:query= | inurl:keyword= | inurl:lang= inurl:& site:example.com"
    },
    {
        dorkTitle: "Locate redirect and return URLs on a specific domain",
        dork: "inurl:url= | inurl:return= | inurl:next= | inurl:redir= inurl:http site:example.com"
    },
    {
        dorkTitle: "Find pages with specific parameter names which might reveal sensitive information",
        dork: "inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= inurl:& site:example.com"
    },
    {
        dorkTitle: "Locate pages with URL-related parameters potentially revealing paths and endpoints",
        dork: "inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain=  | inurl:page= inurl:& site:example.com"
    },
    {
        dorkTitle: "Search for pages with file and directory related parameters, possibly leading to sensitive directories and files",
        dork: "inurl:include | inurl:dir | inurl:detail= | inurl:file= | inurl:folder= | inurl:inc= | inurl:locate= | inurl:doc= | inurl:conf= inurl:& site:example.com"
    },
    {
        dorkTitle: "Find pages with execution and command-related parameters, could indicate vulnerable points",
        dork: "inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read=  | inurl:ping= inurl:& site:example.com"
    },
    {
        dorkTitle: "Search for pages with administrative and configuration-related parameters",
        dork: "inurl:config | inurl:env | inurl:setting | inurl:backup | inurl:admin | inurl:php site:example.com"
    },
    {
        dorkTitle: "Look for pages with potentially sensitive personal information parameters",
        dork: "inurl:email= | inurl:phone= | inurl:password= | inurl:secret= inurl:& site:example.com"
    },
    {
        dorkTitle: "Find API documentation and explorer interfaces which might be publicly exposed",
        dork: "inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer site:\"example.com\""
    },
    {
        dorkTitle: "Search specific external sites for mentions or data related to a domain",
        dork: "site:pastebin.com \"example.com\"",
    },
    {
        dorkTitle: "Search for references to the domain on jsfiddle.net",
        dork: "site:jsfiddle.net \"example.com\""
    },
    {
        dorkTitle: "Find instances of the domain on codebeautify.org",
        dork: "site:codebeautify.org \"example.com\""
    },
    {
        dorkTitle: "Look for the domain on codepen.io projects",
        dork: "site:codepen.io \"example.com\""
    },
    {
        dorkTitle: "Search for the domain in Amazon S3 URLs",
        dork: "site:s3.amazonaws.com \"example.com\""
    },
    {
        dorkTitle: "Find references to the domain in Azure Blob storage URLs",
        dork: "site:blob.core.windows.net \"example.com\""
    },
    {
        dorkTitle: "Search for the domain in Google API URLs",
        dork: "site:googleapis.com \"example.com\""
    },
    {
        dorkTitle: "Look for the domain in Google Drive shared URLs",
        dork: "site:drive.google.com \"example.com\""
    },
    {
        dorkTitle: "Search for the domain in Azure DevOps URLs",
        dork: "site:dev.azure.com \"example.com\""
    },
    {
        dorkTitle: "Find the domain in Microsoft OneDrive shared URLs",
        dork: "site:onedrive.live.com \"example.com\""
    },
    {
        dorkTitle: "Search for the domain in DigitalOcean Spaces URLs",
        dork: "site:digitaloceanspaces.com \"example.com\""
    },
    {
        dorkTitle: "Look for the domain in SharePoint URLs",
        dork: "site:sharepoint.com \"example.com\""
    },
    {
        dorkTitle: "Search for the domain in external Amazon S3 URLs",
        dork: "site:s3-external-1.amazonaws.com \"example.com\""
    },
    {
        dorkTitle: "Find the domain in dual-stack (IPv4 and IPv6) Amazon S3 URLs",
        dork: "site:s3.dualstack.us-east-1.amazonaws.com \"example.com\""
    },
    {
        dorkTitle: "Search for the domain in Dropbox shared URLs",
        dork: "site:dropbox.com/s \"example.com\""
    },
    {
        dorkTitle: "Look for the domain in Box shared URLs",
        dork: "site:box.com/s \"example.com\""
    },
    {
        dorkTitle: "Search for the domain in Google Docs URLs",
        dork: "site:docs.google.com inurl:\"/d/\" \"example.com\""
    },
    {
        dorkTitle: "Find the domain in JFrog URLs",
        dork: "site:jfrog.io \"example.com\""
    },
    {
        dorkTitle: "Search for the domain in Firebase.io URLs",
        dork: "site:firebaseio.com \"example.com\""
    },
    {
        dorkTitle: "Search for file upload interfaces on a domain",
        dork: "site:example.com ”choose file”"
    },
    {
        dorkTitle: "Find vulnerability reporting interfaces or mentions on a site",
        dork: "\"submit vulnerability report\" | \"powered by bugcrowd\" | \"powered by hackerone\""
    },
    {
        dorkTitle: "Search for security.txt files which may contain bounty information",
        dork: "site:*/security.txt \"bounty\""
    },
    {
        dorkTitle: "Locate Apache server status pages, which might be unintentionally exposed",
        dork: "site:*/server-status apache"
    },
    {
        dorkTitle: "Find WordPress admin-ajax.php endpoints which might be exploitable",
        dork: "inurl:/wp-admin/admin-ajax.php"
    },
    {
        dorkTitle: "Search for Drupal sites with exposed user login or registration pages",
        dork: "intext:\"Powered by\" & intext:Drupal & inurl:user"
    },
    {
        dorkTitle: "Search for Joomla login pages",
        dork: "site:*/joomla/login"
    }
];

export default googleDorks;

