const shodanDorks = [
    { dorkTitle: "Find Admin Pages", dork: "http.title:\"Admin\"" },
    { dorkTitle: "Identify AWS Buckets by Region", dork: "X-Amz-Bucket-Region" },
    { dorkTitle: "Detect Jenkins Servers", dork: "x-jenkins 200" },
    { dorkTitle: "Find Drupal 7 Sites", dork: "X-Generator: Drupal 7" },
    { dorkTitle: "MongoDB Server Metrics", dork: "all:\"mongodb server information\" all:\"metrics\"" },
    { dorkTitle: "MongoDB Files Information", dork: "port:27017 -all:\"partially\" all:\"fs.files\"" },
    { dorkTitle: "Elasticsearch Indices Access", dork: "port:\"9200\" all:\"elastic indices\"" },
    { dorkTitle: "Elasticsearch Product Detection", dork: "product:elastic port:9200" },
    { dorkTitle: "Find CouchDB Databases", dork: "product: CouchDB" },
    { dorkTitle: "Locate Jira System Dashboards", dork: "title:\"system dashboard\" html:jira" },
    { dorkTitle: "Detect JSP Components", dork: "http.component:\"jsp\"" },
    { dorkTitle: "Ruby on Rails on Port 3000", dork: "http.component:ruby port:3000" },
    { dorkTitle: "Secret Key Exposure in Rails", dork: "html:\"secret_key_base\"" },
    { dorkTitle: "Unique Favicon Hash", dork: "http.favicon.hash:81586312 200" },
    { dorkTitle: "Detect Dana-Na Auth Pages", dork: "html:/dana-na/" },
    { dorkTitle: "Identify ProFTPD Servers", dork: "proftpd port:21" },
    { dorkTitle: "Expired SSL Certificates", dork: "ssl.cert.expired:true" },
    { dorkTitle: "SMB Authentication Disabled", dork: "\"Authentication: disabled\" port:445" },
    { dorkTitle: "FTP Login Success Messages", dork: "\"220\" \"230 Login successful.\" port:21" },
    { dorkTitle: "Logitech Media Server Detection", dork: "\"Server: Logitech Media Server\" \"200 OK\"" },
    { dorkTitle: "Find MySQL Products", dork: "\"product:MySQL\"" },
    { dorkTitle: "MongoDB Service on Port 27017", dork: "mongodb port:27017" },
    { dorkTitle: "VNC Authentication Disabled", dork: "\"authentication disabled\" \"RFB 003.008\"" },
    { dorkTitle: "Remote Desktop Services on Port 3389", dork: "remote desktop \"port:3389\"" },
    { dorkTitle: "Detect ProFTPD 1.3.5 Servers", dork: "\"220 ProFTPD 1.3.5\"" },
    { dorkTitle: "Anonymous FTP User Access", dork: "\"230 User anonymous\"" },
    { dorkTitle: "Successful FTP Login", dork: "\"220\" \"230 Login successful.\" port:21" },
    { dorkTitle: "Telnet Root Access", dork: "root@ port:23 -login -password -name -Session" },
    { dorkTitle: "Console Gateway on Telnet", dork: "port:23 console gateway" },
    { dorkTitle: "Grafana Dashboards", dork: "http.title:\"Grafana\"" },
    { dorkTitle: "MongoDB Server Info on Port 27017", dork: "MongoDB Server Information port:27017" },
    { dorkTitle: "FTP Access Confirmation", dork: "\"220\" \"230 Login successful.\" port:21" },
    { dorkTitle: "Citrix Gateway Access", dork: "http.title:\"Citrix Gateway\"" },
    { dorkTitle: "PHP Component Detection", dork: "http.component:\"php\"" },
    { dorkTitle: "Identify Splunk Services", dork: "product:\"Splunk\"" },
    { dorkTitle: "Citrix Gateway via HTTP 200", dork: "200 http.title:\"citrix gateway\"" },
    { dorkTitle: "MySQL Service on Port 3306", dork: "port:\"3306\"" },
    { dorkTitle: "SSH Service on Port 22", dork: "port:\"22\"" },
    { dorkTitle: "Jenkins Dashboard Detection", dork: "\"X-Jenkins\" http.title:\"Dashboard\"" },
    { dorkTitle: "Web Directory Listing", dork: "http.title:\"index of / \"" },
    { dorkTitle: "Openfire Admin Console", dork: "intitle:\"Openfire Admin Console\"" },
    { dorkTitle: "Detect Openfire Admin Console", dork: "http.title:\"Openfire Admin Console\"" },
    { dorkTitle: "Dashboard Access via HTTP 200", dork: "200 http.title:\"dashboard\"" }
];

export default shodanDorks;