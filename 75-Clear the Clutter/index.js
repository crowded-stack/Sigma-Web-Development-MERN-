const fs = require('fs/promises');
const path = './assets';

const listFiles = async () => {
    let filesList = await fs.readdir(path);
    return filesList;
}

async function moveFiles(filesList) {
    filesList.forEach(async (element) => {
        let ext = element.split('.')[1];
        let newPath = path + '/' + ext;
        try {
            await fs.mkdir(newPath, { recursive: true });
            await moveFile(path, newPath, element);
        } catch (error) {
            if (error.code === 'EEXIST') {
                await moveFile(path, newPath, element);
            } else {
                console.error('Error creating directory:', error);
            }
        }
    });
}

async function moveFile(oldPath, newPath, fileName) {
    await fs.rename(oldPath.concat('/' + fileName), newPath.concat('/' + fileName));
}

(async ()=>{
     let files = await listFiles();
    moveFiles(files);
})()
