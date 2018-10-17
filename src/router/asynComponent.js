import React from 'react'
import NProgress from 'nprogress'

export default loadComponent => (
    class AsyncComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                Component: null,
            }
        }
        async componentDidMount() {
            if (this.state.Component !== null) return
            NProgress.start()
            console.log('start')
            try {
                const {default: Component} = await loadComponent()
                this.setState({ Component })
            }catch (err) {
                console.error(`Cannot load component in <AsyncComponent />`);
                throw err
            }
            console.log('end')
            NProgress.done()
        }
        // webpackChunkName: "my-chunk-name"
        render() {
            const { Component } = this.state
            return (Component) ? <Component {...this.props} /> : null
        }
    }
)
// export default function asyncComponent(importComponent) {
//     class AsyncComponent extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 component: null
//             };
//         }
//         async componentDidMount() {
//             const { default: component } = await importComponent();
//             this.setState({ component });
//         }
//         render() {
//             const C = this.state.component;
//             return C ? <C {...this.props } /> : null;
//         }
//     }
//     return AsyncComponent;
// }

// export const asyncComponent = loadComponent => (
//     class AsyncComponent extends React.Component {
//         state = {
//             Component: null,
//         }

//         componentWillMount() {
//             if (this.hasLoadedComponent()) {
//                 return;
//             }

//             loadComponent()
//                 .then(module => module.default)
//                 .then((Component) => {
//                     this.setState({ Component });
//                 })
//                 .catch((err) => {
//                     console.error(`Cannot load component in <AsyncComponent />`);
//                     throw err;
//                 });
//         }

//         hasLoadedComponent() {
//             return this.state.Component !== null;
//         }

//         render() {
//             const { Component } = this.state;
//             return (Component) ? <Component {...this.props} /> : null;
//         }
//     }
// );
