if (!CSS.supports("selector(*:has(*))")) {
    document.querySelector("input[type=checkbox]").addEventListener("click", function(evt) {
        const css = document.querySelector(":root")
        if (css) {
            css.style.setProperty(
                `--panel-open`,
                evt.target.checked ? "1" : "0"
            )
        }
    })
}