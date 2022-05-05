require('./commands')
import addContext from 'mochawesome/addContext'

Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === 'failed') {
        const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
        addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`);
    }
    
    if (test.state === 'passed') {
        const screenshotFileName = `${runnable.parent.title} -- ${test.title} (passed).png`;
        addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`);
    }

    let videoName = Cypress.spec.name
    videoName = `${videoName.replace('/.js.*', 'js')}.mp4`
    addContext({ test }, `videos/${videoName}`);
})
