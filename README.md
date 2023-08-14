# MoWinToCenAP

This is a Kwin script template to move the active window to a specified position  with a keyboard shortcut `Alt+c`.
If you have a 4k in the middle horizontally and 2k on the left side vertically, the script will move the active window to the center of 4k monitor.

KDE 5.108.0 / Plasma 5.27.6 can move the active window to the center of the monitor therein which probably is not the center of your main monitor if you have more than one.


Adjust (MWTop_Left_x. MWTop_Left_y) to specify the monitor the window will move to.

```
        var MWTop_Left_x = 1440;
        var MWTop_Left_y = 0; // coordinates of the left top point of the specified monitor.
        var MW_width = 3840;
        var MW_height = 2160; // dimensions of the specified monitor.
```

And change the following formula to move it to any relative position of the specified monitor. 
```
    x: MWTop_Left_x + (MW_width - client.width) / 2,
    y: MWTop_Left_y + (MW_height - client.height) / 2,
```


Download the package then run in terminal

```
kpackagetool5 --type=KWin/Script -i yourfoldname/MoWinToCenAP.zip

```

Or simply extract it to a single folder and copy the folder to
```
~/.local/share/kwin/scripts/
```
