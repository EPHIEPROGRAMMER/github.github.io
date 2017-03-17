# GitHub User Lookup

#### Week1: Modern JS Apps - Independent project using API

#### By *Vichitra Pool (Note), October 14th, 2016*

## Description

#### _Create a website where users may enter a GitHub username into a form, submit it, and see names and descriptions of that person's public repositories. Use the GitHub API to retrieve this information._

## Behavior Driven Development
|Behavior | input | output|
|--- | :---: | :---: |
|User can search the person's public GitHub repositories by input the GitHub username in the form input box. 
|Allow user to input GitHub username in uppercase letters and able to find that GitHub user | TALAYRUK | TalayRuk
|Allow user to input GitHub username in lowercase letters, and able to find that GitHub user| talayruk | TalayRuk

## Setup/Installation Requirements
1.  Open PowerShell
2.  $ git clone https://GitHub.com/TalayRuk/GitHub-UserLookup.git
3.  $ cd GitHub-User-Lookup
4.  $ npm install
5.  $ bower install
6.  $ npm install browser-sync --save-dev
7.  $ npm install gulp-sass gulp-sourcemaps --save-dev
8.  Create your API (Personal Access Token) in GitHub:
    - Visit the Settings area of your GitHub account, select Personal Access Tokens from the sidebar, and hit Generate New Token.
    - GitHub will offer a list of options. Do not select any. These grant read/write permissions and access to personal data. Finally, select Generate Token.
9.  $ make new .env file in your directory and type in exports.apiKey = "place your-API-here"; and save.

10. if there's error run $ gulp jshint
11. gulp cssBuild
12. $ gulp build --production
13. $ gulp serve

## Known Bugs
_none_

## Support and contact details
_Please contact the authors if you have any questions or comments._

## Technologies Used

HTML, CSS, JavaScript, Node.js, Npm & Gulp, Bower & Sass, API


## License

_*MIT Creative Commons*_

_Copyright (c) 2016 Vichitra Pool at Epicodus_
