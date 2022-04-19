const profileDataArgs = process.argv.slice(2, process.argv.length)

const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileInfo => console.log(profileInfo))
}

printProfileData(profileDataArgs)