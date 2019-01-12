
var RootViewController = UIViewController.extend({
    viewDidLoad() {
        UIViewController.prototype.viewDidLoad.apply(this, arguments);
        var scheme = new MDCButtonScheme();
        var button = new MDCButton(CGRectMake(0, 0, 250, 60));
        MDCContainedButtonThemer.applySchemeToButton(scheme, button);
        button.setTitleForState("Hello, World!", UIControlStateNormal);
        button.center = this.view.center;
        this.view.addSubview(button);
    }
});

var AppDelegate = UIResponder.extend({
    applicationDidFinishLaunchingWithOptions(application, launchOptions) {
        this._window = new UIWindow(UIScreen.mainScreen.bounds);
        this._window.backgroundColor = UIColor.whiteColor;
        this._window.rootViewController = new RootViewController();
        this._window.makeKeyAndVisible();
        return true;
    }
}, {
    protocols: [UIApplicationDelegate]
});

UIApplicationMain(0, null, null, NSStringFromClass(AppDelegate.class()));
