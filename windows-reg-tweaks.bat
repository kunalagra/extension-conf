@echo off
rem Sublime Text Tweaks
SET st3Path=C:\Program Files\Sublime Text\sublime_text.exe
 
rem add it for all file types
@reg add "HKEY_CLASSES_ROOT\*\shell\Open with Sublime Text 3"         /t REG_SZ /v "" /d "Open with Sublime Text 3"   /f
@reg add "HKEY_CLASSES_ROOT\*\shell\Open with Sublime Text 3"         /t REG_EXPAND_SZ /v "Icon" /d "%st3Path%,0" /f
@reg add "HKEY_CLASSES_ROOT\*\shell\Open with Sublime Text 3\command" /t REG_SZ /v "" /d "%st3Path% \"%%1\"" /f
 
rem add it for folders
@reg add "HKEY_CLASSES_ROOT\Folder\shell\Open with Sublime Text 3"         /t REG_SZ /v "" /d "Open with Sublime Text 3"   /f
@reg add "HKEY_CLASSES_ROOT\Folder\shell\Open with Sublime Text 3"         /t REG_EXPAND_SZ /v "Icon" /d "%st3Path%,0" /f
@reg add "HKEY_CLASSES_ROOT\Folder\shell\Open with Sublime Text 3\command" /t REG_SZ /v "" /d "%st3Path% \"%%1\"" /f
pause

rem add it for right click on explorer
@reg add "HKEY_CLASSES_ROOT\Directory\Background\shell\Sublime"         /t REG_SZ /v "" /d "Open with Sublime Text 3"   /f
@reg add "HKEY_CLASSES_ROOT\Directory\Background\shell\Sublime"         /t REG_SZ /v "Icon" /d "%st3Path%" /f
@reg add "HKEY_CLASSES_ROOT\Directory\Background\shell\Sublime\command" /t REG_SZ /v "" /d "%st3Path% \"%%V\"" /f
pause

rem Disable Sign IN Button in Office 16
reg add "HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\Common\SignIn" /v "SignInOptions" /t REG_DWORD /d 3 /f

rem Enable to 2 Finger Tap for Right Click (Lenovo IdeaPad)
reg add "HKEY_CURRENT_USER\Software\Synaptics\SynTP\TouchPadRMIHID2cTM3336-1" /v "2FingerTapAction" /t REG_DWORD /d 2 /f

echo Registry entries added successfully.
pause