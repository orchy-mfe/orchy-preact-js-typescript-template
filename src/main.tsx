import {render} from 'preact'
import {renderWithQiankun, qiankunWindow, QiankunProps} from 'vite-plugin-qiankun/dist/helper'
import {App} from './app'
import './index.css'

const retrieveContainer = (props: QiankunProps) => (props.container ?? document).querySelector('#app') as HTMLElement

const renderApp = (props = {}) => {
    render(<App />, retrieveContainer(props))
}

renderWithQiankun({
    mount(props) {
        renderApp(props)
    },
    bootstrap() {
        console.log('bootstrap')
    },
    unmount(props) {
        render(null, retrieveContainer(props))
    },
    update() {
        console.log('update')
    }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    renderApp({})
}