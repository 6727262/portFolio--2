document.getElementById('downloadBtn').addEventListener('click', function() {
    const resumeUrl = './KHAN MOHAMMED ARKAM NASIR (2) (1) 1 (6).pdf'
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'My_Resume.pdf'
    document.body.appendChild(link)

    link.click();

    // Remove the link from the document
    document.body.removeChild(link)
});
let vt=document.querySelector("#bt2")
vt.addEventListener('click',()=>{

    let link2="https://github.com/6727262/6727262"
    let a=document.createElement("a")
    document.body.appendChild(a)

    a.href=link2
a.click()
document.body.removeChild(a)
})