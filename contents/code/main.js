// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

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




registerShortcut("MoveWindowToSpecifiedCenter", "AWP Move Window to main Center", "Alt+Shift+S", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
               client.geometry = {
            x: LM_width + (MM_width - client.width) / 2,
            y: MMTop_Left_y + (MM_height - client.height) / 2,
            width: client.width,
            height: client.height // the dimensions active window moves into
        };
    }
});

registerShortcut("MoveWindowToMainLeft", "AWP Move Window to main Top Left", "", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        client.geometry = {
            x: MMTop_Left_x,
            y: MMTop_Left_y,
            width: client.width,
            height: client.height
        };
    }
});

registerShortcut("MoveWindowToMainRight", "AWP Move Window to main Top Right", "", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        client.geometry = {
            x: MMTop_Left_x + (MM_width - client.width),
            y: MMTop_Left_y,
            width: client.width,
            height: client.height
        };
    }
});

registerShortcut("MoveWindowToMainBotLeft", "AWP Move Window to main Bottom Left", "Alt+Shift+A", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        client.geometry = {
            x: MMTop_Left_x,
            y: MMTop_Left_y + MM_height - client.height,
            width: client.width,
            height: client.height
        };
    }
});

registerShortcut("MoveWindowToMainBotRight", "AWP Move Window to main Bottom Right", "Alt+Shift+D", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        client.geometry = {
            x: MMTop_Left_x + (MM_width - client.width),
            y: MMTop_Left_y + MM_height - client.height,
            width: client.width,
            height: client.height
        };
    }
});


registerShortcut("MoveWindowToTopLeftMo", "AWP Move Window to Top Leftmost", "Alt+Shift+Q", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        client.geometry = {
            x: LMTop_Left_x,
            y: LMTop_Left_y,
            width: client.width,
            height: client.height
        };
    }
});


registerShortcut("MoveWindowToBotLeftMo", "AWP Move Window to Bottom Leftmost", "Alt+Shift+Z", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        client.geometry = {
            x: LMTop_Left_x,
            y: LMTop_Left_y + LM_height - client.height,
            width: client.width,
            height: client.height
        };
    }
});

registerShortcut("MoveWindowToTopRightMo", "AWP Move Window to Top Rightmost ", "Alt+Shift+E", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        client.geometry = {
            x: RMTop_Left_x,
            y: RMTop_Left_y,
            width: client.width,
            height: client.height
        };
    }
});

registerShortcut("MoveWindowToBotRightMo", "AWP Move Window to Bottom Rightmost ", "Alt+Shift+C", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        client.geometry = {
            x: RMTop_Left_x,
            y: RMTop_Left_y + RM_height - client.height,
            width: client.width,
            height: client.height
        };
    }
});
