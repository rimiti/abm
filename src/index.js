require('fuckadblock');

/**
 * @description Recommended audit because AdBlock lock the file 'blockadblock.js'
 * If the file is not called, the variable does not exist 'blockAdBlock'
 * This means that AdBlock is present
 */
function adBlockDetected() {
    document.getElementById("abm").classList.add("is-detected");
    document.body.classList.add("disable-overflow")
}

if(typeof fuckAdBlock === 'undefined') {
    adBlockDetected();
} else {
    fuckAdBlock.onDetected(adBlockDetected);
    fuckAdBlock.on(true, adBlockDetected);
}

fuckAdBlock.setOption({
    checkOnLoad: true,
    resetOnEnd: false,
    debug: false
});
