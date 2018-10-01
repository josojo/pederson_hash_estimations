const CurveBabyJubJubHelper = artifacts.require("CurveBabyJubJubHelper")
const CurveBabyJubJubHelperExtended = artifacts.require("CurveBabyJubJubHelperExtended")

contract("CurveBabyJubJubHelper", () => {
    let curve

    before(async () => {
        curveExtended = await CurveBabyJubJubHelperExtended.new()
        curve = await CurveBabyJubJubHelper.new()
    })


    describe("pointMul", () => {
        it("multiplies a point by a scalar", async () => {
            let x1 = "0x274DBCE8D15179969BC0D49FA725BDDF9DE555E0BA6A693C6ADB52FC9EE7A82C"
            let y1 = "0x5CE98C61B05F47FE2EAE9A542BD99F6B2E78246231640B54595FEBFD51EB853"

            let g = await curve.pointMul.estimateGas(x1, y1, 1)
            console.log(g)

            g = await curve.pointMul.estimateGas(x1, y1, 2)
            console.log(g)

            g = await curve.pointMul.estimateGas(x1, y1, 7)
            console.log(g)


            g = await curve.pointMul.estimateGas(x1, y1, 723523456897632142341234072352345689763214234123407235234568976321423412)
            console.log(g)
        })
    })
    describe("pointMul", () => {
        it("multiplies a point by a scalar", async () => {
            let x1 = "0x274DBCE8D15179969BC0D49FA725BDDF9DE555E0BA6A693C6ADB52FC9EE7A82C"
            let y1 = "0x5CE98C61B05F47FE2EAE9A542BD99F6B2E78246231640B54595FEBFD51EB853"

            let g = await curveExtended.pointMul.estimateGas(x1, y1, 1)
            console.log(g)

            g = await curveExtended.pointMul.estimateGas(x1, y1, 2)
            console.log(g)

            g = await curveExtended.pointMul.estimateGas(x1, y1, 7)
            console.log(g)


            g = await curveExtended.pointMul.estimateGas(x1, y1, 723523456897632142341234072352345689763214234123407235234568976321423412)
            console.log(g)
        })
    })
})