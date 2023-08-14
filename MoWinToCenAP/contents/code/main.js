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

registerShortcut("MoveWindowToSpecifiedCenter", "Move Window to specified Center", "Alt+C", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        //var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var MWTop_Left_x = 1440;
        var MWTop_Left_y = 0; // coordinates of left top point of the main window.
        var MW_width = 3840;
        var MW_height = 2160; // dimensions of the main window.
        client.geometry = {
            x: MWTop_Left_x + (MW_width - client.width) / 2,
            y: MWTop_Left_y + (MW_height - client.height) / 2,
            width: client.width,
            height: client.height
        };
    }
});
