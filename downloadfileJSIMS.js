window.onload = function () {
    createFileWindowsJSIMSOYHI()
}

var filesJSIMS = [
    {
        title: "Softbody Tube Simulation",
        licensetype: "personal",
        projectimage: "projectpreviewsJSIMS/softbodytubeJSIMS.png",
        projectpreviewyesno: "true",
        projectpreviewmedia: "video",
        projectpreview: "mediapreviewsJSIMS/softbodytubeJSIMS.mp4",
    },
]

function createFileWindowsJSIMSOYHI() {
    for (let i = 0; i < filesJSIMS.length ; i++) {
        var newWindowJSIMS = document.createElement("div");
        if (filesJSIMS[i].projectpreviewyesno == "true"){
            var currentProjectPreview = `<${filesJSIMS[i].projectpreviewmedia} src="${filesJSIMS[i].projectpreview}" controls
            style="height: 6vw;"></${filesJSIMS[i].projectpreviewmedia}>`
        }
        if (filesJSIMS[i].licensetype == "personal"){
            var currentLicenseType = `<span style="color: red;">Liscense: Only For Personal Use</span>`;
        } else if (filesJSIMS[i].licensetype == "commercial"){
            var currentLicenseType = "Liscense: Free For Commercial Use &bullet; Please Give Credit"
        }
        newWindowJSIMS.innerHTML = `<div>
        <span style="font-size: 1.9vw; user-select: none;">${filesJSIMS[i].title}</span>
        <br>
        <a style="font-size: 0.9vw; user-select: none;"
                    href="cinema4dprojectfilesJSIMS/softbodytubeJSIMS.c4d" download>Download</a>
        <br>
        <span>Project Preview:</span>
        <br>
        <img style="height: 6vw;"
        src="${filesJSIMS[i].projectimage}">
        <br>
        <span>Media Preview:</span>
        <br>
        ${currentProjectPreview}
        <br>
        ${currentLicenseType}
        </div>`;
        document.querySelector("[projectfilesJSIMS]").appendChild(newWindowJSIMS)
    }
}

