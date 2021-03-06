﻿//
// Arranges child elements into a single line that can be oriented horizontally or vertically. 
//
function StackPanel() {
    ace.UIElement.call(this, "Windows.UI.Xaml.Controls.StackPanel");
};

// Inheritance
StackPanel.prototype = Object.create(ace.Panel.prototype);

StackPanel.prototype.getOrientation = function () { return this.get("StackPanel.Orientation"); };
StackPanel.prototype.setOrientation = function (orientation) { this.set("StackPanel.Orientation", orientation); };

module.exports = StackPanel;
