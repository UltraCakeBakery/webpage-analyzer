import technologies from '../technologies'

export class Analyzer {
	public options: {}
	public html: string[]
	public css: string[]
	public javascript: string[]
	private technologies: never[]

	constructor(options = {}) {
		this.options = options
		this.html = []
		this.css = []
		this.javascript = []
		this.technologies = []
	}

	analyze() {
		for (const technology of technologies) {
			for (const matcher of technology.matchers) {
				if (matcher.html) {
					for (const html of this.html) {
						const results = matcher.html(html)
						this.technologies.push({
							...results,
							...technology.meta
						})
					}
				}
			}
		}
	}
}
