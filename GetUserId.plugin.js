/**
 * @name GetUserId
 * @author StiizzyCat
 * @description Click on ur pfp to get your userid!
 * @authorLink https://github.com/StiizzyCat
 * @version 0.0.1
 * @source 
 */
module.exports = class ExamplePlugin {
    start() {
        const myButton = document.createElement("button");
        myButton.textContent = "Click me!";
        myButton.id = 'DaButton'
        myButton.height = "10px";
        myButton.width = "10px";
        myButton.style.background = "none";
        myButton.style.border = "none";
        const finduserid = BdApi.findModuleByProps("getCurrentUser").getCurrentUser().id
        var userid = finduserid
        function copyToClipboard(text) { // yes i skidded this lmao creds to the orignal coder!
            var dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = text;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
        }
        myButton.addEventListener("click", () => {
            copyToClipboard(userid)

            BdApi.showToast("UserID Coppied to clipboard!");
        });
        const butters = document.querySelector("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > div > div > div.sidebar-1tnWFu > section > div.container-YkUktl > div.avatarWrapper-1B9FTW.withTagAsButton-OsgQ9L > div.wrapper-1VLyxH.avatar-1EWyVD");
        butters.append(myButton);
    }

    stop() {
        const myButton = document.getElementById("DaButton");
        myButton.remove()
    }
}
