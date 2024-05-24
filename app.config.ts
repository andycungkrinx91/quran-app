export default defineAppConfig({
  ui: {
    primary: 'cyan',
    gray: 'cool',
  },
  vercelAnalytics: {
    mode: 'auto',
    debug: true,
    beforeSend: (event) => {
      if (event.url.includes('/private')) return null

      return event
    },
  },
})
