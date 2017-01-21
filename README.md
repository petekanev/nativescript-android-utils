# NativeScript Android Utility Classes and Helpers

The package provides minimalistic Java implementations of classes that may prove somewhat problematic when using them in the context of a NativeScript application.

### Exposed Classes

- `android.app.IntentService` exposed as `com.pip3r4o.android.app.IntentService`. The class now has a default empty constructor and can be extended freely to implement Background Services in NativeScript Android.

### Usage

Consuming classes from the list above is as easy as installing the package inside your NativeScript application.

```shell
npm install nativescript-android-utils --save
```