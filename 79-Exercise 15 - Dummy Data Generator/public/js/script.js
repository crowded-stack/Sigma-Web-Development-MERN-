
document.getElementById('btn-generate-data').addEventListener('click', async () => {
    let res = await fetch("http://localhost:3000/generate-data");
    console.log(res.json());
})