---
categories: productivity
---

# Windows

1. Open Cmd

2. `copy con SwapCaps.reg`

3. Paste the following, and press `Ctrl-Z`

````
REGEDIT4

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout]
"Scancode Map"=hex:00,00,00,00,00,00,00,00,03,00,00,00,1d,00,3a,00,3a,00,1d,00,00,00,00,00
````

4. `start SwapCaps.reg`

5.  Reboot