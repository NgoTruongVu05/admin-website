const menuHeaderButton = document.getElementById('menuHeaderButton');
const closeHeaderButton = document.getElementById('closeHeaderButton');
const aside = document.querySelector('aside');


menuHeaderButton.addEventListener('click', () => {
    var stringAsides = aside.querySelectorAll('h3');
    const behindMenu = createBehindMenu();

    aside.style.display = 'block';
    aside.style.width = '10rem';
    aside.style.zIndex = 2;
    closeHeaderButton.style.display = 'block';
    closeHeaderButton.style.zIndex = 2;
    stringAsides.forEach((stringAside) => {
        stringAside.style.display = 'block';
    })

    behindMenu.addEventListener('click', closeMenuHeader);
    closeHeaderButton.addEventListener('click', closeMenuHeader);

    function closeMenuHeader(){
        aside.style.width = '100%';
        aside.style.zIndex = 0;
        closeHeaderButton.style.display = 'none';
        closeHeaderButton.style.zIndex = 0;
        closeBehindMenu(behindMenu);

        if(window.screen.width<=1024){
            stringAsides.forEach((stringAside) => {
                stringAside.style.display = 'none';
            })
        } else{
            stringAsides.forEach((stringAside) => {
                stringAside.style.display = 'block';
            })
        }

        if(window.screen.width<=768){
            aside.style.display = 'none';
        } else{
            aside.style.display = 'block';
        }
    }
    resizeWindows(closeMenuHeader);
});

function resizeWindows(callback){
    window.addEventListener('resize',callback);
}
