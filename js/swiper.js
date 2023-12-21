~~function () {
    var owrap = document.getElementById("wrap"),
        oTab = document.querySelectorAll(".warp .tab li"),
        oul = document.querySelector(".warp .img ul"),
        timer = null,
        len = oTab.length,
        lastInex = 0;
    function change(idx) {
        //让uL偏移
        oul.style.left = "-" + (idx * 100) + "%"
        //边缘的判断
        if (idx >= len) {
            oul.style.left = "-" + 0 + "%"
            idx = 0
        }
        //鼠标移动上去给当前元素添加active名字
        oTab[lastInex].classList.remove("active")
        oTab[idx].classList.add("active")
        lastInex = idx
    }
    oTab.forEach((ele, index) => {
        ele.onmouseenter = function () {
            change(index)

        }
    })
    //设置自动播放
    function auto() {
        timer = setInterval(() => {
            change(lastInex + 1)
        }, 2000)
    }
    auto()
    owrap.onmouseenter = () => clearInterval(timer)
    owrap.onmouseleave = auto
}()