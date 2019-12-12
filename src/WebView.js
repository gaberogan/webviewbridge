import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { requireNativeComponent, UIManager, findNodeHandle } from 'react-native'

const NativeWebView = requireNativeComponent('WebView')

const WebView = forwardRef(({ style, ...other }, ref) => {
    const webViewRef = useRef()

    useImperativeHandle(ref, () => ({
        injectJS: (jsString) => {
            UIManager.dispatchViewManagerCommand(
                findNodeHandle(webViewRef.current),
                'INJECT_JAVASCRIPT',
                [jsString],
            )
        },
    }))

    return (
        <NativeWebView
            {...other}
            style={[{ flex: 1 }, style]}
            ref={webViewRef}
        />
    )
})

export default WebView