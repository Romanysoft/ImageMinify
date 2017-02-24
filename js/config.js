(function () {
    window.RTYConfig = {
        appName:"ImageMinify",
        appID:"com.romanysoft.app.macos.ImageMinify",
        documentTitle:"ImageMinify By Romanysoft",
        supportPlatforms:["Mac"],
        googleUA:"UA-76676167-8",
        gitHome:"//github.com/Romanysoft/ImageMinify",
        reportIssueUrl:"//github.com/Romanysoft/ImageMinify/issues",
        changeLogUrl:"//github.com/Romanysoft/ImageMinify/wiki/Changelog",
        wikiUrl:"//github.com/Romanysoft/ImageMinify/wiki",
        jumpLocation:"https://www.romanysoft.net/imageminify/",
        romanysoftHome:"//www.romanysoft.com",
        copyright:"Copyright © " + (new Date()).getFullYear() + " Romanysoft LAB."
    };
    
    if(window.RTYConfig.jumpLocation){
        window.location = window.RTYConfig.jumpLocation;
    } 
})();