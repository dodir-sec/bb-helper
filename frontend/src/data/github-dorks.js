const githubDorks = [
    "Jenkins", "OTP", "oauth", "authoriztion", "password", "pwd", "ftp", "dotfiles", "JDBC", "key-keys", "send_key-keys", "send,key-keys", "token", "user", "login-singin", "passkey-passkeys", "pass", "secret", "SecretAccessKey", "app_AWS_SECRET_ACCESS_KEY", "AWS_SECRET_ACCESS_KEY", "credentials", "config", "security_credentials", "connectionstring", "ssh2_auth_password", "DB_PASSWORD", "language:bash password", "language:bash pwd", "language:bash ftp", "language:bash dotfiles", "language:bash JDBC", "language:bash key-keys", "language:bash send_key-keys", "language:bash send,key-keys", "language:bash token", "language:bash user", "language:bash login-singin", "language:bash passkey-passkeys", "language:bash pass", "language:bash secret", "language:bash credentials", "language:bash config", "language:bash security_credentials", "language:bash connectionstring", "language:bash ssh2_auth_password", "language:python password", "language:python pwd", "language:python ftp", "language:python dotfiles", "language:python JDBC", "language:python key-keys", "language:python send_key-keys", "language:python send,key-keys", "language:python token", "language:python user", "language:python login-singin", "language:python passkey-passkeys", "language:python pass", "language:python secret", "language:python credentials", "language:python config", "language:python security_credentials", "language:python connectionstring", "language:python ssh2_auth_password", "access_key", "access_token", "admin_pass", "admin_user", "alias_pass", "alicloud_access_key", "amazon_secret_access_key", "amazonaws", "ansible_vault_password", "aos_key", "api_key", "api_key_secret", "api_key_sid", "api_secret", "api.googlemaps+AIza", "apidocs", "apikey", "apiSecret", "app_debug", "app_id", "app_key", "app_log_level", "app_secret", "appkey", "appkeysecret", "application_key", "appsecret", "appspot", "auth_token", "authorizationToken", "authsecret", "aws_access", "aws_access_key_id", "aws_bucket", "aws_key", "aws_secret", "aws_secret_key", "aws_token", "AWSSecretKey", "b2_app_key", "bashrc+password", "bintray_apikey", "bintray_gpg_password", "bintray_key", "bintraykey", "bluemix_api_key", "bluemix_pass", "browserstack_access_key", "bucket_password", "bucketeer_aws_access_key_id", "bucketeer_aws_secret_access_key", "built_branch_deploy_key", "bx_password", "cache_driver", "cache_s3_secret_key", "cattle_access_key", "cattle_secret_key", "certificate_password", "ci_deploy_password", "client_secret", "client_zpk_secret_key", "clojars_password", "cloud_api_key", "cloud_watch_aws_access_key", "cloudant_password", "cloudflare_api_key", "cloudflare_auth_key", "cloudinary_api_secret", "cloudinary_name", "codecov_token", "config", "conn.login", "connectionstring", "consumer_key", "consumer_secret", "credentials", "cypress_record_key", "database_password", "database_schema_test", "datadog_api_key", "datadog_app_key", "db_password", "db_server", "db_username", "dbpasswd", "dbpassword", "dbuser", "deploy_password", "digitalocean_ssh_key_body", "digitalocean_ssh_key_ids", "docker_hub_password", "docker_key", "docker_pass", "docker_passwd", "docker_password", "dockerhub_password", "dockerhubpassword", "dot-files", "dotfiles", "droplet_travis_password", "dynamoaccesskeyid", "dynamosecretaccesskey", "elastica_host", "elastica_port", "elasticsearch_password", "encryption_key", "encryption_password", "env.heroku_api_key", "env.sonatype_password", "eureka.awssecretkey", "extension:avastlic+support.avast.com", "extension:bat", "extension:cfg", "extension:dbeaver-data-sources.xml", "extension:env", "extension:exs", "extension:ini", "extension:json+api.forecast.io", "extension:json+googleusercontent+client_secret", "extension:json+mongolab.com", "extension:pem", "extension:pem+private", "extension:ppk", "extension:ppk+private", "extension:properties", "extension:sh", "extension:sls", "extension:sql", "extension:sql+mysql+dump", "extension:sql+mysql+dump+password", "extension:yaml+mongolab.com", "extension:zsh", "fabricApiSecret", "facebook_secret", "fb_secret", "filename:_netrc+password", "filename:.bash_history", "filename:.bash_profile+aws", "filename:.bashrc+mailchimp", "filename:.bashrc+password", "filename:.cshrc", "filename:.dockercfg+auth", "filename:.env+DB_USERNAME+NOT+homestead", "filename:.env+MAIL_HOSTsmtp.gmail.com", "filename:.esmtprc+password", "filename:.ftpconfig", "filename:.git-credentials", "filename:.history", "filename:.htpasswd", "filename:.netrc+password", "filename:.npmrc+_auth", "filename:.pgpass", "filename:.remote-sync.json", "filename:.s3cfg", "filename:.sh_history", "filename:.tugboat+NOT+_tugboat", "filename:bash", "filename:bash_history", "filename:bash_profile", "filename:bashrc", "filename:beanstalkd.yml", "filename:CCCam.cfg", "filename:composer.json", "filename:config", "filename:config+irc_pass", "filename:config.json+auths", "filename:config.php+dbpasswd", "filename:configuration.php+JConfig+password", "filename:connections", "filename:connections.xml", "filename:constants", "filename:credentials", "filename:credentials+aws_access_key_id", "filename:cshrc", "filename:database", "filename:dbeaver-data-sources.xml", "filename:deploy.rake", "filename:deployment-config.json", "filename:dhcpd.conf", "filename:dockercfg", "filename:env", "filename:environment", "filename:express.conf", "filename:express.conf+path:.openshift", "filename:filezilla.xml", "filename:filezilla.xml+Pass", "filename:git-credentials", "filename:gitconfig", "filename:global", "filename:history", "filename:htpasswd", "filename:hub+oauth_token", "filename:id_dsa", "filename:id_rsa", "filename:id_rsa+or+filename:id_dsa", "filename:idea14.key", "filename:known_hosts", "filename:logins.json", "filename:makefile", "filename:master.key+path:config", "filename:netrc", "filename:npmrc", "filename:pass", "filename:passwd+path:etc", "filename:pgpass", "filename:prod.exs", "filename:prod.exs+NOT+prod.secret.exs", "filename:prod.secret.exs", "filename:proftpdpasswd", "filename:recentservers.xml", "filename:recentservers.xml+Pass", "filename:robomongo.json", "filename:s3cfg", "filename:secrets.yml+password", "filename:server.cfg", "filename:server.cfg+rcon+password", "filename:settings", "filename:settings.py+SECRET_KEY", "filename:sftp-config.json", "filename:sftp.json+path:.vscode", "filename:shadow", "filename:shadow+path:etc", "filename:spec", "filename:sshd_config", "filename:tugboat", "filename:ventrilo_srv.ini", "filename:WebServers.xml", "filename:wp-config", "filename:wp-config.php", "filename:zhrc", "firebase", "flickr_api_key", "fossa_api_key", "ftp", "ftp_password", "gatsby_wordpress_base_url", "gatsby_wordpress_client_id", "gatsby_wordpress_user", "gh_api_key", "gh_token", "ghost_api_key", "github_api_key", "github_deploy_hb_doc_pass", "github_id", "github_key", "github_password", "github_token", "gitlab", "gmail_password", "gmail_username", "google_maps_api_key", "google_private_key", "google_secret", "google_server_key", "gpg_key_name", "gpg_keyname", "gpg_passphrase", "HEROKU_API_KEY+language:json", "HEROKU_API_KEY+language:shell", "heroku_oauth", "heroku_oauth_secret", "heroku_oauth_token", "heroku_secret", "heroku_secret_token", "herokuapp", "HOMEBREW_GITHUB_API_TOKEN+language:shell", "htaccess_pass", "htaccess_user", "incident_channel_name", "internal", "irc_pass", "JEKYLL_GITHUB_TOKEN", "jsforce+extension:js+conn.login", "jwt_client_secret_key", "jwt_lookup_secert_key", "jwt_password", "jwt_secret", "jwt_secret_key", "jwt_token", "jwt_user", "jwt_web_secert_key", "jwt_xmpp_secert_key", "key", "keyPassword", "language:yaml+-filename:travis", "ldap_password", "ldap_username", "linux_signing_key", "ll_shared_key", "location_protocol", "log_channel", "login", "lottie_happo_api_key", "lottie_happo_secret_key", "lottie_s3_api_key", "lottie_s3_secret_key", "magento+password", "mail_password", "mail_port", "mailchimp", "mailchimp_api_key", "mailchimp_key", "mailgun", "mailgun+apikey", "mailgun_key", "mailgun_password", "mailgun_priv_key", "mailgun_secret_api_key", "manage_key", "mandrill_api_key", "mapbox+api+key", "master_key", "mg_api_key", "mg_public_api_key", "mh_apikey", "mh_password", "mile_zero_key", "minio_access_key", "minio_secret_key", "mix_pusher_app_cluster", "mix_pusher_app_key", "msg+nickserv+identify+filename:config", "mydotfiles", "mysql", "mysql+password", "mysql_root_password", "netlify_api_key", "nexus+password", "nexus_password", "node_env", "node_pre_gyp_accesskeyid", "node_pre_gyp_secretaccesskey", "npm_api_key", "npm_password", "npm_secret_key", "npmrc+_auth", "nuget_api_key", "nuget_apikey", "nuget_key", "oauth_token", "object_storage_password", "octest_app_password", "octest_password", "okta_key", "omise_key", "onesignal_api_key", "onesignal_user_auth_key", "openwhisk_key", "org_gradle_project_sonatype_nexus_password", "org_project_gradle_sonatype_nexus_password", "os_password", "ossrh_jira_password", "ossrh_pass", "ossrh_password", "pagerduty_apikey", "parse_js_key", "pass", "passwd", "password", "password+travis", "passwords", "path:sites+databases+password", "paypal_secret", "paypal_token", "pem+private", "personal_key", "playbooks_url", "plotly_apikey", "plugin_password", "postgres_env_postgres_password", "postgresql_pass", "preprod", "private", "private+-language:java", "private_key", "private_signing_password", "prod", "prod_password", "prod.access.key.id", "prod.secret.key", "PT_TOKEN+language:bash", "publish_key", "pusher_app_id", "pwd", "queue_driver", "rabbitmq_password", "rds.amazonaws.com+password", "redis_password", "response_auth_jwt_secret", "rest_api_key", "rinkeby_private_key", "root_password", "ropsten_private_key", "route53_access_key_id", "rtd_key_pass", "rtd_store_pass", "s3_access_key", "s3_access_key_id", "s3_key", "s3_key_app_logs", "s3_key_assets", "s3_secret_key", "salesforce_password", "sandbox_aws_access_key_id", "sandbox_aws_secret_access_key", "sauce_access_key", "secret", "secret+access+key", "secret_access_key", "secret_bearer", "secret_key", "secret_key_base", "secret_token", "secret.password", "secretaccesskey", "secretkey", "secrets", "secure", "security_credentials", "send_keys", "send.keys", "sendgrid_api_key", "sendgrid_key", "sendgrid_password", "sendkeys", "ses_access_key", "ses_secret_key", "setdstaccesskey", "setsecretkey", "sf_username", "SF_USERNAME+salesforce", "shodan_api_key+language:python", "sid_token", "signing_key_password", "signing_key_secret", "slack_api", "slack_channel", "slack_key", "slack_outgoing_token", "slack_signing_secret", "slack_token", "slack_webhook", "slash_developer_space_key", "snoowrap_password", "socrata_password", "sonar_organization_key", "sonar_project_key", "sonatype_password", "sonatype_token_password", "soundcloud_password", "sql_password", "sqsaccesskey", "square_access_token", "square_token", "squareSecret", "ssh", "ssh2_auth_password", "sshpass", "staging", "stg", "storePassword", "stormpath_api_key_id", "stormpath_api_key_secret", "strip_key", "strip_secret_key", "stripe", "stripe_key", "stripe_secret", "stripToken", "svn_pass", "swagger", "tesco_api_key", "tester_keys_password", "testuser", "thera_oss_access_key", "token", "trusted_hosts", "twilio_account_sid", "twilio_accountsid", "twilio_api_key", "twilio_api_secret", "twilio_secret", "twilio_secret_token", "TWILIO_SID+NOT+env", "twilio_token", "twilioapiauth", "twiliosecret", "twine_password", "twitter_secret", "twitterKey", "x-api-key", "xoxb+", "xoxp", "zen_tkn", "zen_token", "zendesk_url", "twilio+secret", "twilio_account_id", "twilio_account_secret", "twilio_acount_sid+NOT+env", "twilio_api", "twilio_api_auth", "twilio_api_sid", "twilio_api_token", "zen_key", "zendesk_api_token", "zendesk_key", "zendesk_token", "zendesk_username", , "filename:.npmrc _auth", "filename:.dockercfg auth", "extension:pem private", "extension:ppk private", "filename:id_rsa or filename:id_dsa", "extension:sql mysql dump", "extension:sql mysql dump password", "filename:credentials aws_access_key_id", "filename:.s3cfg", "filename:wp-config.php", "filename:.htpasswd", "filename:.env DB_USERNAME NOT homestead", "filename:.env MAIL_HOST=smtp.gmail.com", "filename:.git-credentials", "PT_TOKEN language:bash", "filename:.bashrc password", "filename:.bashrc mailchimp", "filename:.bash_profile aws", "rds.amazonaws.com password", "extension:json api.forecast.io", "extension:json mongolab.com", "extension:yaml mongolab.com", "jsforce extension:js conn.login", "SF_USERNAME salesforce", "filename:.tugboat NOT _tugboat", "HEROKU_API_KEY language:shell", "HEROKU_API_KEY language:json", "filename:.netrc password", "filename:_netrc password", "filename:hub oauth_token", "filename:robomongo.json", "filename:filezilla.xml Pass", "filename:recentservers.xml Pass", "filename:config.json auths", "filename:idea14.key", "filename:config irc_pass", "filename:connections.xml", "filename:express.conf path:.openshift", "filename:.pgpass", "filename:proftpdpasswd", "filename:ventrilo_srv.ini", "[WFClient] Password= extension:ica", "filename:server.cfg rcon password", "JEKYLL_GITHUB_TOKEN", "filename:.bash_history", "filename:.cshrc", "filename:.history", "filename:.sh_history", "filename:sshd_config", "filename:dhcpd.conf", "filename:prod.exs NOT prod.secret.exs", "filename:prod.secret.exs", "filename:configuration.php JConfig password", "filename:config.php dbpasswd", "filename:config.php pass", "path:sites databases password", "shodan_api_key language:python", "shodan_api_key language:shell", "shodan_api_key language:json", "shodan_api_key language:ruby", "filename:shadow path:etc", "filename:passwd path:etc", "extension:avastlic \"support.avast.com\"", "filename:dbeaver-data-sources.xml", "filename:sftp-config.json", "filename:.esmtprc password", "extension:json googleusercontent client_secret", "HOMEBREW_GITHUB_API_TOKEN language:shell", "xoxp OR xoxb", ".mlab.com password", "filename:logins.json", "filename:CCCam.cfg", "msg nickserv identify filename:config", "filename:settings.py SECRET_KEY", "filename:secrets.yml password", "filename:master.key path:config", "filename:deployment-config.json", "filename:.ftpconfig", "filename:.remote-sync.json", "filename:sftp.json path:.vscode", "filename:WebServers.xml", "filename:jupyter_notebook_config.json", "\"api_hash\" \"api_id\"", "\"https://hooks.slack.com/services/\"", "filename:github-recovery-codes.txt", "filename:gitlab-recovery-codes.txt", "filename:discord_backup_codes.txt", "extension:yaml cloud.redislabs.com", "extension:json cloud.redislabs.com"
];

export default githubDorks;