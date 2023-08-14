# MoWinToCenAP

This is Kwin script to move the active window to the position you specified with a keyboard shortcut.
The code is inspired by https://github.com/KSmanis/kwin-move-window-to-center which is already implemented by KDE 5.108.0 / Plasma 5.27.6 by default so you can enable the shortcut in system settings.
The above-mentioned method does not work for multiple monitors since it uses `KWin.MaximizeArea`, which varies from window to window. It will move the active window to the center of the screen therein.

To solve this problem, this code specified the absolute coordinates where the top-left position will move to. Change the following part to customize the coordinate (beside the center) you need.

In implemented code of this repository, the active window will be moved to the center of the middle monitor. 
(MWTop_Left_x. MWTop_Left_y) is set as the coordinates of the top-left of the middle monitor which has dimension: MW_width  MW_height.
You simply change those variables to move the window to any position of any monitor.

```
        var MWTop_Left_x = 1440;
        var MWTop_Left_y = 0; // coordinates of left top point of the main window.
        var MW_width = 3840;
        var MW_height = 2160; // dimensions of the main window.
```

Download the package then run in the your terminal
``` kpackagetool5 --type=KWin/Script -i yourfoldname/MoWinToCenAP.zip```
Or simply copy the folder to
```
~/.local/share/kwin/scripts/
```
