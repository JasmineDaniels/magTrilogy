const generateMarkdown = require('../utils/generateMarkdown')

describe("Generate Markdown", () => {
    describe("Initialization", () => {
        it("should return an object", () => {
            //const obj = new generateMarkdown(answers)
            const obj =  generateMarkdown.init(answers)

            expect(obj.answers.README1).toBe(typeof String)
        })
    })
})