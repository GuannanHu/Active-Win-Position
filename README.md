# Move active window to a specified position

This is a Kwin script template to move the active window to a specified position  with a keyboard shortcut `Alt+c`.
KDE's default tilting function moves windows inside its current monitor but not the main monitor if you have more than one.
This script fixes the problem.


## Installation
Download the released package then run in terminal

```
kpackagetool5 --type=KWin/Script -i yourfoldname/releasedPackage.zip

```

Or simply extract it to a single folder and copy the folder to
```
~/.local/share/kwin/scripts/
```

## usage
If you have a 4k in the middle horizontally and a 2k on each side vertically, Using the script as it is will move the active window as below:

```
"AWP Move Window to main Center", "Alt+Shift+S"
"AWP Move Window to main Bottom Left", "Alt+Shift+A"
"AWP Move Window to main Bottom Right", "Alt+Shift+D"
"AWP Move Window to Top Leftmost", "Alt+Shift+Q"
"AWP Move Window to Bottom Leftmost", "Alt+Shift+Z",
"AWP Move Window to Top Rightmost ", "Alt+Shift+E"
"AWP Move Window to Bottom Rightmost ", "Alt+Shift+C",
"AWP Move Window to main Top Left", ""
"AWP Move Window to main Top Right", "",
```
The above can be customized in `main.js` or in `systemsettting:shortcut:kwin`.

## Customize your monitor setup
If you have different monitor positions. Specify the left top coordinates in `main.js`
```
var MMTop_Left_x = 1440;
var MMTop_Left_y = 0; // coordinates of the left top point of the main monitor.
var MM_width = 4096;
var MM_height = 2160; // dimensions of the main monitor.

var LMTop_Left_x = 0;
var LMTop_Left_y = 0; // coordinates of the left top point of the Leftmost monitor.
var LM_height = 2560;
var LM_width = 1440; // dimensions of the Leftmost monitor.

var RMTop_Left_x = 5536;
var RMTop_Left_y = 0; // coordinates of the left top point of the Rightmost  monitor.
var RM_height = 2560;
var RM_width = 1440; // dimensions of the Rightmost monitor.
```
## Customize the positions
You can change the position where the window will move to by changing the value of (x,y) in the following:
```
client.geometry = {
    x: MMTop_Left_x,
    y: MMTop_Left_y + MM_height - client.height,
}
```
## Customize the size of the moved window.
 Specify dimensions at `client.width` and  `client.width`  in `main.js`.
 
```
width: client.width,
height: client.height // the dimensions active window moves into

```

