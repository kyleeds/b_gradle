module.exports = {
  ci: {
    collect: {
      //staticDistDir: './dist',
      url: ["https://www.kt.com/", "https://www.ktds.com/" ],
      startServerCommand : "npx serve -s build",
      settings: {
        chromeFlags: "--no-sandbox --headless"
      },
      numberOfRuns: 10,
        },
    upload: {
        target: 'lhci',
        serverBaseUrl: 'http://localhost:19003',
        token: 'a81369e5-45c4-4eab-9869-7e6a48aa4d4a',
        },
    },
}
