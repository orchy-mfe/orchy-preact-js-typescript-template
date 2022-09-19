import {render} from 'preact'
import {renderWithQiankun, qiankunWindow, QiankunProps} from 'vite-plugin-qiankun/dist/helper'
import {BrowserRouter} from 'react-router-dom'
import {App} from './app'
import './index.css'

const retrieveContainer = (props: QiankunProps) => (props.container ?? document).querySelector('#app') as HTMLElement

const renderApp = (props: QiankunProps = {}) => {
    render(
        <BrowserRouter basename={props.baseUrl}>
            <App />, 
        </BrowserRouter>,
        retrieveContainer(props)
    )
}

renderWithQiankun({
    mount(props: QiankunProps) {
        renderApp(props)
    },
    bootstrap() {
        console.log('bootstrap')
    },
    unmount(props: QiankunProps) {
        render(null, retrieveContainer(props))
    },
    update() {
        console.log('update')
    }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    renderApp({})
}