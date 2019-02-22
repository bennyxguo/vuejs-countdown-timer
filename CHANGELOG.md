# Changelog

## 2.1.1 (Feb 22, 2019)
### Changes
- Changed the hiding logic of 00s, only hide if all previous units are hidden.
- Changed the modification of the prop value, to avoid props changes in methods.

## 2.1.0 (Feb 22, 2019)
#### Features
- Added the ability to auto hide when each unit's time reaches zero
- Added the ability to complete hide certain units

#### Bug fixes
- Fixed timestamp input for start time and end time not working


## 2.0.3 (Sep 30, 2018)
- Day won't be hidden even day is 00
- Changed the props value injected for slot `countdown`
- Added custom template usage document

## 2.0.2 (Sep 10, 2018)
- Added timestamp conversion, if timestamp is less than 14digits, will automatically add 000 to the end.

## 2.0.1 (Sep 4, 2018)
- Removed console.logs
- Added demo link to documents

## 2.0.0 (Sep 4, 2018)

- Complete rewrite of the foundation code
- `start-time` and `end-time` supports timestamp format and string timestamp
- Added millisecond timers, use with `interval` props
- Added `interval` props for millisecond timer feature, default `1000` ms
- Removed `current-time` props, default gets current real time `new Date()`

## 1.0.5 (Aus 31, 2018)

- Changed `tip-text` to `start-label` and `tip-text-end` to `end-label` .
- `start-label` and `end-label` has default value of empty, optional props, will not display if not passed.
- Added `label-position`, count down label can be set at `begin` or at `end`

## 1.0.4 (Aus 31, 2018)

- Changed package name and js file name to vuejs-countdown-timer
- Fixed ES6 import failed, due to incorrect package.json's main file config
- Added Chinese readme document

## 1.0.3 (Aus 29, 2018)

- Fix export wrong component name
- Fixed props failed to receive
- Fixed template missing text 
- Add custom template feature
