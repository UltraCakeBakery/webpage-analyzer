const genericCDNMatcher = /jquery-(\d+\.\d+\.\d+)(\.min)?\.js/

export const matchers = [
	{
		html(html = '') {
			const match = html.match(genericCDNMatcher)

			if (match?.length) {
				return {
					version: match[1],
					minification: {
						specialBuild: !!match[2]
					}
				}
			}
		}
	}
]

export const meta = {
	name: 'HubSpot Template Builder',
	site: 'hubspot.com',
	documentation: null,
	description: null
}
