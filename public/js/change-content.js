let contents = document.querySelectorAll('.tab-content');
let tabList = document.querySelectorAll('.tab-item');

tabList.forEach(tab => {
    tab.addEventListener('click',changeTab);
});

function changeTab(){
    let toShow = document.getElementById(this.dataset.goto);
    contents.forEach(content=>{
        content.classList.add('hidden');
        if(toShow === content){
            toShow.classList.remove('hidden');
        }
    });

    tabList.forEach(tab =>{
        tab.classList.remove('active');
    });
    this.classList.add('active');
}