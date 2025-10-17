$curPath = $PSScriptRoot
$buildPath = $curPath + "\build\"


function CopyFile{
    param (
        $fileName
    )
    try{
        Copy-Item -Path "${buildPath}${fileName}" -Destination "${curPath}/${fileName}"
        "Copied from ${buildPath}${fileName} to ${curPath}/${fileName}"
    } catch {
        "Could not copy from ${buildPath}${fileName} to ${curPath}/${fileName}"
    }
}

function FindRemoveCopyFile{
    param (
        $fileName
    )
    try{
        $curFile = gci -Path ${curPath} -Filter ${fileName} -File
        Remove-Item -Path ${curFile}
        "Removed ${curFile}"
    } catch{
        "Could not remove ${curPath}${fileName}"
    }
    try{
        $targetFile = gci -Path ${buildPath} -Filter ${fileName} -File
        CopyFile(${targetFile})
    } catch{
        "There was an error"
    }
}

function CopyFolder{
    param (
        $fileName
    )
    try{
        Copy-Item -Path "${buildPath}${fileName}" -Destination "${curPath}/${fileName}" -recurse -Force
        "Copied from ${buildPath}${fileName} to ${curPath}/${fileName}"
    } catch {
        "Could not copy from ${buildPath}${fileName} to ${curPath}/${fileName}"
    }
}

function FindRemoveCopyFolder{
    param (
        $fileName
    )
    try{
        $curDir = gci -Path ${curPath}\* -Filter ${fileName} -Directory
        Remove-Item -Path ${curDir} -recurse -Force
        "Removed ${curDir}"
    } catch{
        "Could not remove ${curPath}\${fileName}"
    }
    try{
        $targetDir = gci -Path ${buildPath} -Filter ${fileName} -Directory
        CopyFolder(${targetDir})
    } catch{
        "There was an error"
    }
}

CopyFile("aboutMe.jpg")
CopyFile("asset-manifest.json")
CopyFile("index.html")
CopyFile("logo.png")
CopyFile("manifest.json")
CopyFile("portfolioPage.jpg")
CopyFile("robots.txt")
FindRemoveCopyFolder("static")