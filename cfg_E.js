class Color {
    constructor(optionsArray) {
        this.options = optionsArray || [
            0x4844c3,
            0x3735a0,
            0x2b2979,
            0x1e1c52,
            0x10102c
        ]
        this.generatedColor = this.options[Math.floor(Math.random() * this.options.length)]
    }
}

module.exports = {
    token: "",
    prefix: "g",
    color: Color,
    pinChannel: "597480441175343104"
}