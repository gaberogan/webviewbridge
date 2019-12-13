package com.webviewtest;

import android.webkit.WebView;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import android.view.ViewGroup.LayoutParams;

public class WebViewManager extends SimpleViewManager<WebView> {
    public static final String REACT_CLASS = "WebView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected WebView createViewInstance(ThemedReactContext reactContext) {
        WebView webView = new WebView(reactContext);
        webView.setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));
        webView.getSettings().setJavaScriptEnabled(true);
        return webView;
    }

    @ReactProp(name="url")
    public void loadUrl(WebView webView, String url) {
        webView.loadUrl(url);
    }

    @ReactProp(name="html")
    public void loadHtml(WebView webView, String html) {
        webView.loadDataWithBaseURL("", html, "text/html", "UTF-8", null);
    }

    @Override
    public void receiveCommand(WebView webView, int commandId, ReadableArray args) {
        switch (commandId) {
            case 1: // Inject JavaScript
                webView.evaluateJavascript(args.getString(0), null);
                break;
        }
    }
}